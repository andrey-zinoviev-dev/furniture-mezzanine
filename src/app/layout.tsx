import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Inter } from "next/font/google";
import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-ui-family",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-heading-family",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${plex.variable} ${plexMono.variable} ${inter.variable}`}
    ><body id="top">
        <SiteHeader />
        <main>
          <Container>{children}</Container>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
