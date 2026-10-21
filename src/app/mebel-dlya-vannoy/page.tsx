import { ProductPage } from "@/components/product/product-page";
import { pageMetadata } from "@/lib/metadata";
import { getProductPage } from "@/lib/product-content";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.mebelDlyaVannoy);

const product = getProductPage(siteRoutes.mebelDlyaVannoy.href);

export default function MebelDlyaVannoyPage() {
  if (!product) return null;
  return <ProductPage product={product} />;
}
