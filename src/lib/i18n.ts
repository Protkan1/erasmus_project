import { create } from "zustand";

export type Lang = "tr" | "de";

interface Translations {
  // Navbar
  nav_about: string;
  nav_categories: string;
  nav_contact: string;
  nav_apply: string;

  // Hero
  hero_badge: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_desc: string;
  hero_quick: string;

  // Quick links
  ql_firmalar: string;
  ql_firmalar_de: string;
  ql_urun: string;
  ql_urun_de: string;
  ql_erasmus: string;
  ql_erasmus_de: string;
  ql_is: string;
  ql_is_de: string;

  // About
  about_label: string;
  about_title_1: string;
  about_title_2: string;
  about_desc: string;
  about_bridge: string;
  about_bridge_d: string;
  about_human: string;
  about_human_d: string;
  about_result: string;
  about_result_d: string;
  about_trust: string;
  about_trust_d: string;
  about_timeline: string;
  tl_2022: string;
  tl_2023: string;
  tl_2024: string;
  tl_2025: string;

  // Categories section
  cat_label: string;
  cat_label_sub: string;

  // Category: Firmalar
  c1_title: string;
  c1_title_de: string;
  c1_fomo: string;
  c1_fomo_de: string;
  c1_b1: string;
  c1_b1_de: string;
  c1_b2: string;
  c1_b2_de: string;
  c1_micro: string;

  // Category: Ürün Sahipleri
  c2_title: string;
  c2_title_de: string;
  c2_fomo: string;
  c2_fomo_de: string;
  c2_b1: string;
  c2_b1_de: string;
  c2_b2: string;
  c2_b2_de: string;
  c2_micro: string;

  // Category: Erasmus+
  c3_title: string;
  c3_title_de: string;
  c3_fomo: string;
  c3_fomo_de: string;
  c3_b1: string;
  c3_b1_de: string;
  c3_b2: string;
  c3_b2_de: string;
  c3_micro: string;

  // Category: İş Arayanlar
  c4_title: string;
  c4_title_de: string;
  c4_fomo: string;
  c4_fomo_de: string;
  c4_b1: string;
  c4_b1_de: string;
  c4_b2: string;
  c4_b2_de: string;
  c4_micro: string;

  // Card common
  card_apply: string;

  // Stats
  s1_label: string;
  s2_label: string;
  s3_label: string;
  s4_label: string;
  stats_why: string;
  stats_why_title: string;
  stats_why_desc: string;

  // Contact
  contact_label: string;
  contact_title_1: string;
  contact_title_2: string;
  contact_desc: string;
  contact_email_label: string;
  contact_phone_label: string;
  contact_address_label: string;
  contact_hours_label: string;
  contact_hours: string;
  contact_address: string;

  // Footer
  footer_desc: string;
  footer_desc_2: string;
  footer_quick: string;
  footer_corporate: string;
  footer_corporate_about: string;
  footer_corporate_blog: string;
  footer_corporate_career: string;
  footer_corporate_contact: string;
  footer_contact: string;
  footer_address: string;
  footer_rights: string;
  footer_privacy: string;
  footer_kvkk: string;
  footer_cookies: string;
}

