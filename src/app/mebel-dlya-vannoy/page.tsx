import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.mebelDlyaVannoy);

export default function MebelDlyaVannoyPage() {
  return <PageStub route={siteRoutes.mebelDlyaVannoy} />;
}
