import { spawnSync } from "node:child_process";

const hasTinaCloud = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN);

if (hasTinaCloud) {
  const tina = spawnSync("npx", ["tinacms", "build"], { stdio: "inherit", shell: true });
  if (tina.status !== 0) process.exit(tina.status ?? 1);
} else {
  console.log(
    "Skipping the hosted Tina admin build. Add TINA_TOKEN to .env when you want TinaCloud, and stop npm run dev first so port 9000 is free. The site build continues from content/*.json."
  );
}

const next = spawnSync("npx", ["next", "build"], { stdio: "inherit", shell: true });
process.exit(next.status ?? 1);
