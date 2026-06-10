"use client";
import { Check, Database, Shield, Globe, Lock, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#07644D" }}>
      <span className="w-4 h-px inline-block" style={{ backgroundColor: "#07644D" }} />
      {children}
    </p>
  );
}

export default function PlatformPage() {
  const { t } = useLanguage();
  const p = t.platform;

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(7,100,77,0.08) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "#F0FDF4" }}>{p.hero.title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "#B0BBBF" }}>{p.hero.subtitle}</p>
        </div>
      </section>

      {/* What is Acernis */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0D130D", borderTop: "1px solid #1C2C1C" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>{p.what.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#F0FDF4" }}>{p.what.title}</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#B0BBBF" }}>{p.what.body}</p>
            <div className="flex flex-col gap-4">
              {p.what.points.map((point, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#0A3020" }}>
                    <Check size={11} style={{ color: "#07644D" }} />
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#B0BBBF" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#131F13", border: "1px solid #1C2C1C" }}>
            <div className="flex flex-col gap-6">
              {[
                { label: "BIM Input", items: ["Digital Images", "2D Documentation", "3D Scan Data"] },
                { label: "Acernis Core", items: ["BIM Models", "Integrated External Data"] },
                { label: "Output", items: ["WebApp", "MNO Applications", "Third Party APIs"] },
              ].map((group, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#8A9EA0" }}>{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 text-xs rounded-md" style={{ backgroundColor: "#06080A", color: "#B0BBBF", border: "1px solid #1C2C1C" }}>{item}</span>
                    ))}
                  </div>
                  {i < 2 && (
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex-1 h-px" style={{ backgroundColor: "#1C2C1C" }} />
                      <span className="text-xs" style={{ color: "#07644D" }}>↓</span>
                      <div className="flex-1 h-px" style={{ backgroundColor: "#1C2C1C" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Eyebrow>{p.features.eyebrow}</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#F0FDF4" }}>{p.features.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.features.items.map((item, i) => {
              const icons = [Database, Shield, Globe, RefreshCw, Lock, Check];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="rounded-xl p-6 transition-all"
                  style={{ backgroundColor: "#0D130D", border: "1px solid #1C2C1C" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(7,100,77,0.3)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1C2C1C"; }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#0A3020" }}>
                    <Icon size={18} style={{ color: "#07644D" }} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5" style={{ color: "#F0FDF4" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#B0BBBF" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
