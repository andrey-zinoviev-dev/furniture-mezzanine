import type { Metadata } from "next";
import { Onest, Unbounded } from "next/font/google";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const onest = Onest({
  variable: "--font-ui-family",
  subsets: ["latin", "cyrillic"],
});

const unbounded = Unbounded({
  variable: "--font-display-family",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${onest.variable} ${unbounded.variable}`}>
      <body>
        <SiteHeader />
        <main>
          <Container>{children}</Container>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
