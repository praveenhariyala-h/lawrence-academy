import { NextResponse } from "next/server";
import { getAdmissionsContent } from "@/lib/admissions";

const FALLBACK_EMAIL = "lawrence.admn@gmail.com";

const labels: Array<[string, string]> = [
  ["childName", "Child's full name"],
  ["dob", "Date of birth"],
  ["currentGrade", "Current grade"],
  ["grade", "Grade applying for"],
  ["currentSchool", "Current school"],
  ["parentName", "Parent / guardian"],
  ["relationship", "Relationship"],
  ["phone", "Mobile"],
  ["email", "Email"],
  ["year", "Academic year"],
  ["source", "Heard about us"],
  ["message", "Message"]
];

function text(data: Record<string, unknown>, key: string, max = 500) {
  const value = data[key];
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function accepted(result: { success?: boolean | string; message?: string } | null) {
  if (!result) return false;
  if (result.success === true || result.success === "true") return true;
  const message = (result.message ?? "").toLowerCase();
  return message.includes("activation") || message.includes("confirm your form");
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ ok: false, error: "Invalid enquiry." }, { status: 400 });
    }
    data = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid enquiry." }, { status: 400 });
  }

  if (text(data, "hp")) {
    return NextResponse.json({ ok: true });
  }

  const childName = text(data, "childName");
  const parentName = text(data, "parentName");
  const email = text(data, "email");
  const required = [childName, text(data, "grade"), parentName, text(data, "relationship"), text(data, "phone"), text(data, "year")];
  if (required.some((value) => !value) || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  const content = await getAdmissionsContent();
  const to = isEmail(content.enquiryEmail.trim()) ? content.enquiryEmail.trim() : FALLBACK_EMAIL;
  const details = labels.map(([key, label]) => {
    const value = text(data, key, key === "message" ? 4000 : 500);
    return [label, value || "Not provided"] as const;
  });

  const referer = request.headers.get("referer") || request.headers.get("origin") || "";
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
  if (referer) headers.Referer = referer;

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        _subject: `Admission enquiry — ${childName}`,
        _template: "table",
        _captcha: "false",
        _replyto: email,
        name: parentName,
        email,
        message: details.map(([label, value]) => `${label}: ${value}`).join("\n"),
        ...Object.fromEntries(details)
      }),
      signal: AbortSignal.timeout(15000)
    });
    const result = (await response.json().catch(() => null)) as { success?: boolean | string; message?: string } | null;
    if (!response.ok || !accepted(result)) {
      return NextResponse.json(
        { ok: false, error: "We could not send your enquiry. Please try again, or call the admissions helpline." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not send your enquiry. Please try again, or call the admissions helpline." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
