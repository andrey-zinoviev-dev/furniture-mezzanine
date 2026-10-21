import { ProductPage } from "@/components/product/product-page";
import { pageMetadata } from "@/lib/metadata";
import { getProductPage } from "@/lib/product-content";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.meblirovka);

const product = getProductPage(siteRoutes.meblirovka.href);

export default function MeblirovkaPage() {
  if (!product) return null;
  return <ProductPage product={product} />;
}
