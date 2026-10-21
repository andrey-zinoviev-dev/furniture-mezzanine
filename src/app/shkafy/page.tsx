import { ProductPage } from "@/components/product/product-page";
import { pageMetadata } from "@/lib/metadata";
import { getProductPage } from "@/lib/product-content";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.shkafy);

const product = getProductPage(siteRoutes.shkafy.href);

export default function ShkafyPage() {
  if (!product) return null;
  return <ProductPage product={product} />;
}
