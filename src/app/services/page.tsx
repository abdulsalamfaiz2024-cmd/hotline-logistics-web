import { Anchor, ClipboardCheck, Truck, Users, Activity, FileQuestion, ChevronDown, Package, Plane } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "خدماتنا - هوت لاين" };

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 bg-light-bg">
      {/* Header */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">خدماتنا اللوجستية</h1>
          <p className="text-xl text-gray-300 font-medium leading-relaxed">
            محفظة متكاملة من الخدمات الملاحية المصممة لربط تجارتك بأسواق اليمن بكفاءة وسرعة، مع تخطيط دقيق للتعامل مع أي متغيرات.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

          {/* Service 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <img src="/images/Freight.jpeg" alt="الشحن البحري" className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Anchor size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">الشحن البحري</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                نقدم خدمات شحن بحري مخصصة للحاويات الكاملة (FCL) والمجزأة (LCL). بفضل شراكاتنا الاستراتيجية مع كبار ملاك السفن والخطوط الملاحية، نضمن توفير مساحات مؤكدة على ظهر السفن لعملائنا وتوفير حاويات فارغة بمواصفات مطابقة لطبيعة البضائع.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-primary font-bold">
                <li>• شحنات FCL / LCL</li>
                <li>• تأمين البضائع البحرية</li>
                <li>• توفير حاويات مبردة وجافة</li>
                <li>• عقود ملاحية طويلة المدى</li>
              </ul>
            </div>
          </div>

          {/* Service 1.5 - Air Freight */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <img src="/images/air_freight.png" alt="الشحن الجوي" className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Plane size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">الشحن الجوي</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                نوفر خدمات شحن طيران سريعة وموثوقة لضمان وصول بضائعك العاجلة في الوقت المحدد. نتعاون مع أفضل شركات الطيران العالمية لتأمين مساحات شحن تلبي متطلباتك بكفاءة عالية وأسعار مدروسة.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-primary font-bold">
                <li>• شحنات جوية عاجلة</li>
                <li>• رحلات مجدولة وتشارتر</li>
                <li>• نقل البضائع الحساسة</li>
                <li>• تتبع الرحلات المباشر</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <img src="/images/port.png" alt="التخليص الجمركي" className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">التخليص الجمركي</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                خبرتنا الطويلة في الموانئ اليمنية تتيح لنا المرور ببضائعك عبر الإجراءات الجمركية بأعلى سرعة ممكنة. نقدم معالجة مسبقة للوثائق فور تحميل السفينة لضمان عدم وجود تأخير أو احتساب رسوم أرضيات استثنائية.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-primary font-bold">
                <li>• تخليص استباقي ومبكر</li>
                <li>• استخراج التراخيص والتصاريح</li>
                <li>• مطابقة المواصفات القياسية</li>
                <li>• خفض غرامات التأخير</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <img src="/images/road_freight.jpg" alt="النقل البري الداخلي" className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Truck size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">النقل البري الداخلي</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                يُعد النقل البري في اليمن تحدياً مستقلاً، ولذلك نمتلك أسطولاً وشراكات نقل لتأمين توصيل حاوياتك الثقيلة والخفيفة من ساحة الميناء إلى المستودع الخاص بك بشكل آمن، مع أخذ الظروف الأمنية والطرق في الحسبان.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-primary font-bold">
                <li>• تريلات وشاحنات مجهزة</li>
                <li>• نقل بضائع خطرة</li>
                <li>• تتبع مباشر لمسار الرحلة</li>
                <li>• دراسة أفضل مسارات الطرق</li>
              </ul>
            </div>
          </div>
          
          {/* Service 4 & 5 Mini-cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
               <img src="/images/service-5.jpg" alt="الاستشارات اللوجستية" className="w-full h-48 object-cover" />
               <div className="p-8">
                 <div className="flex items-center gap-3 mb-4">
                   <Users size={28} className="text-brand-red" />
                   <h3 className="text-2xl font-bold text-primary">الاستشارات اللوجستية</h3>
                 </div>
                 <p className="text-gray-600 font-medium leading-relaxed">تخطيط معقد لسلاسل الإمداد للشركات الكبرى، وتحجيم المخاطر المترتبة على الأزمات العالمية وتقلبات السوق.</p>
               </div>
             </div>

             <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
               <img src="/images/warehouse_solutions.jpg" alt="خدمات التخزين" className="w-full h-48 object-cover" />
               <div className="p-8">
                 <div className="flex items-center gap-3 mb-4">
                   <Package size={28} className="text-brand-red" />
                   <h3 className="text-2xl font-bold text-primary">خدمات التخزين</h3>
                 </div>
                 <p className="text-gray-600 font-medium leading-relaxed">توفير حلول تخزين آمنة ومرنة لبضائعك في مستودعات مجهزة بأحدث تقنيات الإدارة والمراقبة.</p>
               </div>
             </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Placeholder */}
      <section className="py-20 bg-white">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3">
             <FileQuestion className="text-brand-red" /> الأسئلة الشائعة
           </h2>
           <div className="space-y-4">
             {/* Note: Dummy visual states for the accordion */}
             <div className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:bg-gray-50">
               <div className="flex justify-between items-center font-bold text-primary">
                 <span>كم تستغرق عملية التخليص الجمركي عادةً؟</span>
                 <ChevronDown size={20} className="text-brand-red" />
               </div>
             </div>
             <div className="border border-gray-200 rounded-lg p-5 cursor-pointer bg-gray-50">
               <div className="flex justify-between items-center font-bold text-primary mb-3">
                 <span>هل توفرون خدمة التخزين المؤقت في موانئ الوصول؟</span>
                 <ChevronDown size={20} className="text-brand-red transform rotate-180" />
               </div>
               <p className="text-gray-600 text-sm font-medium leading-relaxed">
                 نعم، نقوم بإدارة تخزين الحاويات والبضائع في مناطق مخصصة داخل الموانئ وفي مستودعاتنا اللوجستية الخاصة في مدن رئيسية.
               </p>
             </div>
             <div className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:bg-gray-50">
               <div className="flex justify-between items-center font-bold text-primary">
                 <span>متى يجب علي دفع أجور الشحن؟</span>
                 <ChevronDown size={20} className="text-brand-red" />
               </div>
             </div>
           </div>
         </div>
      </section>

      <section className="py-16 bg-brand-red text-center">
        <h2 className="text-3xl font-bold text-white mb-6">هل تبحث عن خدمة مخصصة لتجارتك؟</h2>
        <Link href="/contact" className="inline-block bg-white text-brand-red px-10 py-3 rounded-md font-bold hover:shadow-lg transition-shadow">
          التقِ بمستشارينا
        </Link>
      </section>
    </main>
  );
}
