import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

const variantStyles = {
  default: {
    text: "font-heading font-bold text-text px-4 sm:px-6 md:px-8 tracking-[-0.01em] text-sm sm:text-base md:[font-size:clamp(0.95rem,2vw,1.5rem)] whitespace-nowrap",
    separator: "·",
    separatorClass: "text-primary/50 text-sm font-heading shrink-0",
    marqueeClass: "[--duration:45s] [--gap:0px] py-0",
  },
  primary: {
    text: "font-heading font-extrabold text-text px-[1.4rem] tracking-[0.05em] text-[0.85rem] whitespace-nowrap",
    separator: "×",
    separatorClass: "text-text opacity-70 font-heading shrink-0",
    marqueeClass: "[--duration:22s] [--gap:0px] p-0",
  },
  secondary: {
    text: "font-heading font-extrabold text-text px-[1.4rem] tracking-[0.05em] text-[0.7rem] whitespace-nowrap",
    separator: "×",
    separatorClass: "text-primary opacity-70 font-heading shrink-0",
    marqueeClass: "[--duration:30s] [--gap:0px] p-0",
  },
} as const;

interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
  pauseOnHover?: boolean;
  repeat?: number;
  variant?: keyof typeof variantStyles;
  className?: string;
}

export function MarqueeRow({
  items,
  reverse = false,
  pauseOnHover = false,
  repeat = 12,
  variant = "default",
  className,
}: MarqueeRowProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn("w-full", className)}>
      <Marquee
        reverse={reverse}
        pauseOnHover={pauseOnHover}
        repeat={repeat}
        className={styles.marqueeClass}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className={styles.text}>{item}</span>
            {i < items.length - 1 && (
              <span className={styles.separatorClass}>
                {styles.separator}
              </span>
            )}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
