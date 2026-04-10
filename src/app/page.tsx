"use client";

import React, { useRef, useCallback, useEffect } from "react";
import {
  Building2,
  Package,
  GraduationCap,
  UserSearch,
} from "lucide-react";
import Navbar from "@/components/niiba/navbar";
import HeroSection from "@/components/niiba/hero-section";
import AboutSection from "@/components/niiba/about-section";
import CategoryCard, { type CategoryCardData } from "@/components/niiba/category-card";
import StatsSection from "@/components/niiba/stats-section";
import ContactSection from "@/components/niiba/contact-section";
import Footer from "@/components/niiba/footer";
import { useLang } from "@/lib/i18n";

const categories: CategoryCardData[] = [
  {
    id: "firmalar",
    icon: Building2,
    number: "01",
    titleKey: "c1_title",
    fomoKey: "c1_fomo",
    benefitKeys: ["c1_b1", "c1_b2"],
    microKey: "c1_micro",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdGF6FLdmts-0M-f3_e-NPagrU1nur8efmouFW3RiMDxagbNw/viewform?usp=sharing&ouid=112538989818442791259",
  },
  {
    id: "urun-sahipleri",
    icon: Package,
    number: "02",
    titleKey: "c2_title",
    fomoKey: "c2_fomo",
    benefitKeys: ["c2_b1", "c2_b2"],
    microKey: "c2_micro",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf4B1KA4DnedonaqEXq_HT7vCJyQBqpWpafRPEuBuDHwjfOlg/viewform?usp=sharing&ouid=112538989818442791259",
  },
  {
    id: "erasmus",
    icon: GraduationCap,
    number: "03",
    titleKey: "c3_title",
    fomoKey: "c3_fomo",
    benefitKeys: ["c3_b1", "c3_b2"],
    microKey: "c3_micro",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe0WgaqilXx3vw5E_n9V7OPie4FBVUhHpTCntoI6RYraLQbbg/viewform?usp=sharing&ouid=112538989818442791259",
  },
  {
    id: "is-arayanlar",
    icon: UserSearch,
    number: "04",
    titleKey: "c4_title",
    fomoKey: "c4_fomo",
    benefitKeys: ["c4_b1", "c4_b2"],
    microKey: "c4_micro",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfxiVn_unKsy038ZZzQSVky211c092b2ZsulucsySypwEE_KA/viewform?usp=sharing&ouid=112538989818442791259",
  },
];

export default function Home() {
  const { t } = useLang();
  const highlightRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });

    const card = el.querySelector("[class*='rounded-2xl']");
    if (card) {
      card.classList.add("ring-2", "ring-blue-300", "ring-offset-2");
      if (highlightRef.current) clearTimeout(highlightRef.current);
      highlightRef.current = setTimeout(() => {
        card.classList.remove("ring-2", "ring-blue-300", "ring-offset-2");
      }, 2000);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (highlightRef.current) clearTimeout(highlightRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <HeroSection onQuickJump={scrollTo} />

      <AboutSection />

      <main className="flex-1 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.15em]">
              {t().cat_label}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-6">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} data={cat} index={i} />
            ))}
          </div>
        </div>
      </main>

      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
