"use client";

import { motion } from "framer-motion";

interface OverviewCardProps {
  items: string[];
}

export default function OverviewCard({ items }: OverviewCardProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="border border-white/10 bg-surface/30 p-7"
    >
      <p className="font-jetbrains text-xs uppercase tracking-[0.2em] text-muted mb-6">
        Currently Learning
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex gap-3 border-t border-white/5 pt-4 first:border-0 first:pt-0"
          >
            <span className="font-jetbrains text-primary">→</span>

            <p className="font-body text-sm leading-relaxed text-text">
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
