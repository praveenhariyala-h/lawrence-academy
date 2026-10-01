import fs from "node:fs";

const types = fs.readFileSync("tina/__generated__/types.ts", "utf8");

function block(name) {
  const start = types.indexOf(`export const ${name}`);
  const end = types.indexOf("export const", start + 20);
  const slice = types.slice(start, end === -1 ? undefined : end);
  const tick = slice.indexOf("`");
  const endTick = slice.lastIndexOf("`");
  return slice.slice(tick + 1, endTick);
}

const query = `${block("NewsPartsFragmentDoc")}\n${block("NewsDocument")}`.replace(/\$\{NewsPartsFragmentDoc\}/, "");
fs.writeFileSync("scripts/news-query.gql", query);
console.log("query chars", query.length);

const endpoints = ["http://localhost:4001/graphql", "http://127.0.0.1:4001/graphql"];
for (const url of endpoints) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { relativePath: "news.json" }
      })
    });
    const text = await response.text();
    console.log("\n", url, response.status, text.slice(0, 1500));
  } catch (error) {
    console.log("\n", url, "failed", error.message);
  }
}
