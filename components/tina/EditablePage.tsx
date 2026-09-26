"use client";

import { createContext, useContext, type ReactNode } from "react";
import { tinaField, useTina } from "tinacms/dist/react";

type EditableRecord = Record<string, unknown> & {
  _content_source?: {
    queryId: string;
    path: Array<string | number>;
  };
};

const TinaPageContext = createContext<Record<string, unknown> | null>(null);

export function EditablePage<T extends Record<string, unknown>>({
  query,
  variables,
  data,
  documentPath,
  children
}: {
  query: string;
  variables: { relativePath: string };
  data: T;
  documentPath: string;
  children: ReactNode;
}) {
  const page = useTina({
    query,
    variables,
    data,
    experimental___selectFormByFormId: () => documentPath
  });

  return <TinaPageContext.Provider value={page.data}>{children}</TinaPageContext.Provider>;
}

export function useEditable<T>(collection: string, fallback: T): T {
  const data = useContext(TinaPageContext);
  const live = data?.[collection];
  if (live && typeof live === "object") return live as T;
  return fallback;
}

export function tinaMark(object: object | null | undefined, property: string, index?: number) {
  if (!object) return undefined;
  const value = tinaField(object as EditableRecord, property, index);
  return value || undefined;
}
