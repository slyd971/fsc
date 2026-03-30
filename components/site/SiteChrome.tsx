"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { FontSwitcher } from "@/components/site/FontSwitcher";
import { Navbar } from "@/components/site/Navbar";
import { ScrollDock } from "@/components/site/ScrollDock";
import { getLocaleFromPathname } from "@/lib/i18n";

type ShellData = {
  brand: {
    name: string;
    tagline: string;
    mark: string;
  };
  navigation: {
    items: Array<{
      label: string;
      href: string;
    }>;
  };
  contact: {
    methods: Array<{
      label: string;
      value: string;
      detail: string;
      href: string;
      icon: "instagram" | "message-circle" | "phone" | "mail";
    }>;
  };
};

export function SiteChrome({
  shellFr,
  shellEn,
  children,
}: {
  shellFr: ShellData;
  shellEn: ShellData;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith("/studio");
  const locale = getLocaleFromPathname(pathname);
  const shell = locale === "en" ? shellEn : shellFr;

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <div className="site-shell">
      <Navbar navigation={shell.navigation} brand={shell.brand} />
      {children}
      <Footer brand={shell.brand} navigation={shell.navigation} contact={shell.contact} />
      <ScrollDock />
      <FontSwitcher />
    </div>
  );
}
