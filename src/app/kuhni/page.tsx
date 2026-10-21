import { ProductPage } from "@/components/product/product-page";
import { pageMetadata } from "@/lib/metadata";
import { getProductPage } from "@/lib/product-content";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.kuhni);

const product = getProductPage(siteRoutes.kuhni.href);

export default function KuhniPage() {
  if (!product) return null;
  return <ProductPage product={product} />;
}
