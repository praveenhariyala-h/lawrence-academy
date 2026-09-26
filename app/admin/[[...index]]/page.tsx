"use client";

import { useEffect, useState, type ComponentType } from "react";
import TinaCMS, { TinaAdmin } from "tinacms";
import config from "../../../tina/config";

const localApiUrl = "http://localhost:4001/graphql";

// Tina's published provider types lag the admin entry used by the CMS app.
const TinaProvider = TinaCMS as unknown as ComponentType<Record<string, unknown>>;

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const schema = { ...config.schema, config };

  return (
    <TinaProvider {...config} schema={schema} client={{ apiUrl: localApiUrl }} tinaGraphQLVersion="3.0.0">
      <TinaAdmin config={config} />
    </TinaProvider>
  );
}
