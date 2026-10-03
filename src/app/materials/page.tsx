import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.materials);

export default function MaterialsPage() {
  return <PageStub route={siteRoutes.materials} />;
}
