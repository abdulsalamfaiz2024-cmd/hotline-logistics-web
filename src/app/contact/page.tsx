"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Building2, CheckCircle, AlertCircle, Send, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get("name")?.toString().trim()) errs.name = "الاسم الكامل مطلوب";
    if (!form.get("phone")?.toString().trim()) errs.phone = "رقم الهاتف مطلوب";
    const email = form.get("email")?.toString().trim() || "";
    if (!email) {
      errs.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "صيغة البريد الإلكتروني غير صحيحة";
    }
    if (!form.get("service")?.toString()) errs.service = "يرجى اختيار نوع الخدمة";
    if (!form.get("message")?.toString().trim()) errs.message = "نص الرسالة مطلوب";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setFormState("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      if (res.ok) {
        setFormState("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputBase = "w-full bg-white border rounded-xl px-4 py-3.5 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red transition-all duration-200 placeholder:text-gray-400";

  const branches = [
    { name: "الإدارة العامة — صنعاء", detail: "شارع المطار أمام صحيفة الثورة", main: true },
    { name: "فرع الحديدة", detail: "شارع الميناء أمام مطعم صنعاء", main: false },
    { name: "فرع الشحن", detail: "", main: false },
    { name: "فرع جيبوتي", detail: "", main: false },
  ];

  return (
    <main className="flex flex-col min-h-screen pt-24 bg-white">
      {/* Hero Banner */}
      <section className="relative bg-primary text-white py-20 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">تواصل معنا</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-300 font-medium max-w-2xl mx-auto">
            فريق خبرائنا بانتظار استفساراتك لتقديم أفضل الحلول اللوجستية المصممة خصيصاً لاحتياجاتك.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-10 order-2 lg:order-1">
              {/* Main Contact Cards */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">معلومات التواصل</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
                    <div className="bg-brand-red/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-brand-red/20 transition-colors">
                      <Phone size={24} className="text-brand-red" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-1">الهاتف المباشر</h3>
                    <div dir="ltr" className="text-gray-600 font-mono font-bold text-right flex flex-col gap-1">
                      <span>+967 78 394 8888</span>
                      <span>+967 770 000 028</span>
                      <span>+967 780 000 088</span>
                    </div>
                  </div>

                  <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
                    <div className="bg-brand-blue/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-brand-blue/20 transition-colors">
                      <Mail size={24} className="text-brand-blue" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600 font-mono font-bold text-sm">info@hotline-int.com</p>
                  </div>

                  <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
                    <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-1">المقر الرئيسي</h3>
                    <p className="text-gray-600 font-medium text-sm">صنعاء — شارع المطار<br/>أمام صحيفة الثورة</p>
                  </div>

                  <div className="bg-light-bg rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow group">
                    <div className="bg-emerald-500/10 p-3 rounded-xl w-fit mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Clock size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-1">ساعات العمل</h3>
                    <p className="text-gray-600 font-medium text-sm">السبت – الخميس: 8ص – 5م<br/>طوارئ الموانئ: 24 ساعة</p>
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Building2 size={24} className="text-brand-red" /> فروعنا ومكاتبنا
                </h2>
                <div className="space-y-3">
                  {branches.map((branch, i) => (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border transition-all hover:shadow-md ${branch.main ? "bg-primary/5 border-primary/20" : "bg-white border-gray-100"}`}>
                      <div className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 ${branch.main ? "bg-brand-red" : "bg-gray-300"}`} />
                      <div>
                        <h4 className={`font-bold ${branch.main ? "text-primary text-lg" : "text-gray-700"}`}>{branch.name}</h4>
                        {branch.detail && <p className="text-gray-500 font-medium text-sm mt-1">{branch.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-light-bg rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 sticky top-32">
                <h2 className="text-3xl font-bold text-primary mb-2">أرسل رسالتك</h2>
                <p className="text-gray-500 font-medium mb-8">سنعاود الاتصال بك في أقرب وقت ممكن.</p>

                {formState === "success" ? (
                  <div className="text-center py-16">
                    <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-3">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-gray-500 font-medium mb-6">شكراً لتواصلك. سيقوم فريقنا بالرد عليك قريباً.</p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="text-brand-red font-bold hover:underline"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Web3Forms Hidden Fields */}
                    <input type="hidden" name="access_key" value="3106b67f-db59-4f46-b358-49cc82e13a78" />
                    <input type="hidden" name="subject" value="رسالة جديدة من موقع هوت لاين" />
                    <input type="hidden" name="from_name" value="Hotline Website" />
                    <input type="hidden" name="redirect" value="" />

                    {/* Full Name */}
                    <div>
                      <label className="block text-primary font-bold mb-2">الاسم الكامل <span className="text-brand-red">*</span></label>
                      <input
                        type="text"
                        name="name"
                        className={`${inputBase} ${errors.name ? "border-red-400 ring-2 ring-red-100" : "border-gray-200"}`}
                        placeholder="اكتب اسمك الكامل"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1"><AlertCircle size={14} />{errors.name}</p>}
                    </div>

                    {/* Phone + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-primary font-bold mb-2">رقم الهاتف <span className="text-brand-red">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          className={`${inputBase} ${errors.phone ? "border-red-400 ring-2 ring-red-100" : "border-gray-200"}`}
                          placeholder="+967..."
                          dir="ltr"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1"><AlertCircle size={14} />{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-primary font-bold mb-2">البريد الإلكتروني <span className="text-brand-red">*</span></label>
                        <input
                          type="email"
                          name="email"
                          className={`${inputBase} ${errors.email ? "border-red-400 ring-2 ring-red-100" : "border-gray-200"}`}
                          placeholder="example@email.com"
                          dir="ltr"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1"><AlertCircle size={14} />{errors.email}</p>}
                      </div>
                    </div>

                    {/* Service Type Dropdown */}
                    <div>
                      <label className="block text-primary font-bold mb-2">نوع الخدمة <span className="text-brand-red">*</span></label>
                      <div className="relative">
                        <select
                          name="service"
                          defaultValue=""
                          className={`${inputBase} appearance-none cursor-pointer ${errors.service ? "border-red-400 ring-2 ring-red-100" : "border-gray-200"}`}
                        >
                          <option value="" disabled>اختر الخدمة المطلوبة...</option>
                          <option value="الاستيراد والتصدير">الاستيراد والتصدير</option>
                          <option value="الشحن الجوي">الشحن الجوي</option>
                          <option value="الخدمات اللوجيستية">الخدمات اللوجيستية</option>
                          <option value="الشحن البري">الشحن البري</option>
                          <option value="الشحن الجزئي">الشحن الجزئي</option>
                          <option value="نقل الموانئ">نقل الموانئ</option>
                        </select>
                        <ChevronDown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.service && <p className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1"><AlertCircle size={14} />{errors.service}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-primary font-bold mb-2">الرسالة <span className="text-brand-red">*</span></label>
                      <textarea
                        name="message"
                        rows={5}
                        className={`${inputBase} resize-none ${errors.message ? "border-red-400 ring-2 ring-red-100" : "border-gray-200"}`}
                        placeholder="كيف يمكننا مساعدتك؟ يرجى تحديد أي تفاصيل بخصوص ميناء الوصول، نوع البضاعة... الخ"
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1 font-medium flex items-center gap-1"><AlertCircle size={14} />{errors.message}</p>}
                    </div>

                    {/* Error Banner */}
                    {formState === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 flex items-center gap-3 font-medium">
                        <AlertCircle size={20} />
                        <span>حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full bg-brand-red hover:bg-red-800 disabled:bg-red-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                    >
                      {formState === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          إرسال الرسالة
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-light-bg py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-primary text-center mb-3">موقعنا على الخريطة</h2>
          <p className="text-gray-500 font-medium text-center mb-10">الإدارة العامة — شارع المطار، صنعاء</p>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video max-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.7!2d44.2191!3d15.3547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzE3LjAiTiA0NMKwMTMnMDguOCJF!5e0!3m2!1sar!2sye!4v1700000000000!5m2!1sar!2sye"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotline International - Airport Road, Sana'a"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