const tr: Translations = {
  nav_about: "Hakkımızda",
  nav_categories: "Başvuru Kategorileri",
  nav_contact: "İletişim",
  nav_apply: "Başvur",

  hero_badge: "Türkiye – Avrupa Köprüsü",
  hero_title_1: "Nitelikli İş ve",
  hero_title_2: "İşçi Bulma Ağı",
  hero_desc: "Türkiye ve Avrupa arasında nitelikli profesyonelleri güvenle eşleştiriyoruz. Kategorinize ait forma hemen başvurun.",
  hero_quick: "Hızlı Başvuru",

  ql_firmalar: "Firmalar",
  ql_firmalar_de: "Unternehmen",
  ql_urun: "Ürün Sahipleri",
  ql_urun_de: "Produktinhaber",
  ql_erasmus: "Erasmus+",
  ql_erasmus_de: "Programm",
  ql_is: "İş Arayanlar",
  ql_is_de: "Arbeitssuchende",

  about_label: "Hakkımızda",
  about_title_1: "Avrupa ve Türkiye'yi",
  about_title_2: "profesyonellerle buluşturuyoruz.",
  about_desc: "NIIBA, 2022 yılında İstanbul'da kurulmuş bir profesyonel eşleştirme platformudur. Türkiye'nin yetenekli iş gücü ile Avrupa'nın dinamik firma ihtiyaçlarını buluşturarak, her iki tarafta da sürdürülebilir kariyer fırsatları yaratıyoruz. Amacımız sadece iş bulmak değil, doğru insanı doğru yere yerleştirmek.",
  about_bridge: "Köprü Rolü",
  about_bridge_d: "Türkiye ve Avrupa iş gücü piyasaları arasında güvenilir, verimli bir köprü kuruyoruz. Kültürel ve profesyonel uyumu sağlayan süreçlerimizi sürekli geliştiriyoruz.",
  about_human: "İnsan Odaklı",
  about_human_d: "Her adayın ve firmanın benzersiz ihtiyaçlarını anlıyoruz. Kişiselleştirilmiş eşleştirme yaklaşımımızla doğru insanı doğru pozisyona ulaştırıyoruz.",
  about_result: "Sonuç Odaklı",
  about_result_d: "Sadece bağlantı kurmakla kalmıyor, yerleşmeye kadar süreci yönetiyoruz. Başvurudan iş başına kadar ortalama 3 hafta içinde net sonuç sağlıyoruz.",
  about_trust: "Güven & Şeffaflık",
  about_trust_d: "Tüm partner firmalarımız titizlikle denetlenir. Aday verileri KVKK standartlarında korunur. Süreç boyunca tam şeffaflık ilkesini benimsiyoruz.",
  about_timeline: "Yolculuğumuz",
  tl_2022: "NIIBA kuruluşu — İstanbul merkezli start-up",
  tl_2023: "İlk 1.000 başarılı eşleştirme",
  tl_2024: "Almanya, Hollanda ve Avusturya genişlemesi",
  tl_2025: "Erasmus+ ve ürün sahipleri programı lansmanı",

  cat_label: "Kategorine Göre Başvur",
  cat_label_sub: "Bewerben Sie sich nach Ihrer Kategorie",

  c1_title: "Firmalar",
  c1_title_de: "Für Unternehmen",
  c1_fomo: "Avrupa'nın en yetenekli Türk profesyonellerini keşfetmek için binlerce firma yarışıyor. Nitelikli adaylar hızla tükeniyor.",
  c1_fomo_de: "Tausende Unternehmen konkurrieren um die besten türkischen Fachkräfte. Qualifizierte Kandidaten sind schnell vergriffen.",
  c1_b1: "Uygun maliyetli nitelikli çalışan havuzu",
  c1_b1_de: "Kostengünstiger Pool qualifizierter Arbeitskräfte",
  c1_b2: "EU uyumlu işe alım & vize süreçleri",
  c1_b2_de: "EU-konforme Einstellungs- & Visumverfahren",
  c1_micro: "2 dakikada formunu tamamla",

  c2_title: "Ürün Sahipleri",
  c2_title_de: "Für Produktinhaber",
  c2_fomo: "Türkiye'nin 85 milyonluk dinamik pazarına giriş fırsatları her gün daralıyor. Rakipleriniz şimdi adım atıyor.",
  c2_fomo_de: "Die Chancen auf den 85-Millionen-Markt der Türkei werden jeden Tag knapper. Ihre Konkurrenten handeln bereits jetzt.",
  c2_b1: "Lojistik & dağıtım ağı desteği",
  c2_b1_de: "Logistik- & Distributionsnetzunterstützung",
  c2_b2: "Hedef pazara özel giriş stratejisi",
  c2_b2_de: "Zielmarktspezifische Eintrittsstrategie",
  c2_micro: "Ücretsiz ön değerlendirme",

  c3_title: "Erasmus+",
  c3_title_de: "Erasmus+ Programme",
  c3_fomo: "Avrupa eğitim fonları için son başvuru tarihleri yaklaşıyor. Hayallerinizin ertelenmesine izin vermeyin.",
  c3_fomo_de: "Die letzten Anmeldefristen für europäische Bildungsfinanzierungen nähern sich. Lassen Sie Ihre Träume nicht aufschieben.",
  c3_b1: "Tam desteklü başvuru süreci",
  c3_b1_de: "Vollständig unterstützt Bewerbungsverfahren",
  c3_b2: "Deneyimli danışman ağı ile eşleştirme",
  c3_b2_de: "Matching mit erfahrenen Beraternetzwerk",
  c3_micro: "Sonraki döneme 45 gün",

  c4_title: "İş Arayanlar",
  c4_title_de: "Für Arbeitssuchende",
  c4_fomo: "Avrupa'da kariyer fırsatları her gün yenileniyor. Binlerce açık pozisyon arasında sizin yerinizi başka biri almış olabilir.",
  c4_fomo_de: "Karrierechancen in Europa werden täglich aktualisiert. Jemand anderes könnte Ihren Platz bereits eingenommen haben.",
  c4_b1: "Doğrudan firma ile eşleştirme",
  c4_b1_de: "Direktes Matching mit Unternehmen",
  c4_b2: "Ücretsiz CV danışmanlığı & vize rehberliği",
  c4_b2_de: "Kostenlose CV-Beratung & Visum-Begleitung",
  c4_micro: "Ücretsiz kayıt ol",

  card_apply: "Başvuru Yap",

  s1_label: "Partner Firma",
  s2_label: "Eşleştirme",
  s3_label: "Avrupa Ülkesi",
  s4_label: "Memnuniyet",
  stats_why: "Neden NIIBA?",
  stats_why_title: "Güvenilir, hızlı ve kişisel.",
  stats_why_desc: "Binlerce başarılı eşleştirme ve güçlü Avrupa ağı ile fark yaratıyoruz.",

  contact_label: "İletişim",
  contact_title_1: "Sorularınız mı var?",
  contact_title_2: "Bize ulaşın.",
  contact_desc: "Başvuru süreci, partnerlik veya genel sorularınız için bizimle iletişime geçin. Ekibimiz en kısa sürede size dönüş yapacaktır.",
  contact_email_label: "E-posta",
  contact_phone_label: "Telefon",
  contact_address_label: "Adres",
  contact_hours_label: "Çalışma Saatleri",
  contact_hours: "Pazartesi – Cuma, 09:00 – 18:00 (CET)",
  contact_address: "Levent, Beşiktaş / İstanbul, Türkiye",

  footer_desc: "Nitelikli İş ve İşçi Bulma Ağı.",
  footer_desc_2: "Türkiye – Avrupa profesyonel köprüsü.",
  footer_quick: "Hızlı Başvuru",
  footer_corporate: "Kurumsal",
  footer_corporate_about: "Hakkımızda",
  footer_corporate_blog: "Blog",
  footer_corporate_career: "Kariyer",
  footer_corporate_contact: "İletişim",
  footer_contact: "İletişim",
  footer_address: "İstanbul, Türkiye",
  footer_rights: "Tüm hakları saklıdır.",
  footer_privacy: "Gizlilik Politikası",
  footer_kvkk: "KVKK",
  footer_cookies: "Çerez Politikası",
};

