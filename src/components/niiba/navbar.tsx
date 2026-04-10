"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileOpen(false);
  }, []);

  const scrollToCards = useCallback(() => scrollTo("firmalar"), [scrollTo]);

  const navLinks = [
    { id: "hakkimizda", label: t().nav_about },
    { id: "iletisim", label: t().nav_contact },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="NIIBA"
              width={36}
              height={36}
              className="rounded-xl"
              priority
            />
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              NIIBA
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === "tr" ? "de" : "tr")}
              className="ml-1 flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "tr" ? "DE" : "TR"}
            </button>

            <button
              onClick={scrollToCards}
              className="ml-2 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[13px] font-bold shadow-lg shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-400/30 active:scale-[0.97] transition-all duration-200 cursor-pointer"
            >
              {t().nav_apply}
            </button>
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-600"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menü"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </motion.header>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="fixed top-16 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 md:hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Language switcher mobile */}
                <div className="flex items-center gap-2 px-4 py-2">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <button
                    onClick={() => setLang("tr")}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      lang === "tr"
                        ? "bg-blue-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    Türkçe
                  </button>
                  <button
                    onClick={() => setLang("de")}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      lang === "de"
                        ? "bg-blue-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    Deutsch
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={scrollToCards}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[15px] font-bold shadow-lg cursor-pointer"
                  >
                    {t().nav_apply}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
