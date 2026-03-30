import type { Metadata } from "next";
import "./globals.css";
import { LocaleHtmlController } from "@/components/site/LocaleHtmlController";
import { SiteChrome } from "@/components/site/SiteChrome";
import { siteData } from "@/data/site";
import { getSiteShell } from "@/lib/site-content";

export const metadata: Metadata = {
  title: siteData.metadata.title,
  description: siteData.metadata.description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [shellFr, shellEn] = await Promise.all([getSiteShell("fr"), getSiteShell("en")]);

  return (
    <html lang="fr" data-theme="island-daylight" data-font-preset="default">
      <body>
        <LocaleHtmlController />
        <SiteChrome shellFr={shellFr} shellEn={shellEn}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
