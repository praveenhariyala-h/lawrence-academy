export type EnquiryDelivery = {
  mail: string;
  whatsapp: string;
};

export function whatsappNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("91") && digits.length >= 12) return digits;
  if (digits.startsWith("0")) return `91${digits.slice(1)}`;
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

export function sendToMailAndWhatsApp(input: {
  email: string;
  whatsapp: string;
  subject: string;
  body: string;
}): EnquiryDelivery {
  const text = input.body.trim();
  const mail = `mailto:${input.email}?subject=${encodeURIComponent(input.subject)}&body=${encodeURIComponent(text)}`;
  const whatsapp = `https://wa.me/${whatsappNumber(input.whatsapp)}?text=${encodeURIComponent(`${input.subject}\n\n${text}`)}`;

  window.open(whatsapp, "_blank", "noopener,noreferrer");
  const link = document.createElement("a");
  link.href = mail;
  document.body.appendChild(link);
  link.click();
  link.remove();

  return { mail, whatsapp };
}

export type FormInboxResult = { ok: true } | { ok: false; offline?: boolean };

export async function sendFormToInbox(input: {
  email: string;
  subject: string;
  replyTo: string;
  name: string;
  fields: Array<[string, string]>;
  files?: Array<{ label: string; file: File }>;
  honey?: string;
}): Promise<FormInboxResult> {
  if (input.honey?.trim()) return { ok: true };

  const body = new FormData();
  body.set("_subject", input.subject);
  body.set("_template", "table");
  body.set("_captcha", "false");
  body.set("_replyto", input.replyTo);
  body.set("name", input.name);
  body.set("email", input.replyTo);
  body.set("message", input.fields.map(([label, value]) => `${label}: ${value}`).join("\n"));
  for (const [label, value] of input.fields) body.set(label, value);
  for (const item of input.files ?? []) {
    if (item.file.size > 0) body.set(item.label, item.file, item.file.name);
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(input.email.trim())}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body
    });
    const result = (await response.json().catch(() => null)) as { success?: boolean | string; message?: string } | null;
    const message = result?.message ?? "";
    const accepted =
      result?.success === true || result?.success === "true" || /activation|confirm your form/i.test(message);
    if (!response.ok || !accepted) return { ok: false };
    return { ok: true };
  } catch {
    return { ok: false, offline: true };
  }
}
