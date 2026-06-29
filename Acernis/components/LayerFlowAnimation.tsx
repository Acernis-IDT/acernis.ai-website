"use client";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const G = "#0FA876";
const gs = (a: number) => `rgba(15,168,118,${a})`;

const VW = 880;
const VH = 300;
const TX = 105;
const BX = 298, BY = 148;
const NX = 455;
const NY = [78, 148, 218];
const NR = 20;
const AX = 752, AY = 148;
const AR = 42;

function TowerStructure() {
  const s = gs(0.6);
  const w = 1.5;
  return (
    <g>
      <line x1={TX} y1={30} x2={TX} y2={240} stroke={s} strokeWidth={w} />
      <line x1={TX - 12} y1={95} x2={TX + 12} y2={95} stroke={s} strokeWidth={w} />
      <line x1={TX - 19} y1={130} x2={TX + 19} y2={130} stroke={s} strokeWidth={w} />
      <line x1={TX - 27} y1={165} x2={TX + 27} y2={165} stroke={s} strokeWidth={w} />
      <line x1={TX - 37} y1={200} x2={TX + 37} y2={200} stroke={s} strokeWidth={w} />
      <line x1={TX - 12} y1={95} x2={TX - 19} y2={130} stroke={s} strokeWidth={w} />
      <line x1={TX + 12} y1={95} x2={TX + 19} y2={130} stroke={s} strokeWidth={w} />
      <line x1={TX - 19} y1={130} x2={TX - 27} y2={165} stroke={s} strokeWidth={w} />
      <line x1={TX + 19} y1={130} x2={TX + 27} y2={165} stroke={s} strokeWidth={w} />
      <line x1={TX - 27} y1={165} x2={TX - 37} y2={200} stroke={s} strokeWidth={w} />
      <line x1={TX + 27} y1={165} x2={TX + 37} y2={200} stroke={s} strokeWidth={w} />
      <line x1={TX - 37} y1={200} x2={TX - 50} y2={240} stroke={s} strokeWidth={w} />
      <line x1={TX + 37} y1={200} x2={TX + 50} y2={240} stroke={s} strokeWidth={w} />
      <line x1={TX - 50} y1={240} x2={TX + 50} y2={240} stroke={s} strokeWidth={1} />
      <line x1={TX} y1={30} x2={TX} y2={10} stroke={s} strokeWidth={w} />
      <line x1={TX - 12} y1={95} x2={TX - 12} y2={80} stroke={s} strokeWidth={w} />
      <line x1={TX + 12} y1={95} x2={TX + 12} y2={80} stroke={s} strokeWidth={w} />
      <circle cx={TX - 12} cy={78} r={2.5} fill={G} opacity={0.7} />
      <circle cx={TX + 12} cy={78} r={2.5} fill={G} opacity={0.7} />
      <motion.circle
        cx={TX}
        cy={8}
        r={3.5}
        fill={G}
        animate={{ opacity: [0.5, 1, 0.5], r: [3, 4.5, 3] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function SignalRings() {
  return (
    <g>
      {[0, 0.85, 1.7].map((delay, i) => (
        <motion.circle
          key={i}
          cx={TX}
          cy={8}
          r={5}
          fill="none"
          stroke={G}
          strokeWidth={1}
          animate={{ r: [8, 68], opacity: [0.45, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay, ease: "easeOut" }}
        />
      ))}
    </g>
  );
}

function ConnectionLines() {
  return (
    <g>
      <g stroke={gs(0.25)} strokeWidth={1} strokeDasharray="5 4" fill="none">
        <line x1={TX + 50} y1={BY} x2={BX} y2={BY} />
        {NY.map((y, i) => (
          <line key={`bn${i}`} x1={BX} y1={BY} x2={NX - NR} y2={y} />
        ))}
        {NY.map((y, i) => (
          <line key={`na${i}`} x1={NX + NR} y1={y} x2={AX - AR} y2={AY} />
        ))}
      </g>
      <circle cx={BX} cy={BY} r={3.5} fill={gs(0.55)} stroke={G} strokeWidth={0.8} />
    </g>
  );
}

function AutomationNode({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={NR + 12} fill={gs(0.04)} />
      <motion.circle
        cx={cx}
        cy={cy}
        r={NR}
        fill="#060E06"
        stroke={G}
        strokeWidth={1.2}
        style={{ filter: `drop-shadow(0 0 5px ${gs(0.25)})` }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {[-5, 0, 5].map((dy) => (
        <line
          key={dy}
          x1={cx - 9}
          y1={cy + dy}
          x2={cx + 9}
          y2={cy + dy}
          stroke={G}
          strokeWidth={1.2}
          opacity={0.65}
        />
      ))}
    </g>
  );
}

function AINode() {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    return { x: AX + Math.cos(angle) * 22, y: AY + Math.sin(angle) * 22 };
  });

  return (
    <g>
      {[0, 0.75, 1.5].map((delay, i) => (
        <motion.circle
          key={i}
          cx={AX}
          cy={AY}
          r={AR}
          fill="none"
          stroke={G}
          strokeWidth={0.8}
          animate={{ r: [AR, AR + 22], opacity: [0.25, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, delay, ease: "easeOut" }}
        />
      ))}
      <motion.circle
        cx={AX}
        cy={AY}
        r={AR}
        fill="#060E06"
        stroke={G}
        strokeWidth={1.5}
        style={{ filter: `drop-shadow(0 0 10px ${gs(0.3)})` }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {pts.map((p, i) => (
        <line key={i} x1={AX} y1={AY} x2={p.x} y2={p.y} stroke={gs(0.3)} strokeWidth={0.8} />
      ))}
      {pts.map((p, i) => {
        const q = pts[(i + 2) % 6];
        return (
          <line key={`c${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={gs(0.18)} strokeWidth={0.7} />
        );
      })}
      {pts.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={2.5}
          fill={G}
          animate={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 1.4 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.circle
        cx={AX}
        cy={AY}
        r={4.5}
        fill={G}
        animate={{ r: [3.5, 5.5, 3.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

function TravelingDots() {
  const dotStyle: CSSProperties = { filter: `drop-shadow(0 0 5px ${G})` };

  return (
    <g>
      {NY.map((y, i) => (
        <motion.circle
          key={`tn${i}`}
          cx={TX + 50}
          cy={BY}
          r={2.5}
          fill={G}
          style={dotStyle}
          animate={{
            cx: [TX + 50, BX, NX - NR, NX - NR],
            cy: [BY, BY, y, y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.2,
            times: [0, 0.28, 0.85, 1],
            repeat: Infinity,
            delay: i * 0.65,
            ease: "linear",
          }}
        />
      ))}
      {NY.map((y, i) => (
        <motion.circle
          key={`na${i}`}
          cx={NX + NR}
          cy={y}
          r={2.5}
          fill={G}
          style={dotStyle}
          animate={{
            cx: [NX + NR, AX - AR, AX - AR],
            cy: [y, AY, AY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.7,
            times: [0, 0.85, 1],
            repeat: Infinity,
            delay: i * 0.65 + 1.2,
            ease: "linear",
          }}
        />
      ))}
    </g>
  );
}

export default function LayerFlowAnimation() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#080D08", borderTop: "1px solid #1C2C1C" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#07644D" }}
          >
            <span className="w-4 h-px inline-block" style={{ backgroundColor: "#07644D" }} />
            How it works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#F0FDF4" }}>
            One platform. Three connected layers.
          </h2>
        </div>

        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ border: "1px solid #1C2C1C", backgroundColor: "#050A05" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,168,118,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,168,118,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <svg viewBox={`0 0 ${VW} ${VH}`} width="100%" style={{ display: "block", position: "relative", zIndex: 1 }}>
            <ConnectionLines />
            <TowerStructure />
            <SignalRings />
            {NY.map((y, i) => (
              <AutomationNode key={i} cx={NX} cy={y} />
            ))}
            <AINode />
            <TravelingDots />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 text-center">
          <div>
            <p className="text-sm font-semibold" style={{ color: "#F0FDF4" }}>BIM Foundation</p>
            <p className="text-xs mt-1.5" style={{ color: "#6B7280" }}>Structured site data</p>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#F0FDF4" }}>Automation Use Cases</p>
            <p className="text-xs mt-1.5" style={{ color: "#6B7280" }}>End-to-end workflows</p>
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#F0FDF4" }}>AI-Driven Workflows</p>
            <p className="text-xs mt-1.5" style={{ color: "#6B7280" }}>Governed by AI agents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
