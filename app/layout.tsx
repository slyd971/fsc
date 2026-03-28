import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { siteData } from "@/data/site";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <div className="site-shell">
          <Navbar navigation={siteData.navigation} brand={siteData.brand} />
          {children}
          <Footer
            brand={siteData.brand}
            navigation={siteData.navigation}
            contact={siteData.contact}
          />
        </div>
      </body>
    </html>
  );
}
