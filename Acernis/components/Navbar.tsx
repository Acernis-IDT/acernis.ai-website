"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AcernisLogo from "./AcernisLogo";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.platform },
    { href: "/about", label: t.nav.about },
    { href: "/case-study", label: t.nav.caseStudy },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(6,8,10,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(28,44,28,0.6)" }}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" onClick={() => setOpen(false)}>
          <AcernisLogo size="md" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm rounded-md transition-colors"
                style={{
                  color: active ? "#F0FDF4" : "#B0BBBF",
                  borderBottom: active ? "2px solid #07644D" : "2px solid transparent",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#F0FDF4"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#B0BBBF"; }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="px-3 py-1.5 text-xs font-medium rounded border transition-all"
            style={{ color: "#B0BBBF", borderColor: "#1C2C1C", backgroundColor: "transparent" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#07644D"; (e.currentTarget as HTMLElement).style.color = "#07644D"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1C2C1C"; (e.currentTarget as HTMLElement).style.color = "#B0BBBF"; }}
          >
            {lang === "en" ? "DE" : "EN"}
          </button>

          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg transition-all"
            style={{ backgroundColor: "#07644D", color: "#F0FDF4" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#055035"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#07644D"; }}
          >
            {t.nav.bookDemo}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" style={{ color: "#B0BBBF" }} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-2" style={{ borderTop: "1px solid #1C2C1C" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm"
              style={{ color: isActive(l.href) ? "#F0FDF4" : "#B0BBBF" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="px-3 py-1.5 text-xs font-medium rounded border"
              style={{ color: "#B0BBBF", borderColor: "#1C2C1C" }}
            >
              {lang === "en" ? "DE" : "EN"}
            </button>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-sm font-semibold rounded-lg"
              style={{ backgroundColor: "#07644D", color: "#F0FDF4" }}
            >
              {t.nav.bookDemo}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
