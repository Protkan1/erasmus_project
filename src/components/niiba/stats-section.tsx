"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const statValues = ["250+", "5K+", "12", "%94"];
const statLabelKeys = ["s1_label", "s2_label", "s3_label", "s4_label"] as const;

export default function StatsSection() {
  const { t } = useLang();

  return (
    <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {statValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-500 tracking-tight mb-1.5">
                {val}
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {t()[statLabelKeys[i]]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-20" />

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.15em] mb-3">
            {t().stats_why}
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {t().stats_why_title}
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            {t().stats_why_desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
