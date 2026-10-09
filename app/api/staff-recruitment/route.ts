import { NextResponse } from "next/server";
import { getRecruitmentContent } from "@/lib/recruitment";

const FALLBACK_EMAIL = "lawrencestaffrecruitment@gmail.com";
const MAX_FILE = 8 * 1024 * 1024;
const MAX_TOTAL = 10 * 1024 * 1024;

function text(data: FormData, key: string, max = 500) {
  const value = data.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function fileOf(value: FormDataEntryValue | null) {
  if (value instanceof File && value.size > 0 && value.name) return value;
  return null;
}

function validDate(day: number, month: number, year: number) {
  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) return false;
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function accepted(result: { success?: boolean | string; message?: string } | null) {
  if (!result) return false;
  if (result.success === true || result.success === "true") return true;
  const message = (result.message ?? "").toLowerCase();
  return message.includes("activation") || message.includes("confirm your form");
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid application." }, { status: 400 });
  }

  if (text(data, "hp")) {
    return NextResponse.json({ ok: true });
  }

  const name = text(data, "name");
  const email = text(data, "email");
  const day = Number(text(data, "dobDay"));
  const month = Number(text(data, "dobMonth"));
  const year = Number(text(data, "dobYear"));
  const required = [name, text(data, "phone"), text(data, "address"), text(data, "subject"), text(data, "position"), text(data, "education")];
  if (required.some((value) => !value) || !isEmail(email) || !validDate(day, month, year)) {
    return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  const photo = fileOf(data.get("photo"));
  const payslip = fileOf(data.get("payslip"));
  const resume = fileOf(data.get("resume"));
  if (!photo || !resume) {
    return NextResponse.json({ ok: false, error: "Please attach your profile photo and resume." }, { status: 400 });
  }

  const files = [photo, payslip, resume].filter((file): file is File => Boolean(file));
  if (files.some((file) => file.size > MAX_FILE) || files.reduce((total, file) => total + file.size, 0) > MAX_TOTAL) {
    return NextResponse.json(
      { ok: false, error: "Attachments must be 10 MB or smaller in total." },
      { status: 400 }
    );
  }

  const details: Array<[string, string]> = [
    ["Name", name],
    ["Date of birth", `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`],
    ["Email", email],
    ["Phone", text(data, "phone")],
    ["Address", text(data, "address", 1000)],
    ["Subject preferred", text(data, "subject")],
    ["Position", text(data, "position")],
    ["Education", text(data, "education", 2000)],
    ["Experience", text(data, "experience", 4000) || "Not provided"],
    ["Profile photo", photo.name],
    ["Last pay slip", payslip?.name || "Not attached"],
    ["Updated resume", resume.name]
  ];

  const outbound = new FormData();
  outbound.set("_subject", `Staff recruitment — ${name}`);
  outbound.set("_template", "table");
  outbound.set("_captcha", "false");
  outbound.set("_replyto", email);
  outbound.set("name", name);
  outbound.set("email", email);
  outbound.set("message", details.map(([label, value]) => `${label}: ${value}`).join("\n"));
  for (const [label, value] of details) outbound.set(label, value);
  outbound.set("Profile photo file", photo, photo.name);
  if (payslip) outbound.set("Last pay slip file", payslip, payslip.name);
  outbound.set("Updated resume file", resume, resume.name);

  const content = await getRecruitmentContent();
  const configured = content.applicationEmail.trim();
  const to = isEmail(configured) ? configured : FALLBACK_EMAIL;
  const referer = request.headers.get("referer") || request.headers.get("origin") || "";
  const headers: Record<string, string> = { Accept: "application/json" };
  if (referer) headers.Referer = referer;

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers,
      body: outbound,
      signal: AbortSignal.timeout(20000)
    });
    const result = (await response.json().catch(() => null)) as { success?: boolean | string; message?: string } | null;
    if (!response.ok || !accepted(result)) {
      return NextResponse.json(
        { ok: false, error: "We could not send your application. Please try again, or call the school office." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "We could not send your application. Please try again, or call the school office." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
