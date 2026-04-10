"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";

const iconList = [Mail, Phone, MapPin, Clock];
const labelKeys = ["contact_email_label", "contact_phone_label", "contact_address_label", "contact_hours_label"] as const;
const contactEmail = "info@niiba.com";
const contactPhone = "+90 (212) 000 00 00";
const contactHrefs = ["mailto:info@niiba.com", "tel:+902120000000", null, null];

export default function ContactSection() {
  const { t } = useLang();

  const values = [
    contactEmail,
    contactPhone,
    t().contact_address,
    t().contact_hours,
  ];

  return (
    <section id="iletisim" className="scroll-mt-20 py-20 sm:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.15em] mb-3">
            {t().contact_label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t().contact_title_1}
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              {t().contact_title_2}
            </span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            {t().contact_desc}
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {iconList.map((Icon, i) => {
            const href = contactHrefs[i];
            const Wrapper = href ? "a" : "div";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Wrapper
                  {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block rounded-2xl border border-slate-200 bg-slate-50/50 p-6 hover:border-slate-300 transition-colors duration-200 h-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t()[labelKeys[i]]}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {values[i]}
                  </p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
