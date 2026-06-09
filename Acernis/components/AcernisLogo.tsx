"use client";
import Image from "next/image";

interface AcernisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** "default" = white logo for dark backgrounds
   *  "brand"   = green logo for light backgrounds */
  variant?: "default" | "brand";
}

// Aspect ratio derived from actual logo file: 1794 × 284 px
const ASPECT = 1794 / 284;

export default function AcernisLogo({
  className = "",
  size = "md",
  variant = "default",
}: AcernisLogoProps) {
  const h = size === "sm" ? 20 : size === "lg" ? 34 : 26;
  const w = Math.round(h * ASPECT);
  const src = variant === "brand"
    ? "/acernis-logo-green.png"
    : "/acernis-logo-white.png";

  return (
    <Image
      src={src}
      alt="Acernis"
      width={w}
      height={h}
      className={className}
      style={{ width: "auto", height: h, maxWidth: "100%" }}
      priority
    />
  );
}
