import { ProductPage } from "@/components/product/product-page";
import { pageMetadata } from "@/lib/metadata";
import { getProductPage } from "@/lib/product-content";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.garderobnye);

const product = getProductPage(siteRoutes.garderobnye.href);

export default function GarderobnyePage() {
  if (!product) return null;
  return <ProductPage product={product} />;
}
