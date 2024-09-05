// src/sanity/lib/load-query.ts
import { sanityClient } from "sanity:client";
import type { QueryParams } from "sanity";

import { PUBLIC_SANITY_VISUAL_EDITING_ENABLED } from "astro:env/client";

const token = import.meta.env.SANITY_API_READ_TOKEN;
const visualEditingEnabled = PUBLIC_SANITY_VISUAL_EDITING_ENABLED;
export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  if (visualEditingEnabled && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing."
    );
  }

  const perspective = visualEditingEnabled ? "previewDrafts" : "published";

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
      stega: visualEditingEnabled,
      ...(visualEditingEnabled ? { token } : {}),
    }
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
