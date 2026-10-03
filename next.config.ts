import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // SEO-маршруты в таблице заданы со слэшем на конце: /kuhni/, /projects/ и т.д.
  trailingSlash: true,
};

export default nextConfig;
