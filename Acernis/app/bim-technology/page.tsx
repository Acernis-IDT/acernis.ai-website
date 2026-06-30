"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Cpu, Map, RefreshCw, Layers, GitBranch, BookOpen, MoveRight } from "lucide-react";
import GeometricBIMVisual from "@/components/GeometricBIMVisual";


function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  const color = light ? "#07644D" : "#07644D";
  return (
    <p
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
      style={{ color }}
    >
      <span className="w-4 h-px inline-block" style={{ backgroundColor: color }} />
      {children}
    </p>
  );
}


export default function BIMTechnologyPage() {
  return (
    <main className="pt-14">

      {/* ── HERO ── */}
      <section className="py-28 px-6 relative overflow-hidden" style={{ backgroundColor: "#060A06" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 25% 55%, rgba(7,100,77,0.08) 0%, transparent 60%)" }}
        />
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>BIM Technology</Eyebrow>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#F0FDF4", letterSpacing: "-0.03em" }}
            >
              BIM is what makes everything else possible.
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "#9CA3AF" }}>
              Every network site holds critical data, but most of it lives in PDFs, spreadsheets and outdated 2D drawings. Acernis turns each site into a structured, accurate, always-current 3D digital asset that every workflow can depend on.
            </p>
          </div>
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid #1C2C1C", backgroundColor: "#040804" }}
            >
              <GeometricBIMVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BIM in construction, now in telecom ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D130D", borderTop: "1px solid #1C2C1C" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>The bigger shift</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#F0FDF4" }}>
              BIM in construction, now in telecom.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#9CA3AF" }}>
              BIM transformed how buildings are designed and built, replacing fragmented 2D drawings with structured, version-controlled 3D models that every stakeholder works from. The same shift is now happening in telecom.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#9CA3AF" }}>
              Acernis is building the infrastructure data layer that makes autonomous network rollouts possible. Every site becomes a machine-readable, always-current digital asset: the foundation AI agents need to plan, execute and verify work at scale.
            </p>
          </div>
          <div style={{ padding: "2rem 2rem" }}>
            {[
              {
                label: "Architecture",
                desc: "BIM replaced paper drawings with 3D models every architect works from.",
              },
              {
                label: "Construction",
                desc: "BIM became the single source of truth for contractors, structural engineers and project managers.",
              },
              {
                label: "Telecom",
                desc: "Acernis brings BIM to every network site: structured, version-controlled, AI-ready.",
              },
            ].map((item, i, arr) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                {/* Left: indicator + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: i === arr.length - 1 ? "#07644D" : "#0A1F14",
                    border: `1.5px solid ${i === arr.length - 1 ? "#0FA876" : "#1C3A28"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: i === arr.length - 1 ? "#F0FDF4" : "#0FA876",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: 1.5, flex: 1, backgroundColor: "#1C3A28", margin: "6px 0" }} />
                  )}
                </div>
                {/* Right: text */}
                <div style={{ paddingTop: 6, paddingBottom: i < arr.length - 1 ? "2rem" : 0 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#F0FDF4", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6B7280" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: What a BIM model means for a telecom site ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#080D08" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>What's inside</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F0FDF4" }}>
              What a BIM model means for a telecom site.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                Icon: Building2,
                title: "Structural data",
                desc: "Masts, mounting systems and load capacities, captured once and available to every workflow that touches the site.",
              },
              {
                Icon: Cpu,
                title: "Equipment data",
                desc: "Antennas, RRUs, cables and their exact configurations, always reflecting the current physical state of the site.",
              },
              {
                Icon: Map,
                title: "3D geometry + geolocation",
                desc: "Precise spatial models tied to real-world coordinates, ready for coverage simulations, EMF analysis and line-of-sight checks.",
              },
              {
                Icon: RefreshCw,
                title: "Version-controlled, always up to date",
                desc: "Every change is logged. Every stakeholder works from the same verified baseline: no stale data, no conflicting versions.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl p-6 transition-all"
                style={{ backgroundColor: "#0D130D", border: "1px solid #1C2C1C" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,100,77,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1C2C1C"; }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#0A3020" }}
                >
                  <Icon size={20} style={{ color: "#0FA876" }} />
                </div>
                <h3 className="text-sm font-semibold mb-2" style={{ color: "#F0FDF4" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Three ways we build and maintain your BIM foundation ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#F5F7F5", borderTop: "1px solid #E5E7EB" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#07644D" }}
            >
              <span className="w-4 h-px inline-block" style={{ backgroundColor: "#07644D" }} />
              Our services
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#0A0A0A", textWrap: "balance" } as React.CSSProperties}
            >
              Three ways we build and maintain your BIM foundation.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                Icon: Layers,
                number: "01",
                title: "BIM creation of your network sites",
                desc: "We capture your sites and build accurate, standardized 3D BIM models, ready to use across all rollout workflows from day one.",
              },
              {
                Icon: GitBranch,
                number: "02",
                title: "BIM versioning and status tracking",
                desc: "Every change is logged. Every model stays current. You always know the exact state of every site, across your entire portfolio.",
              },
              {
                Icon: BookOpen,
                number: "03",
                title: "BIM advisory and standards setup",
                desc: "We help you set up BIM standards, onboard your team, and integrate BIM into your existing processes and toolchain.",
              },
            ].map(({ Icon, number, title, desc }, i) => (
              <div
                key={i}
                className="rounded-xl"
                style={{ backgroundColor: "#0D0D0D", border: "1px solid #1F2937", padding: "2rem" }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#0A3020" }}
                  >
                    <Icon size={20} style={{ color: "#0FA876" }} />
                  </div>
                  <span className="font-mono text-xs font-bold" style={{ color: "#0FA876" }}>{number}</span>
                </div>
                <h3 className="text-base font-semibold mb-4" style={{ color: "#F0FDF4" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: What BIM enables ── */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>What BIM enables</Eyebrow>
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-tight mb-8"
            style={{ color: "#F0FDF4", letterSpacing: "-0.02em" }}
          >
            &ldquo;An accurate BIM model is not the destination.{" "}<br className="hidden md:inline" />It is what makes everything else possible.&rdquo;
          </blockquote>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#6B7280" }}>
            The Acernis platform runs 10 live automation use cases directly on top of BIM, spanning coverage planning, static and EMF assessments, concept design, detailed site design and more. All of them depend on the data foundation that BIM provides.
          </p>
          <Link
            href="/#use-cases"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all"
            style={{
              backgroundColor: "#07644D",
              color: "#F0FDF4",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#055035"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#07644D"; }}
          >
            See all 10 live use cases <MoveRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 relative overflow-hidden" style={{ borderTop: "1px solid #E5E7EB" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(7,100,77,0.05) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#0A0A0A", textWrap: "balance" } as React.CSSProperties}
          >
            Ready to build your BIM foundation?
          </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-medium rounded-md transition-all"
              style={{ backgroundColor: "#07644D", color: "#F0FDF4" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#055035"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#07644D"; }}
            >
              Book a strategy session <MoveRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
