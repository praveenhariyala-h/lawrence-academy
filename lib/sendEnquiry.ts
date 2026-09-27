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

export function attachedFileName(value: FormDataEntryValue | null) {
  if (value instanceof File && value.size > 0 && value.name) return value.name;
  return "Not attached";
}
