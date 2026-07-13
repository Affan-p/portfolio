"use client";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

interface Experience {
  company?: string | null
  role?: string | null
  period?: string | null
  description?: string | null
  tags: string[]
}

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section
      id="experience"
      className="py-16 pb-24 lg:pb-32 border-t border-white/5"
    >
      <Reveal>
        <div className="flex items-baseline gap-3 mb-12 lg:mb-20">
          <span className="font-jetbrains text-xs tracking-[0.18em] text-muted">
            02 —
          </span>
          <span className="font-jetbrains text-xs tracking-[0.18em] text-muted uppercase">
            Experience
          </span>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company ?? i} delay={i * 80}>
            <div className="border-t border-white/5 py-10 sm:py-12 lg:py-14">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3
                  className="
                    font-heading font-extrabold leading-[0.9]
                    text-text tracking-[-0.02em]
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  "
                >
                  {exp.company}
                </h3>
                <span className="font-jetbrains text-[10px] sm:text-xs tracking-[0.1em] uppercase text-primary bg-primary/10 px-3 py-1 whitespace-nowrap shrink-0 mt-2 sm:mt-3 lg:mt-5">
                  {exp.period}
                </span>
              </div>

              <p className="font-body text-xs sm:text-sm text-muted uppercase tracking-[0.04em] mb-3">
                {exp.role}
              </p>

              <p className="font-body text-sm leading-relaxed text-muted max-w-[580px]">
                {exp.description}
              </p>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-white/5" />
      </div>
    </Section>
  );
}
