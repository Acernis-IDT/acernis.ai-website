"use client";
import Link from "next/link";
import AcernisLogo from "./AcernisLogo";
import { useLanguage } from "@/lib/i18n";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0D0D0D", borderTop: "1px solid #1F2937" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <AcernisLogo size="md" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "#8A9EA0" }}>
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex items-center gap-5 flex-shrink-0">
            <a
              href="https://www.linkedin.com/company/acernis-ag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acernis on LinkedIn"
              style={{ color: "#8A9EA0", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0FA876"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A9EA0"; }}
            >
              <LinkedInIcon />
            </a>
            <Link
              href="/terms-and-conditions"
              className="text-xs transition-colors"
              style={{ color: "#8A9EA0" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F0FDF4"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A9EA0"; }}
            >
              Terms &amp; Conditions
            </Link>
            <p className="text-xs" style={{ color: "#8A9EA0" }}>© {year} Acernis. {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
