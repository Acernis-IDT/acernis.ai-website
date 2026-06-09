"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Database, Zap, Brain, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";


const LOGOS = [
  { src: "/Vodafone_logo.png",      alt: "Vodafone",      w: 120, h: 52 },
  { src: "/VirginMediaO2_logo.png", alt: "Virgin Media O2", w: 120, h: 52 },
  { src: "/GFTD_logo.png",          alt: "GfTD",          w: 120, h: 52 },
  { src: "/EKS_logo.png",           alt: "EKS",           w: 80,  h: 36 },
  { src: "/Cablex_Logo.svg.png",    alt: "Cablex",        w: 120, h: 52 },
  { src: "/insyte_logo.png",        alt: "Insyte",        w: 120, h: 52 },
  { src: "/SPIE_logo.svg.png",      alt: "SPIE",          w: 80,  h: 36 },
  { src: "/Animo_logo.png",         alt: "Animo",         w: 120, h: 52 },
];

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodeCount = 48;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1.5 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.018 + Math.random() * 0.025,
    }));

    const packets = Array.from({ length: 10 }, () => ({
      from: Math.floor(Math.random() * nodeCount),
      to: Math.floor(Math.random() * nodeCount),
      t: Math.random(),
      spd: 0.003 + Math.random() * 0.004,
    }));

    let animId: number;

    function draw() {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 155) {
            ctx.strokeStyle = `rgba(7,100,77,${(1 - d / 155) * 0.28})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      packets.forEach((p) => {
        const fn = nodes[p.from], tn = nodes[p.to];
        const px = fn.x + (tn.x - fn.x) * p.t;
        const py = fn.y + (tn.y - fn.y) * p.t;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(15,168,118,0.9)";
        ctx.fillStyle = "rgba(15,168,118,0.85)";
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        p.t += p.spd;
        if (p.t >= 1) { p.from = p.to; p.to = Math.floor(Math.random() * nodeCount); p.t = 0; }
      });

      nodes.forEach((n) => {
        n.phase += n.speed;
        const glow = 0.35 + Math.sin(n.phase) * 0.28;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(15,168,118,${glow})`;
        ctx.fillStyle = `rgba(15,168,118,${glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx = Math.abs(n.vx); }
        if (n.x > w) { n.x = w; n.vx = -Math.abs(n.vx); }
        if (n.y < 0) { n.y = 0; n.vy = Math.abs(n.vy); }
        if (n.y > h) { n.y = h; n.vy = -Math.abs(n.vy); }
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}

function AntennaIcon() {
  return (
    <motion.div className="mb-7 flex-shrink-0"
      animate={{
        filter: [
          "drop-shadow(0 0 2px rgba(15,168,118,0.2))",
          "drop-shadow(0 0 12px rgba(15,168,118,0.75))",
          "drop-shadow(0 0 2px rgba(15,168,118,0.2))",
        ],
        scale: [1, 1.06, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Database size={52} style={{ color: "#0FA876" }} />
    </motion.div>
  );
}

function ChecklistIcon() {
  return (
    <motion.div className="mb-7 flex-shrink-0"
      animate={{
        filter: [
          "drop-shadow(0 0 0px rgba(15,168,118,0))",
          "drop-shadow(0 0 18px rgba(15,168,118,0.95))",
          "drop-shadow(0 0 6px rgba(15,168,118,0.4))",
          "drop-shadow(0 0 0px rgba(15,168,118,0))",
        ],
        scale: [1, 1.14, 1.04, 1],
      }}
      transition={{ duration: 4, repeat: Infinity, times: [0, 0.12, 0.28, 1], ease: "easeOut" }}
    >
      <Zap size={52} style={{ color: "#0FA876" }} />
    </motion.div>
  );
}

function BrainIcon() {
  return (
    <motion.div className="mb-7 flex-shrink-0"
      animate={{
        filter: [
          "drop-shadow(0 0 3px rgba(15,168,118,0.25))",
          "drop-shadow(0 0 14px rgba(15,168,118,0.85))",
          "drop-shadow(0 0 3px rgba(15,168,118,0.25))",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Brain size={52} style={{ color: "#0FA876" }} />
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-medium mb-4" style={{ color: "#0FA876" }}>
      <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: "#0FA876" }} />
      {children}
    </p>
  );
}

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;
  const [expandedUC, setExpandedUC] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [videoClicked, setVideoClicked] = useState(false);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    const container = heroContainerRef.current;
    if (!video || !container) return;
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      if (scrollable <= 0 || !video.duration) return;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      video.currentTime = progress * video.duration;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* ── HERO (scroll-scrubbed video) ── */}
      <div ref={heroContainerRef} style={{ height: "300vh" }}>
        <section className="sticky top-0 relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20">
          {/* Video background — scrubbed by scroll */}
          <video
            ref={heroVideoRef}
            src="/3D Video.mp4"
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.42 }}
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to bottom, rgba(6,8,10,0.5) 0%, rgba(6,8,10,0.25) 40%, rgba(6,8,10,0.3) 65%, rgba(6,8,10,0.97) 100%)"
          }} />

          {/* Orb overlays */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            <div className="animate-orb-1 absolute rounded-full" style={{ width: 700, height: 700, top: "-15%", left: "-10%", background: "radial-gradient(circle, rgba(7,100,77,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />
            <div className="animate-orb-2 absolute rounded-full" style={{ width: 600, height: 600, bottom: "-10%", right: "-5%", background: "radial-gradient(circle, rgba(7,100,77,0.12) 0%, transparent 70%)", filter: "blur(80px)" }} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(28,44,28,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(28,44,28,0.12) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          {/* Text block */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="animate-fade-in-up font-bold leading-tight mb-6" style={{ letterSpacing: "-0.03em", fontSize: "clamp(1.5rem, 4.2vw, 3.5rem)" }}>
              <span className="block" style={{ color: "#F0FDF4" }}>
                The <span style={{ color: "#0FA876" }}>AI-powered</span> telecom
              </span>
              <span className="block" style={{ color: "#F0FDF4" }}>
                infrastructure platform
              </span>
            </h1>

            <p className="animate-fade-in-up delay-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "#B0BBBF" }}>
              {h.hero.body}
            </p>

            <div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-press inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold rounded-lg"
                style={{ backgroundColor: "#07644D", color: "#F0FDF4" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#055035"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#07644D"; }}
              >
                {h.hero.cta1} <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-study"
                className="btn-press inline-flex items-center gap-2 px-7 py-4 text-sm font-medium rounded-lg"
                style={{ color: "#B0BBBF", border: "1px solid #1C2C1C" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F0FDF4"; (e.currentTarget as HTMLElement).style.borderColor = "#0FA876"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#B0BBBF"; (e.currentTarget as HTMLElement).style.borderColor = "#1C2C1C"; }}
              >
                {h.hero.cta2}
              </Link>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ color: "#8A9EA0" }}>
            <p className="text-xs uppercase tracking-widest">Scroll</p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── LOGO STRIP ── */}
      <section className="py-12 px-6" style={{ backgroundColor: "#0D130D", borderTop: "1px solid #1C2C1C", borderBottom: "1px solid #1C2C1C" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-6 items-center justify-items-center">
            {LOGOS.map((logo) => (
              <div key={logo.alt} className="w-full flex items-center justify-center" style={{ opacity: 0.7 }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  style={{ width: "100%", height: "auto", maxWidth: `${logo.w}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM INTRO ── */}
      <section className="relative overflow-hidden" style={{ borderTop: "1px solid #1C2C1C", minHeight: "480px" }}>
        <NetworkBackground />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,8,10,0.90) 0%, rgba(6,8,10,0.72) 50%, rgba(6,8,10,0.90) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-stretch">
            <div className="md:col-span-3 flex flex-col justify-center">
              <Eyebrow>{h.platformIntro.eyebrow}</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#F0FDF4", textWrap: "balance" } as React.CSSProperties}>{h.platformIntro.title}</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#B0BBBF" }}>{h.platformIntro.body}</p>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#0FA876" }}>{h.platformIntro.closing}</p>
            </div>
            <div className="md:col-span-2 flex items-center">
              <div className="relative md:pl-10 w-full">
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(7,100,77,0.3)" }} />
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#07644D" }}>{h.platformIntro.futureTitle}</p>
                <p className="text-base leading-relaxed" style={{ color: "#B0BBBF" }}>{h.platformIntro.futureBody}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>{h.solution.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F0FDF4", textWrap: "balance" } as React.CSSProperties}>{h.solution.title}</h2>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Card 1: BIM Foundation */}
            <div className="card-glow rounded-2xl p-8 flex-1 flex flex-col items-center text-center" style={{ backgroundColor: "#0D130D", border: "1px solid #1C2C1C" }}>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-8" style={{ backgroundColor: "#0A3020", color: "#0FA876", border: "1px solid rgba(7,100,77,0.3)" }}>{h.solution.card1Badge}</span>
              <AntennaIcon />
              <h3 className="text-lg font-bold mb-3" style={{ color: "#F0FDF4" }}>{h.solution.card1Title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BBBF" }}>{h.solution.card1Body}</p>
            </div>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center self-center flex-shrink-0 py-6 md:py-0 md:px-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs italic" style={{ color: "#8A9EA0" }}>{h.solution.arrow1Label}</span>
                <svg className="hidden md:block" width="36" height="14" viewBox="0 0 36 14" fill="none">
                  <line x1="0" y1="7" x2="28" y2="7" stroke="#374151" strokeWidth="1.5" />
                  <polyline points="24,3 32,7 24,11" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="md:hidden" width="14" height="32" viewBox="0 0 14 32" fill="none">
                  <line x1="7" y1="0" x2="7" y2="24" stroke="#374151" strokeWidth="1.5" />
                  <polyline points="3,20 7,28 11,20" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Card 2: Automation Use Cases */}
            <div className="card-glow rounded-2xl p-8 flex-1 flex flex-col items-center text-center" style={{ backgroundColor: "#0D130D", border: "1px solid #1C2C1C" }}>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-8" style={{ backgroundColor: "#0A3020", color: "#0FA876", border: "1px solid rgba(7,100,77,0.3)" }}>{h.solution.card2Badge}</span>
              <ChecklistIcon />
              <h3 className="text-lg font-bold mb-3" style={{ color: "#F0FDF4" }}>{h.solution.card2Title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BBBF" }}>{h.solution.card2Body}</p>
            </div>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center self-center flex-shrink-0 py-6 md:py-0 md:px-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs italic" style={{ color: "#8A9EA0" }}>{h.solution.arrow2Label}</span>
                <svg className="hidden md:block" width="36" height="14" viewBox="0 0 36 14" fill="none">
                  <line x1="0" y1="7" x2="28" y2="7" stroke="#374151" strokeWidth="1.5" />
                  <polyline points="24,3 32,7 24,11" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="md:hidden" width="14" height="32" viewBox="0 0 14 32" fill="none">
                  <line x1="7" y1="0" x2="7" y2="24" stroke="#374151" strokeWidth="1.5" />
                  <polyline points="3,20 7,28 11,20" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Card 3: AI-Driven Workflows */}
            <div className="card-glow rounded-2xl p-8 flex-1 flex flex-col items-center text-center" style={{ backgroundColor: "#0D130D", border: "1px solid rgba(7,100,77,0.2)", borderTop: "1px solid rgba(7,100,77,0.35)" }}>
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-8" style={{ backgroundColor: "rgba(7,100,77,0.08)", color: "#0FA876", border: "1px solid rgba(7,100,77,0.25)" }}>{h.solution.card3Badge}</span>
              <BrainIcon />
              <h3 className="text-lg font-bold mb-3" style={{ color: "#F0FDF4" }}>{h.solution.card3Title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BBBF" }}>{h.solution.card3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0D130D", borderTop: "1px solid #1C2C1C" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <Eyebrow>{h.useCasesSection.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#F0FDF4" }}>{h.useCasesSection.title}</h2>
          </div>

          <div className="flex flex-col gap-3">
            {t.useCases.cases.map((uc_item, i) => {
              const isOpen = expandedUC === i;
              return (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#0D130D", border: `1px solid ${isOpen ? "rgba(7,100,77,0.3)" : "#1C2C1C"}`, transition: "border-color 0.2s" }}
                >
                  <button
                    className="w-full flex items-center gap-4 p-6 text-left"
                    onClick={() => setExpandedUC(isOpen ? null : i)}
                  >
                    <span className="text-base font-mono font-bold w-10 flex-shrink-0" style={{ color: "#0FA876" }}>{uc_item.number}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-semibold" style={{ color: "#F0FDF4" }}>{uc_item.title}</p>
                      <p className="text-sm mt-0.5" style={{ color: "#8A9EA0" }}>{uc_item.short}</p>
                    </div>
                    {isOpen
                      ? <ChevronUp size={18} style={{ color: "#07644D", flexShrink: 0 }} />
                      : <ChevronDown size={18} style={{ color: "#8A9EA0", flexShrink: 0 }} />
                    }
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6" style={{ borderTop: "1px solid #1C2C1C" }}>
                      <p className="text-sm leading-relaxed mt-4 mb-5" style={{ color: "#B0BBBF" }}>{uc_item.body}</p>
                      <div className="flex flex-col gap-2.5">
                        {uc_item.points.map((point, j) => (
                          <div key={j} className="flex gap-3 items-start">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#0A3020" }}>
                              <Check size={11} style={{ color: "#F0FDF4" }} />
                            </div>
                            <p className="text-sm" style={{ color: "#B0BBBF" }}>{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1C2C1C" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow>{h.videoSection.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: "#F0FDF4", textWrap: "balance" } as React.CSSProperties}>{h.videoSection.title}</h2>
            <p className="text-base" style={{ color: "#B0BBBF" }}>{h.videoSection.subtitle}</p>
          </div>

          <div>
            <div
              className="w-full overflow-hidden"
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 80px rgba(7,100,77,0.07)",
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ backgroundColor: "#131F13", borderBottom: "1px solid #1C2C1C" }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28CA41" }} />
                <div className="ml-3 h-4 rounded" style={{ backgroundColor: "#0D130D", width: "160px" }} />
              </div>

              {/* Video area */}
              <div
                className="relative w-full cursor-pointer"
                style={{ aspectRatio: "16/9", backgroundColor: "#080D08" }}
                onClick={() => setVideoClicked(true)}
              >
                <div className="absolute inset-0" style={{
                  backgroundImage: "linear-gradient(rgba(7,100,77,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(7,100,77,0.07) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {!videoClicked ? (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="flex items-center justify-center rounded-full mb-5"
                        style={{ width: 80, height: 80, backgroundColor: "rgba(7,100,77,0.92)", boxShadow: "0 0 48px rgba(7,100,77,0.5), 0 0 0 1px rgba(7,100,77,0.3)" }}
                      >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="#F0FDF4" style={{ marginLeft: "4px" }}>
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </motion.div>
                      <p className="text-sm" style={{ color: "#8A9EA0" }}>{h.videoSection.placeholder}</p>
                    </>
                  ) : (
                    <p className="text-base font-semibold" style={{ color: "#B0BBBF" }}>{h.videoSection.comingSoon}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KPIs ── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1C2C1C" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {h.kpis.items.map((item, i) => (
              <div key={i} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.95, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center px-8 py-12"
                >
                  <span
                    className="block text-6xl md:text-7xl font-bold mb-5 leading-none tracking-tight"
                    style={{
                      color: "#0FA876",
                      textShadow: "0 0 24px rgba(15,168,118,0.8), 0 0 60px rgba(15,168,118,0.35)",
                    }}
                  >
                    {item.value}
                  </span>
                  <p className="text-sm leading-relaxed max-w-[200px]" style={{ color: "#B0BBBF" }}>
                    {item.label}
                  </p>
                </motion.div>
                {i < h.kpis.items.length - 1 && (
                  <>
                    <div className="md:hidden h-px w-3/4 mx-auto" style={{ backgroundColor: "#1C2C1C" }} />
                    <div className="hidden md:block absolute right-0 inset-y-12 w-px" style={{ backgroundColor: "#1C2C1C" }} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ borderTop: "1px solid #1C2C1C" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(7,100,77,0.15) 0%, transparent 70%)" }} />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight" style={{ color: "#F0FDF4", textWrap: "balance" } as React.CSSProperties}>{h.cta.title}</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-press inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold rounded-lg"
              style={{ backgroundColor: "#07644D", color: "#F0FDF4" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#055035"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#07644D"; }}
            >
              {h.cta.cta1} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid #1C2C1C" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow>{h.faq.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F0FDF4" }}>{h.faq.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
            {[h.faq.items.slice(0, Math.ceil(h.faq.items.length / 2)), h.faq.items.slice(Math.ceil(h.faq.items.length / 2))].map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3">
                {col.map((item, idx) => {
                  const i = colIdx === 0 ? idx : Math.ceil(h.faq.items.length / 2) + idx;
                  const isOpen = expandedFaq === i;
                  return (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden transition-all"
                      style={{ backgroundColor: "#0D130D", border: `1px solid ${isOpen ? "rgba(7,100,77,0.3)" : "#1C2C1C"}` }}
                    >
                      <button
                        className="w-full flex items-center gap-3 px-5 py-4 text-left"
                        onClick={() => setExpandedFaq(isOpen ? null : i)}
                      >
                        <span className="flex-1 text-sm font-semibold" style={{ color: "#F0FDF4" }}>{item.q}</span>
                        {isOpen
                          ? <ChevronUp size={16} style={{ color: "#07644D", flexShrink: 0 }} />
                          : <ChevronDown size={16} style={{ color: "#8A9EA0", flexShrink: 0 }} />
                        }
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-0" style={{ borderTop: "1px solid #1C2C1C" }}>
                          <p className="text-sm leading-relaxed mt-4" style={{ color: "#B0BBBF" }}>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
