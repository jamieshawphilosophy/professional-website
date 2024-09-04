import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  const site = context.site || "localhost:4321";
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}
