"use client";
import AcernisLogo from "./AcernisLogo";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0D130D", borderTop: "1px solid #1C2C1C" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <AcernisLogo size="md" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "#8A9EA0" }}>
              {t.footer.tagline}
            </p>
          </div>
          <p className="text-xs flex-shrink-0" style={{ color: "#8A9EA0" }}>© {year} Acernis. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
