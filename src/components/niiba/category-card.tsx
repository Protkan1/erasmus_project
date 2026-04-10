"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/lib/i18n";

export interface CategoryCardData {
  id: string;
  icon: LucideIcon;
  number: string;
  titleKey: string;
  fomoKey: string;
  benefitKeys: string[];
  microKey: string;
  formUrl: string;
}

interface CategoryCardProps {
  data: CategoryCardData;
  index: number;
}

export default function CategoryCard({ data, index }: CategoryCardProps) {
  const { t } = useLang();
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div id={data.id} className="scroll-mt-20 group/card h-full">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col">
          {/* Top */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {t()[data.titleKey as keyof ReturnType<typeof t>]}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-300 font-bold">{data.number}</span>
          </div>

          {/* FOMO Text — only current language */}
          <div className="rounded-xl bg-slate-50 p-4 mb-5">
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {t()[data.fomoKey as keyof ReturnType<typeof t>]}
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2.5 mb-7 flex-1">
            {data.benefitKeys.map((key, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 shrink-0">
                  <Check className="w-3 h-3 text-blue-500" />
                </div>
                <span className="text-sm text-slate-700">
                  {t()[key as keyof ReturnType<typeof t>]}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="space-y-2 mt-auto">
            <a
              href={data.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-400/30 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              {t().card_apply}
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover/btn:opacity-100 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-all" />
            </a>
            <p className="text-center text-[11px] text-slate-400 font-medium">
              {t()[data.microKey as keyof ReturnType<typeof t>]}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
