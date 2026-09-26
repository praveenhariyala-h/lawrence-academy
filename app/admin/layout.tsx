import fs from "node:fs";
import path from "node:path";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const assetsDir = path.join(process.cwd(), "public", "admin", "assets");
  let stylesheet: string | null = null;

  try {
    const file = fs.readdirSync(assetsDir).find((name) => /^index-.*\.css$/.test(name));
    if (file) stylesheet = `/admin/assets/${file}`;
  } catch {
    stylesheet = null;
  }

  return (
    <div className="tina-tailwind">
      {stylesheet ? <link rel="stylesheet" href={stylesheet} /> : null}
      {children}
    </div>
  );
}
