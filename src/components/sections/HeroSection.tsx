import { Section } from "@/components/ui/Section";

interface HeroSectionProps {
  heroRole?: string
  heroLocation?: string
  heroFirstName?: string
  heroLastName?: string
  heroMantra?: string
}

export default function HeroSection({
  heroRole,
  heroLocation,
  heroFirstName,
  heroLastName,
  heroMantra,
}: HeroSectionProps) {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden py-16 sm:py-20 md:py-32 lg:py-72"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-10 md:gap-12 lg:gap-16">

          <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
            <span className="font-jetbrains text-xs sm:text-sm tracking-[0.2em] uppercase text-muted">
              {heroRole}
            </span>
            <span className="hidden sm:inline-block w-8 h-px bg-muted" />
            <span className="font-jetbrains text-xs sm:text-sm tracking-[0.2em] uppercase text-primary">
              {heroLocation}
            </span>
          </div>

          <h1 className="font-heading font-extrabold leading-[0.85] tracking-tight m-0">
            <span className="block text-5xl sm:text-4xl md:text-6xl lg:text-8xl text-text">
              {heroFirstName}
            </span>
            <span className="block lg:pl-20 sm:pl-10 text-5xl sm:text-4xl md:text-6xl lg:text-8xl text-primary">
              {heroLastName}
            </span>
          </h1>

          <p className="font-body font-light italic text-center lg:text-left text-base sm:text-lg md:text-xl lg:text-2xl text-muted leading-snug">
            {heroMantra}<span className="text-primary">.</span>
          </p>

        </div>
      </div>
    </Section>
  );
}