const de: Translations = {
  nav_about: "Über uns",
  nav_categories: "Bewerbungskategorien",
  nav_contact: "Kontakt",
  nav_apply: "Bewerben",

  hero_badge: "Türkei – Europa Brücke",
  hero_title_1: "Qualifizierte Arbeits-",
  hero_title_2: "kräftevermittlung",
  hero_desc: "Wir vermitteln qualifizierte Fachkräfte zuverlässig zwischen der Türkei und Europa. Bewerben Sie sich jetzt in Ihrer Kategorie.",
  hero_quick: "Schnellbewerbung",

  ql_firmalar: "Unternehmen",
  ql_firmalar_de: "Companies",
  ql_urun: "Produktinhaber",
  ql_urun_de: "Product Owners",
  ql_erasmus: "Erasmus+",
  ql_erasmus_de: "Program",
  ql_is: "Arbeitssuchende",
  ql_is_de: "Job Seekers",

  about_label: "Über uns",
  about_title_1: "Wir verbinden Europa",
  about_title_2: "mit Fachkräften aus der Türkei.",
  about_desc: "NIIBA ist eine professionelle Vermittlungsplattform, die 2022 in Istanbul gegründet wurde. Wir verbinden das talentierte Arbeitskräftepotenzial der Türkei mit den dynamischen Unternehmensbedürfnissen Europas und schaffen nachhaltige Karrierechancen auf beiden Seiten. Unser Ziel ist es nicht nur, Jobs zu finden, sondern den richtigen Menschen an den richtigen Ort zu bringen.",
  about_bridge: "Brückenrolle",
  about_bridge_d: "Wir bauen eine zuverlässige und effiziente Brücke zwischen den Arbeitsmärkten der Türkei und Europas. Unsere Prozesse zur Förderung kultureller und beruflicher Kompatibilität werden kontinuierlich verbessert.",
  about_human: "Menschenorientiert",
  about_human_d: "Wir verstehen die einzigartigen Bedürfnisse jedes Kandidaten und Unternehmens. Mit unserem personalisierten Matching-Ansatz bringen wir den richtigen Menschen an die richtige Position.",
  about_result: "Ergebnisorientiert",
  about_result_d: "Wir vermitteln nicht nur, sondern managen den gesamten Prozess bis zur Ankunft. Vom Antrag bis zum Arbeitsantritt liefern wir innerhalb von durchschnittlich 3 Wochen konkrete Ergebnisse.",
  about_trust: "Vertrauen & Transparenz",
  about_trust_d: "Alle Partnerunternehmen werden sorgfältig geprüft. Kandidatendaten werden nach DSGVO-Standards geschützt. Wir befolgen das Prinzip vollständiger Transparenz während des gesamten Prozesses.",
  about_timeline: "Unsere Reise",
  tl_2022: "NIIBA Gründung — Start-up mit Sitz in Istanbul",
  tl_2023: "Erste 1.000 erfolgreiche Vermittlungen",
  tl_2024: "Expansion nach Deutschland, Niederlande und Österreich",
  tl_2025: "Launch von Erasmus+ und Produktinhaber-Programm",

  cat_label: "Nach Kategorie bewerben",
  cat_label_sub: "Apply according to your category",

  c1_title: "Unternehmen",
  c1_title_de: "For Companies",
  c1_fomo: "Tausende Unternehmen konkurrieren um die besten türkischen Fachkräfte. Qualifizierte Kandidaten sind schnell vergriffen.",
  c1_fomo_de: "Thousands of companies compete for the best Turkish professionals. Qualified candidates sell out quickly.",
  c1_b1: "Kostengünstiger Pool qualifizierter Arbeitskräfte",
  c1_b1_de: "Cost-effective pool of qualified workforce",
  c1_b2: "EU-konforme Einstellungs- & Visumverfahren",
  c1_b2_de: "EU-compliant hiring & visa procedures",
  c1_micro: "Formular in 2 Minuten ausfüllen",

  c2_title: "Produktinhaber",
  c2_title_de: "Product Owners",
  c2_fomo: "Die Chancen auf den 85-Millionen-Markt der Türkei werden jeden Tag knapper. Ihre Konkurrenten handeln bereits jetzt.",
  c2_fomo_de: "Opportunities in Turkey's 85 million dynamic market are shrinking every day. Your competitors are already acting.",
  c2_b1: "Logistik- & Distributionsnetzunterstützung",
  c2_b1_de: "Logistics & distribution network support",
  c2_b2: "Zielmarktspezifische Eintrittsstrategie",
  c2_b2_de: "Target market specific entry strategy",
  c2_micro: "Kostenlose Erstbewertung",

  c3_title: "Erasmus+ Programme",
  c3_title_de: "Erasmus+ Programs",
  c3_fomo: "Die letzten Anmeldefristen für europäische Bildungsfinanzierungen nähern sich. Lassen Sie Ihre Träume nicht aufschieben.",
  c3_fomo_de: "The final application deadlines for European education funding are approaching. Don't let your dreams wait.",
  c3_b1: "Vollständig unterstützt Bewerbungsverfahren",
  c3_b1_de: "Fully supported application process",
  c3_b2: "Matching mit erfahrenen Beraternetzwerk",
  c3_b2_de: "Matching with experienced consultant network",
  c3_micro: "Noch 45 Tage bis zur nächsten Runde",

  c4_title: "Arbeitssuchende",
  c4_title_de: "Job Seekers",
  c4_fomo: "Karrierechancen in Europa werden täglich aktualisiert. Jemand anderes könnte Ihren Platz bereits eingenommen haben.",
  c4_fomo_de: "Career opportunities in Europe are updated daily. Someone else may have already taken your place.",
  c4_b1: "Direktes Matching mit Unternehmen",
  c4_b1_de: "Direct matching with companies",
  c4_b2: "Kostenlose CV-Beratung & Visum-Begleitung",
  c4_b2_de: "Free CV consulting & visa guidance",
  c4_micro: "Kostenlos registrieren",

  card_apply: "Jetzt bewerben",

  s1_label: "Partnerunternehmen",
  s2_label: "Vermittlungen",
  s3_label: "EU-Länder",
  s4_label: "Zufriedenheit",
  stats_why: "Warum NIIBA?",
  stats_why_title: "Zuverlässig, schnell und persönlich.",
  stats_why_desc: "Mit tausenden erfolgreichen Vermittlungen und einem starken europäischen Netzwerk machen wir den Unterschied.",

  contact_label: "Kontakt",
  contact_title_1: "Fragen?",
  contact_title_2: "Kontaktieren Sie uns.",
  contact_desc: "Kontaktieren Sie uns für Bewerbungsprozess, Partnerschaft oder allgemeine Fragen. Unser Team wird sich schnellstmöglich bei Ihnen melden.",
  contact_email_label: "E-Mail",
  contact_phone_label: "Telefon",
  contact_address_label: "Adresse",
  contact_hours_label: "Öffnungszeiten",
  contact_hours: "Montag – Freitag, 09:00 – 18:00 (MEZ)",
  contact_address: "Levent, Beşiktaş / Istanbul, Türkei",

  footer_desc: "Netzwerk für qualifizierte",
  footer_desc_2: "Arbeitsvermittlung. Türkei – Europa.",
  footer_quick: "Schnellbewerbung",
  footer_corporate: "Unternehmen",
  footer_corporate_about: "Über uns",
  footer_corporate_blog: "Blog",
  footer_corporate_career: "Karriere",
  footer_corporate_contact: "Kontakt",
  footer_contact: "Kontakt",
  footer_address: "Istanbul, Türkei",
  footer_rights: "Alle Rechte vorbehalten.",
  footer_privacy: "Datenschutz",
  footer_kvkk: "DSGVO",
  footer_cookies: "Cookie-Richtlinie",
};

const translations: Record<Lang, Translations> = { tr, de };

interface LangStore {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: () => Translations;
}

export const useLang = create<LangStore>((set, get) => ({
  lang: "tr",
  setLang: (l: Lang) => set({ lang: l }),
  t: () => translations[get().lang],
}));
