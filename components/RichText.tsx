export default function RichText({ text }: { text: string }) {
  const paragraphs = text.trim().split(/\n\s*\n/);

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) => {
            const bold = part.match(/^\*\*(.+)\*\*$/);
            return bold ? <strong key={partIndex}>{bold[1]}</strong> : part;
          })}
        </p>
      ))}
    </>
  );
}
