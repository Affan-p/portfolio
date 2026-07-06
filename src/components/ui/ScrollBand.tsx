import { MarqueeRow } from "@/components/ui/MarqueeRow";

interface ScrollBandProps {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  variant?: "primary" | "secondary";
}

export function ScrollBand({
  items,
  direction = "left",
  variant = "secondary",
}: ScrollBandProps) {
  const reverse = direction === "right";
  const bgClass = variant === "primary" ? "bg-primary" : "bg-surface";

  return (
    <div className={`${bgClass} overflow-hidden border-t border-b border-white/5`}>
      <MarqueeRow
        items={items}
        reverse={reverse}
        variant={variant}
        pauseOnHover={false}
        className="py-[0.9rem]"
      />
    </div>
  );
}
