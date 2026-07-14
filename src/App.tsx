import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  Globe,
  Clock,
  Send,
  Building2,
  ArrowUpRight
} from "lucide-react";

type Language = "ar" | "en";

export default function App() {
  const [lang, setLang] = useState<Language>("ar");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");

  const emailAddress = "chairman@gnc-kw.net";

  const translations = {
    ar: {
      dir: "rtl",
      comingSoon: "الموقع قيد الإنشاء",
      title: "نعمل على شيء جديد لشركة GNC",
      subtitle: "نحن نقوم بتطوير هويتنا الرقمية الجديدة وتصميم تجربة متكاملة لخدمتكم بشكل أفضل في دولة الكويت. ترقبوا الإطلاق الرسمي قريباً.",
      contactTitle: "قنوات التواصل المباشر",
      contactSubtitle: "يسعدنا ويشرفنا تواصلكم المباشر معنا للاستفسارات والشراكات عبر البريد الإلكتروني لرئيس مجلس الإدارة:",
      copyEmail: "نسخ البريد الإلكتروني",
      copied: "تم النسخ بنجاح!",
      quickMessage: "أرسل لنا استفساراً سريعاً",
      nameLabel: "الاسم بالكامل",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "تفاصيل الاستفسار أو الرسالة",
      sendButton: "إرسال الاستفسار الآن",
      sending: "جاري التحضير لإرسال بريدك...",
      messageSuccess: "تم التجهيز! سيتم فتح تطبيق البريد الإلكتروني الخاص بك للإرسال.",
      progressTitle: "مراحل جاهزية المنصة",
      planning: "التخطيط والتحليل",
      design: "الهوية والتصميم",
      development: "البرمجة والتطوير",
      launch: "الإطلاق الرسمي",
      footerText: "جميع الحقوق محفوظة لمجموعة GNC الكويت",
      kw: "دولة الكويت",
      metaDomain: "gnc-kw.net",
      placeholderName: "اكتب اسمك الكريم هنا...",
      placeholderEmail: "name@example.com",
      placeholderMessage: "كيف يمكننا مساعدتك؟ اكتب رسالتك هنا..."
    },
    en: {
      dir: "ltr",
      comingSoon: "UNDER CONSTRUCTION",
      title: "We are crafting something new.",
      subtitle: "We are developing our new digital identity to serve you better in the State of Kuwait. Stay tuned for our official launch very soon.",
      contactTitle: "Direct Channels",
      contactSubtitle: "We are pleased to receive your inquiries and partnership requests directly via the Chairman's email:",
      copyEmail: "Copy Email Address",
      copied: "Copied successfully!",
      quickMessage: "Send Us a Quick Inquiry",
      nameLabel: "Full Name",
      emailLabel: "Your Email Address",
      messageLabel: "Inquiry Details",
      sendButton: "Send Inquiry Now",
      sending: "Preparing your email client...",
      messageSuccess: "Ready! Opening your email application to send directly.",
      progressTitle: "Platform Readiness Roadmap",
      planning: "Planning & Strategy",
      design: "Branding & Design",
      development: "Development",
      launch: "Official Launch",
      footerText: "All Rights Reserved © GNC Kuwait",
      kw: "State of Kuwait",
      metaDomain: "gnc-kw.net",
      placeholderName: "Type your name...",
      placeholderEmail: "name@example.com",
      placeholderMessage: "How can we help you? Write your message here..."
    }
  };

  const t = translations[lang];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = emailAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    
    setTimeout(() => {
      setFormStatus("success");
      
      const subject = encodeURIComponent(`Inquiry from GNC Website - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setFormStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }, 1000);
  };

  return (
    <div 
      className="min-h-screen bg-[#fafafa] text-[#1a1a1a] flex flex-col justify-between relative font-sans selection:bg-[#1a1a1a]/10 selection:text-[#1a1a1a]"
      dir={t.dir}
    >
      {/* Decorative Grid Accent Line (Minimalist) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-zinc-200/60" />
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-zinc-100 hidden md:block" />
      <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-zinc-100 hidden md:block" />

      {/* Header */}
      <header className="container mx-auto px-6 md:px-12 py-10 flex justify-between items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-[#1a1a1a] flex items-center justify-center rounded-sm shadow-sm">
            <span className="text-white font-display font-bold text-lg">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-lg text-[#1a1a1a]">
              GNC KUWAIT
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
              {t.metaDomain}
            </span>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ y: -1 }}
          onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className="px-4 py-2 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 rounded-sm text-xs font-medium text-zinc-600 flex items-center gap-2 transition-all duration-250 cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5 text-zinc-400" />
          <span>{lang === "ar" ? "English" : "العربية"}</span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 md:px-12 py-8 flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-16 z-10 my-auto">
        
        {/* Left Column: Headings & roadmap */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-10">
          <motion.div
            initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Minimal Pill Badge */}
            <span className="inline-block px-3 py-1 border border-zinc-200 text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 rounded-full w-fit">
              {t.comingSoon}
            </span>

            <h1 className="text-4xl md:text-6xl font-light text-[#1a1a1a] leading-tight tracking-tighter">
              {lang === "ar" ? (
                <>
                  نعمل على <br />
                  <span className="font-medium italic bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">شيء جديد.</span>
                </>
              ) : (
                <>
                  We are crafting <br />
                  <span className="font-medium italic bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">something new.</span>
                </>
              )}
            </h1>
            
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light max-w-xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Minimalist Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-8 border-t border-zinc-200/70 space-y-6"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.progressTitle}</span>
            </div>

            {/* Flat Minimal Progress Bar */}
            <div className="space-y-2">
              <div className="h-[2px] w-full bg-zinc-200 overflow-hidden relative">
                <div className="h-full bg-[#1a1a1a] w-[85%]" />
              </div>
              <div className="flex justify-between text-xs text-zinc-400 font-mono">
                <span>0%</span>
                <span className="text-[#1a1a1a] font-medium">85% Completed</span>
                <span>100%</span>
              </div>
            </div>

            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {[
                { name: t.planning, done: true, current: false },
                { name: t.design, done: true, current: false },
                { name: t.development, done: true, current: true },
                { name: t.launch, done: false, current: false }
              ].map((step, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-sm border text-center transition-all ${
                    step.current 
                      ? "bg-zinc-100 border-[#1a1a1a] text-[#1a1a1a] font-medium" 
                      : step.done 
                        ? "bg-transparent border-zinc-200 text-zinc-500"
                        : "bg-transparent border-zinc-100 text-zinc-300"
                  }`}
                >
                  <div className="flex justify-center mb-1">
                    {step.done ? (
                      <Check className={`w-3.5 h-3.5 ${step.current ? "text-[#1a1a1a]" : "text-zinc-400"}`} />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 my-1" />
                    )}
                  </div>
                  <span className="text-[11px] block truncate">{step.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean White Card Contact Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-zinc-200/80 p-8 md:p-10 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col space-y-8 relative"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-medium text-[#1a1a1a] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-zinc-400" />
                {t.contactTitle}
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed font-light">
                {t.contactSubtitle}
              </p>
            </div>

            {/* Email Copier Row */}
            <div className="p-4 rounded-sm bg-zinc-50/50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 group">
              <div className="flex items-center gap-3 self-start sm:self-center">
                <div className="p-2 rounded-sm bg-zinc-200/50 text-[#1a1a1a]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-mono">CHAIRMAN EMAIL</span>
                  <span className="text-sm font-mono font-medium text-[#1a1a1a] select-all">
                    {emailAddress}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto px-4 py-2 rounded-sm border text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  copied 
                    ? "bg-[#1a1a1a] border-[#1a1a1a] text-white" 
                    : "bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-600 hover:text-[#1a1a1a]"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* Horizontal Line Divider */}
            <div className="flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-zinc-200" />
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">{t.quickMessage}</span>
              <div className="h-[1px] flex-1 bg-zinc-200" />
            </div>

            {/* Clean Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono tracking-wider text-zinc-500 uppercase">{t.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.placeholderName}
                    className="w-full px-4 py-3 rounded-sm bg-white border border-zinc-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a]/10 text-sm text-[#1a1a1a] placeholder-zinc-300 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono tracking-wider text-zinc-500 uppercase">{t.emailLabel}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.placeholderEmail}
                    className="w-full px-4 py-3 rounded-sm bg-white border border-zinc-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a]/10 text-sm text-[#1a1a1a] placeholder-zinc-300 outline-none transition-all ltr"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono tracking-wider text-zinc-500 uppercase">{t.messageLabel}</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.placeholderMessage}
                  className="w-full px-4 py-3 rounded-sm bg-white border border-zinc-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a]/10 text-sm text-[#1a1a1a] placeholder-zinc-300 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending" || !formData.name || !formData.email || !formData.message}
                className="w-full py-3.5 px-5 rounded-sm bg-[#1a1a1a] hover:bg-zinc-800 disabled:bg-zinc-300 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed shadow-sm active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{formStatus === "sending" ? t.sending : t.sendButton}</span>
              </button>

              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-3 rounded-sm bg-zinc-50 border border-zinc-200 text-[#1a1a1a] text-xs flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 flex-shrink-0 text-zinc-600" />
                    <span>{t.messageSuccess}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200/60 bg-white py-8 z-10 mt-auto">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-400 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-light text-zinc-500">{t.footerText}</span>
            <span className="hidden sm:inline text-zinc-300">|</span>
            <span className="font-mono text-zinc-400">{t.metaDomain}</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a 
              href={`mailto:${emailAddress}`} 
              className="text-[#1a1a1a] hover:text-zinc-500 transition-colors flex items-center gap-1 font-medium text-xs font-mono"
            >
              <span>{emailAddress}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
