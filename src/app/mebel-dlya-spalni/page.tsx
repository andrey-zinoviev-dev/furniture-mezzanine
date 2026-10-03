import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.mebelDlyaSpalni);

export default function MebelDlyaSpalniPage() {
  return <PageStub route={siteRoutes.mebelDlyaSpalni} />;
}
