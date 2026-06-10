"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AcernisLogo from "./AcernisLogo";
import { useLanguage, Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
];

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
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" onClick={() => setOpen(false)}>
          <AcernisLogo size="md" variant="brand" />
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
                  color: active ? "#0A0A0A" : "#6B7280",
                  borderBottom: active ? "2px solid #07644D" : "2px solid transparent",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#6B7280"; }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center rounded border overflow-hidden" style={{ borderColor: "#D1D5DB" }}>
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="px-2.5 py-1.5 text-xs font-medium transition-all"
                style={{
                  color: lang === code ? "#F0FDF4" : "#6B7280",
                  backgroundColor: lang === code ? "#07644D" : "transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>

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
        <button className="md:hidden p-2" style={{ color: "#6B7280" }} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", backgroundColor: "rgba(255,255,255,0.96)" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm"
              style={{ color: isActive(l.href) ? "#0A0A0A" : "#6B7280" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-3">
            <div className="flex items-center rounded border overflow-hidden" style={{ borderColor: "#D1D5DB" }}>
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className="px-2.5 py-1.5 text-xs font-medium transition-all"
                  style={{
                    color: lang === code ? "#F0FDF4" : "#6B7280",
                    backgroundColor: lang === code ? "#07644D" : "transparent",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
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
