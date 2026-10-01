"use client";

import AlumniForm from "@/components/alumni/AlumniForm";
import { useEditable } from "@/components/tina/EditablePage";
import type { AlumniContent } from "@/lib/alumni";

export default function AlumniFormView({
  content: initial,
  email,
  whatsapp
}: {
  content: AlumniContent;
  email: string;
  whatsapp: string;
}) {
  const content = useEditable("alumni", initial);

  return (
    <div className="alumni-page">
      <section className="alumni-main" id="alumni-form">
        <div className="wrap">
          <AlumniForm form={content.form} email={email} whatsapp={whatsapp} />
        </div>
      </section>
    </div>
  );
}
