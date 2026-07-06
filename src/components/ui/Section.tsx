import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  fullBleed?: boolean;
}

export function Section({
  className,
  fullBleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "w-full",
        !fullBleed && "mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10",
        className,
      )}
    >
      {children}
    </section>
  );
}
