"use client";
import { useLanguage } from "@/lib/i18n";

export default function CaseStudyPage() {
  const { t } = useLanguage();
  const cs = t.caseStudy;

  return (
    <main className="pt-32 pb-24 min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>

      {/* ── Header ── */}
      <section className="px-6 pt-12 pb-10" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <div className="max-w-4xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#07644D" }}>
            <span className="w-4 h-px inline-block" style={{ backgroundColor: "#07644D" }} />
            {cs.eyebrow}
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight mb-6"
            style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}
          >
            {cs.title}
          </h1>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#F5F7F5", border: "1px solid #E5E7EB" }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#07644D" }}>
              {cs.aboutEyebrow}
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              {cs.aboutP1.includes("BearingPoint") ? (
                <>
                  {cs.aboutP1.split("BearingPoint")[0]}
                  <strong style={{ color: "#0A0A0A" }}>BearingPoint</strong>
                  {cs.aboutP1.split("BearingPoint")[1]}
                </>
              ) : cs.aboutP1}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
              {cs.aboutP2}
            </p>
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: "#F0FDF4" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15v-4m0-4h.01" stroke="#07644D" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold" style={{ color: "#0A0A0A" }}>Coming Soon</h2>
          <p className="text-base max-w-md" style={{ color: "#6B7280" }}>
            An updated version of this whitepaper is being prepared. Check back shortly.
          </p>
        </div>
      </section>

    </main>
  );
}
