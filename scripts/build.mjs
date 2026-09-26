import { spawnSync } from "node:child_process";

const hasTinaCloud = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN);

if (hasTinaCloud) {
  const tina = spawnSync("npx", ["tinacms", "build"], { stdio: "inherit", shell: true });
  if (tina.status !== 0) process.exit(tina.status ?? 1);
} else {
  console.log(
    "TinaCloud credentials are not set, so this build skips the hosted admin. The site still reads content/*.json. Use npm run dev to edit locally, or set NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN and run npm run build:tina."
  );
}

const next = spawnSync("npx", ["next", "build"], { stdio: "inherit", shell: true });
process.exit(next.status ?? 1);
