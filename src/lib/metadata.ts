import type { Metadata } from "next";
import type { SiteRoute } from "@/lib/routes";
import { site } from "@/lib/site";

export function pageMetadata(route: SiteRoute): Metadata {
  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: route.href,
    },
  };
}

export function rootMetadata(): Metadata {
  return {
    title: {
      default: site.defaultTitle,
      template: `%s | ${site.name}`,
    },
    description: site.defaultDescription,
  };
}
