import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIIBA - Nitelikli İş ve İşçi Bulma Ağı | Türkiye-Avrupa Köprüsü",
  description:
    "NIIBA: Türkiye ve Avrupa arasında nitelikli iş gücü köprüsü. Firmalar, ürün sahipleri, Erasmus+ programları ve iş arayanlar için profesyonel eşleştirme hizmeti.",
  keywords: [
    "NIIBA",
    "iş bulma",
    "Türkiye Avrupa",
    "nitelikli iş gücü",
    "Erasmus+",
    "Firmalar",
    "kariyer fırsatları",
    "Avrupa'da çalışmak",
    "Türk profesyoneller",
  ],
  authors: [{ name: "NIIBA Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "NIIBA - Nitelikli İş ve İşçi Bulma Ağı",
    description:
      "Türkiye ve Avrupa arasında köprü kuran profesyonel iş gücü eşleştirme platformu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
