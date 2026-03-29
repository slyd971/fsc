import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { FontSwitcher } from "@/components/site/FontSwitcher";
import { Navbar } from "@/components/site/Navbar";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: siteData.metadata.title,
  description: siteData.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="site-shell">
          <Navbar navigation={siteData.navigation} brand={siteData.brand} />
          {children}
          <Footer
            brand={siteData.brand}
            navigation={siteData.navigation}
            contact={siteData.contact}
          />
          <FontSwitcher />
        </div>
      </body>
    </html>
  );
}
