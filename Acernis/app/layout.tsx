import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Acernis – Driving Autonomous Networks",
  description: "BIM-captured site intelligence today – agentic AI rollout automation tomorrow. The foundation for autonomous telco rollouts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <SplashScreen />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          {/* Cinematic film grain – fixed, GPU-safe, never on scrolling containers */}
          <div
            aria-hidden="true"
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              pointerEvents: "none",
              opacity: 0.038,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
