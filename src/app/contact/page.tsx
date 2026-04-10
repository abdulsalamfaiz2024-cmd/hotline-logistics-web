import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = { title: "تواصل معنا - هوت لاين" };

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 bg-white">
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">تواصل معنا</h1>
          <p className="text-xl text-gray-300 font-medium">
            فريق خبرائنا بانتظار استفساراتك لتقديم أفضل الحلول اللوجستية المصممة خصيصاً لاحتياجاتك.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-10 border-r-0 lg:border-l border-gray-200 lg:pl-16">
               <div>
                 <h2 className="text-3xl font-bold text-primary mb-8">معلومات مكتبنا الرئيسي</h2>
                 <p className="text-gray-600 font-medium leading-relaxed mb-8">
                   يسعدنا استقبالكم في مقرنا الرئيسي بصنعاء، أو الرد على استفساراتكم الهاتفية والبريدية بشكل عاجل لضمان استمرارية أعمالكم.
                 </p>
               </div>

               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <div className="bg-primary/5 p-4 rounded-xl shrink-0">
                     <MapPin size={28} className="text-brand-red" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-primary mb-2">العنوان</h3>
                     <p className="text-gray-600 font-medium">الجمهورية اليمنية، صنعاء<br/>شارع الخمسين</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-primary/5 p-4 rounded-xl shrink-0">
                     <Phone size={28} className="text-brand-red" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-primary mb-2">الهاتف المباشر</h3>
                     <p dir="ltr" className="text-gray-600 font-mono font-bold text-right">+967 777 397 037</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-primary/5 p-4 rounded-xl shrink-0">
                     <Mail size={28} className="text-brand-red" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-primary mb-2">البريد الإلكتروني</h3>
                     <p className="text-gray-600 font-mono font-bold">info@hotline-int.com</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-primary/5 p-4 rounded-xl shrink-0">
                     <Clock size={28} className="text-brand-red" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-primary mb-2">ساعات العمل</h3>
                     <p className="text-gray-600 font-medium">السبت - الخميس: 8 صباحاً - 5 مساءً<br/>طوارئ الموانئ: على مدار 24 ساعة</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-light-bg rounded-3xl p-10 shadow-lg border border-gray-100">
               <h2 className="text-3xl font-bold text-primary mb-8">أرسل رسالة مباشرة</h2>
               <form className="space-y-6">
                 <div>
                   <label className="block text-primary font-bold mb-2">الاسم الكامل *</label>
                   <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="اكتب اسمك الكامل" required />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-primary font-bold mb-2">رقم الهاتف *</label>
                     <input type="tel" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="+967..." dir="ltr" required />
                   </div>
                   <div>
                     <label className="block text-primary font-bold mb-2">اسم الشركة (اختياري)</label>
                     <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="شركتك التجارية" />
                   </div>
                 </div>

                 <div>
                   <label className="block text-primary font-bold mb-2">تفاصيل الرسالة أو الشحنة *</label>
                   <textarea rows={5} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="كيف يمكننا مساعدتك؟ يرجى تحديد أي تفاصيل بخصوص ميناء الوصول، نوع البضاعة...الخ" required></textarea>
                 </div>

                 <button type="submit" className="w-full bg-brand-red hover:bg-red-800 text-white font-bold py-4 rounded-lg shadow-md transition-all">
                   إرسال الرسالة
                 </button>
               </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
