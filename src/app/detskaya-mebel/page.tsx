import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.detskayaMebel);

export default function DetskayaMebelPage() {
  return <PageStub route={siteRoutes.detskayaMebel} />;
}
