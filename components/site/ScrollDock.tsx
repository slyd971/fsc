"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUp } from "lucide-react";
import { getLocaleFromPathname } from "@/lib/i18n";
import { getUiCopy } from "@/lib/ui-copy";

export function ScrollDock() {
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const pathname = usePathname();
  const copy = getUiCopy(getLocaleFromPathname(pathname)).scrollDock;

  useEffect(() => {
    const updateState = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      setCanScrollUp(scrollTop > 24);
      setCanScrollDown(scrollTop < maxScroll - 24);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div className="fixed bottom-[3.8rem] right-3 z-[79] flex flex-col gap-2 sm:bottom-[4.4rem] sm:right-4">
      <ScrollButton
        label={copy.top}
        icon={<ArrowUp className="h-3.5 w-3.5" />}
        onClick={scrollToTop}
        disabled={!canScrollUp}
      />
      <ScrollButton
        label={copy.bottom}
        icon={<ArrowDown className="h-3.5 w-3.5" />}
        onClick={scrollToBottom}
        disabled={!canScrollDown}
      />
    </div>
  );
}

function ScrollButton({
  label,
  icon,
  onClick,
  disabled,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/42 text-white/78 backdrop-blur-md transition sm:h-10 sm:w-10 ${
        disabled
          ? "cursor-default opacity-28"
          : "hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
      }`}
    >
      {icon}
    </button>
  );
}
