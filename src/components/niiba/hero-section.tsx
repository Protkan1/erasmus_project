"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Package,
  GraduationCap,
  UserSearch,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Globe,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const quickLinks = [
  { id: "firmalar", icon: Building2, labelKey: "ql_firmalar" as const },
  { id: "urun-sahipleri", icon: Package, labelKey: "ql_urun" as const },
  { id: "erasmus", icon: GraduationCap, labelKey: "ql_erasmus" as const },
  { id: "is-arayanlar", icon: UserSearch, labelKey: "ql_is" as const },
];

const tickerItems = [
  { flag: "🇩🇪", name: "Almanya" },
  { flag: "🇳🇱", name: "Hollanda" },
  { flag: "🇦🇹", name: "Avusturya" },
  { flag: "🇧🇪", name: "Belçika" },
  { flag: "🇨🇭", name: "İsviçre" },
  { flag: "🇫🇷", name: "Fransa" },
  { flag: "🇩🇪", name: "Almanya" },
  { flag: "🇳🇱", name: "Hollanda" },
  { flag: "🇦🇹", name: "Avusturya" },
  { flag: "🇧🇪", name: "Belçika" },
  { flag: "🇨🇭", name: "İsviçre" },
  { flag: "🇫🇷", name: "Fransa" },
];

const tickerItemsDE = [
  { flag: "🇩🇪", name: "Deutschland" },
  { flag: "🇳🇱", name: "Niederlande" },
  { flag: "🇦🇹", name: "Österreich" },
  { flag: "🇧🇪", name: "Belgien" },
  { flag: "🇨🇭", name: "Schweiz" },
  { flag: "🇫🇷", name: "Frankreich" },
  { flag: "🇩🇪", name: "Deutschland" },
  { flag: "🇳🇱", name: "Niederlande" },
  { flag: "🇦🇹", name: "Österreich" },
  { flag: "🇧🇪", name: "Belgien" },
  { flag: "🇨🇭", name: "Schweiz" },
  { flag: "🇫🇷", name: "Frankreich" },
];

interface HeroSectionProps {
  onQuickJump: (id: string) => void;
}

export default function HeroSection({ onQuickJump }: HeroSectionProps) {
  const { lang, t } = useLang();

  const ticker = lang === "de" ? tickerItemsDE : tickerItems;

  return (
    <section className="relative pt-28 pb-6 sm:pt-36 sm:pb-10 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #cbd5e1 0.8px, transparent 0.8px)`,
        backgroundSize: "28px 28px",
        opacity: 0.4,
      }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

      {/* Decorative circles */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-blue-100/50 opacity-40" />
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full border border-blue-100/30 opacity-30" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Centered Content */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {t().hero_badge}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6"
          >
            {t().hero_title_1}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {t().hero_title_2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-9"
          >
            {t().hero_desc}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <button
              onClick={() => onQuickJump("firmalar")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-400/35 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 cursor-pointer"
            >
              {t().nav_apply}
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("hakkimizda");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-sm font-semibold shadow-sm hover:shadow hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {t().nav_about}
            </button>
          </motion.div>

          {/* Trust Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-medium">{t().stats_why_title.split(",")[0]}</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-medium">%94 {t().s4_label}</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-medium">12+ {t().s3_label}</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-medium">250+ {t().s1_label}</span>
            </div>
          </motion.div>
        </div>

        {/* Animated Country Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mb-12 sm:mb-16 -mx-6"
        >
          <div className="flex">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex gap-3 overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex shrink-0 gap-3"
              >
                {ticker.map((item, i) => (
                  <div
                    key={`a-${i}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm whitespace-nowrap"
                  >
                    <span className="text-sm">{item.flag}</span>
                    <span className="text-xs font-medium text-slate-600">{item.name}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex shrink-0 gap-3"
              >
                {ticker.map((item, i) => (
                  <div
                    key={`b-${i}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm whitespace-nowrap"
                  >
                    <span className="text-sm">{item.flag}</span>
                    <span className="text-xs font-medium text-slate-600">{item.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quick-Jump Cards */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-5">
            {t().hero_quick}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickLinks.map((item, i) => {
              const Icon = item.icon;
              const label = t()[item.labelKey];
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.07 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onQuickJump(item.id)}
                  className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-400/8 transition-all duration-250 cursor-pointer text-left overflow-hidden"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-400/20 flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-shadow duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="relative flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">{label}</p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 group-hover:text-blue-500 transition-colors">
                      {t().card_apply}
                    </p>
                  </div>
                  <ArrowRight className="relative w-4 h-4 text-slate-200 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
