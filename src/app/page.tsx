import { sanityFetch } from "@/sanity/lib/live"
import {
  SETTINGS_QUERY,
  EXPERIENCES_QUERY,
  SKILL_ROWS_QUERY,
} from "@/sanity/queries"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { ScrollBand } from "@/components/ui/ScrollBand";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [settings, experiences, skillRows] = await Promise.all([
    sanityFetch({ query: SETTINGS_QUERY }),
    sanityFetch({ query: EXPERIENCES_QUERY }),
    sanityFetch({ query: SKILL_ROWS_QUERY }),
  ])

  const {
    heroRole,
    heroLocation,
    heroFirstName,
    heroLastName,
    heroMantra,
    overviewHeadline,
    overviewBody1,
    overviewBody2,
    overviewItems,
    band1,
    band2,
  } = settings.data ?? {}

  const experiencesData = (experiences.data ?? []).map((e) => ({
    ...e,
    tags: e.tags ?? [],
  }))
  const skillRowsData = (skillRows.data ?? []).map((r) => ({
    ...r,
    items: r.items ?? [],
  }))

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          heroRole={heroRole ?? undefined}
          heroLocation={heroLocation ?? undefined}
          heroFirstName={heroFirstName ?? undefined}
          heroLastName={heroLastName ?? undefined}
          heroMantra={heroMantra ?? undefined}
        />
        <ScrollBand items={band1 ?? []} direction="left" duration={22} variant="primary" />
        <OverviewSection
          overviewHeadline={overviewHeadline ?? undefined}
          overviewBody1={overviewBody1 ?? undefined}
          overviewBody2={overviewBody2 ?? undefined}
          overviewItems={overviewItems ?? []}
        />
        <ScrollBand items={band2 ?? []} direction="right" duration={30} variant="secondary" />
        <ExperienceSection experiences={experiencesData} />
        <SkillsSection skillRows={skillRowsData} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
