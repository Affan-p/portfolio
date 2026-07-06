import { Section } from "@/components/ui/Section";
import { MarqueeRow } from "@/components/ui/MarqueeRow";

interface SkillRow {
  label: string
  items: string[]
}

interface SkillsSectionProps {
  skillRows: SkillRow[]
}

export default function SkillsSection({ skillRows }: SkillsSectionProps) {
  return (
    <Section id="skills" fullBleed className="bg-surface relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-extrabold text-text opacity-[0.025] whitespace-nowrap select-none pointer-events-none tracking-[-0.04em] z-0"
        style={{ fontSize: "clamp(8rem, 22vw, 30rem)" }}
      >
        CRAFT
      </div>

      <div className="relative z-10">
        <div className="px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-12 flex items-baseline gap-3">
          <span className="font-jetbrains text-xs tracking-[0.18em] text-muted">
            03 ——
          </span>
          <span className="font-jetbrains text-xs tracking-[0.18em] text-muted uppercase">
            Skills &amp; Craft
          </span>
        </div>

        <div className="pb-12 sm:pb-16 md:pb-20">
          {skillRows.map((row, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={row.label}
                className="grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] h-14 sm:h-16 md:h-20 border-t border-white/5"
              >
                <div className="h-full overflow-hidden flex items-center justify-center pl-3 pr-2 sm:pl-6 sm:pr-4 md:pl-10 md:pr-6">
                  <span
                    className={`font-jetbrains text-[0.5rem] sm:text-[0.55rem] md:text-[0.58rem] tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-none [writing-mode:vertical-lr] [transform:rotate(180deg)] whitespace-nowrap ${
                      i === 0 ? "text-primary" : "text-muted"
                    }`}
                  >
                    {row.label}
                  </span>
                </div>

                <div className="h-full border-l border-white/5 flex items-center">
                  <MarqueeRow items={row.items} reverse={reverse} />
                </div>
              </div>
            );
          })}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </Section>
  );
}
