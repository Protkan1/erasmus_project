"use client";

import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  const quickLinks = [
    { label: t().c1_title, id: "firmalar" },
    { label: t().c2_title, id: "urun-sahipleri" },
    { label: t().c3_title, id: "erasmus" },
    { label: t().c4_title, id: "is-arayanlar" },
  ];

  const corporateLinks = [
    t().footer_corporate_about,
    t().footer_corporate_blog,
    t().footer_corporate_career,
    t().footer_corporate_contact,
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
            <Image
              src="/logo.png"
              alt="NIIBA"
              width={32}
              height={32}
              className="rounded-lg"
            />
              <span className="text-lg font-extrabold text-white">NIIBA</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              {t().footer_desc}
              <br />
              {t().footer_desc_2}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-4">
              {t().footer_quick}
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-slate-500 hover:text-blue-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-4">
              {t().footer_corporate}
            </p>
            <ul className="space-y-2.5">
              {corporateLinks.map((item) => (
                <li key={item}>
                  <span className="text-sm text-slate-500 hover:text-blue-300 transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.12em] mb-4">
              {t().footer_contact}
            </p>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li className="text-blue-300">info@niiba.com</li>
              <li>+90 (212) 000 00 00</li>
              <li>{t().footer_address}</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-700/50 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {year} NIIBA. {t().footer_rights}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="hover:text-blue-300 cursor-pointer transition-colors">{t().footer_privacy}</span>
            <span className="hover:text-blue-300 cursor-pointer transition-colors">{t().footer_kvkk}</span>
            <span className="hover:text-blue-300 cursor-pointer transition-colors">{t().footer_cookies}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
