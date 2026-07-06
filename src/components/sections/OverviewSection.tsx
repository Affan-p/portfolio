"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import OverviewCard from "@/components/ui/OverviewCard";

interface OverviewSectionProps {
  overviewHeadline?: string
  overviewBody1?: string
  overviewBody2?: string
  overviewItems: string[]
}

export default function OverviewSection({
  overviewHeadline,
  overviewBody1,
  overviewBody2,
  overviewItems,
}: OverviewSectionProps) {
  return (
    <Section
      id="overview"
      className="relative overflow-hidden py-16 sm:py-20 md:py-32 lg:py-72"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <span className="font-jetbrains text-xs uppercase tracking-[0.2em] text-muted">
              01 —
            </span>
            <span className="font-jetbrains text-xs uppercase tracking-[0.2em] text-muted">
              Overview
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20 items-start">

            <div className="flex flex-col gap-8 md:gap-8">

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-heading font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.15] text-text"
              >
                {overviewHeadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="font-body text-base leading-relaxed text-muted max-w-2xl"
              >
                {overviewBody1}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="font-body text-base leading-relaxed text-muted max-w-2xl"
              >
                {overviewBody2}
              </motion.p>

            </div>

            <OverviewCard items={overviewItems} />

          </div>

        </div>
      </div>
    </Section>
  );
}
