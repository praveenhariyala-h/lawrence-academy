import React from "react";
import Markdoc, { type Node } from "@markdoc/markdoc";

function toNode(value: unknown): Node | null {
  if (!value) return null;
  if (typeof value === "object" && value && "node" in value) {
    return (value as { node: Node }).node;
  }
  if (typeof value === "object" && value && "$$mdtype" in value) {
    return value as Node;
  }
  if (typeof value === "string") {
    return Markdoc.parse(value) as unknown as Node;
  }
  return null;
}

export async function renderMarkdoc(content: unknown, fallback = "") {
  let raw = content;
  if (typeof content === "function") {
    raw = await content();
  }
  const node = toNode(raw) ?? toNode(fallback);
  if (!node) return null;
  const ast = node as unknown as Node;
  const renderable = Markdoc.transform(ast);
  return Markdoc.renderers.react(renderable, React);
}
