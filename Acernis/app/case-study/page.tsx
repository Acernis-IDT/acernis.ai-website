"use client";
import dynamic from "next/dynamic";
import { useLanguage } from "@/lib/i18n";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), { ssr: false });

const PDF_URL = "/AI%20Driven%20Autonomous%20Networks_Whitepaper.pdf";

export default function CaseStudyPage() {
  const { t } = useLanguage();
  const cs = t.caseStudy;

  return (
    <main className="pt-24 pb-24 min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>

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

          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#F5F7F5", border: "1px solid #E5E7EB" }}
          >
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

      {/* ── PDF Viewer (canvas-rendered, no download) ── */}
      <section className="px-6 pt-10">
        <div className="max-w-4xl mx-auto">
          <PdfViewer url={PDF_URL} />
        </div>
      </section>

    </main>
  );
}
