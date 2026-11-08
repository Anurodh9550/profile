import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/images";

export function BrandLogo({
  brandId,
  size = 48,
  className = "",
}: {
  brandId: keyof typeof BRAND_LOGOS | string;
  size?: number;
  className?: string;
}) {
  const src = BRAND_LOGOS[brandId as keyof typeof BRAND_LOGOS] ?? BRAND_LOGOS["kalpana-traders"];

  return (
    <Image
      src={src}
      alt={`${brandId} logo`}
      width={size}
      height={size}
      className={`brand-logo ${className}`}
    />
  );
}
