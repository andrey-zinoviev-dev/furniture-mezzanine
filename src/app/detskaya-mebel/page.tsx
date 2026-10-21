import { ProductPage } from "@/components/product/product-page";
import { pageMetadata } from "@/lib/metadata";
import { getProductPage } from "@/lib/product-content";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.detskayaMebel);

const product = getProductPage(siteRoutes.detskayaMebel.href);

export default function DetskayaMebelPage() {
  if (!product) return null;
  return <ProductPage product={product} />;
}
