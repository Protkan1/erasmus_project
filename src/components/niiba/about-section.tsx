"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Users, Target, HeartHandshake } from "lucide-react";
import { useLang } from "@/lib/i18n";
import type { LucideIcon } from "lucide-react";

const pillarIcons: LucideIcon[] = [Globe2, Users, Target, HeartHandshake];

const pillarTitleKeys = ["about_bridge", "about_human", "about_result", "about_trust"] as const;
const pillarDescKeys = ["about_bridge_d", "about_human_d", "about_result_d", "about_trust_d"] as const;

const milestoneTextKeys = ["tl_2022", "tl_2023", "tl_2024", "tl_2025"] as const;

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section id="hakkimizda" className="scroll-mt-20 py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.15em] mb-3">
            {t().about_label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t().about_title_1}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {t().about_title_2}
            </span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            {t().about_desc}
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {pillarIcons.map((PIcon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 hover:border-slate-300 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <PIcon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {t()[pillarTitleKeys[i]]}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t()[pillarDescKeys[i]]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-6">
            {t().about_timeline}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["2022", "2023", "2024", "2025"].map((year, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative"
              >
                <span className="text-3xl font-extrabold text-blue-500/20">{year}</span>
                <p className="text-sm font-medium text-slate-700 mt-1">
                  {t()[milestoneTextKeys[i]]}
                </p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-3 right-0 translate-x-1/2 w-px h-8 bg-gradient-to-b from-slate-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
