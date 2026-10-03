import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.about);

export default function AboutPage() {
  return <PageStub route={siteRoutes.about} />;
}
