import { Anchor, Truck, Users, FileQuestion, ChevronDown, Package, Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
              <Image src="/images/Freight.jpeg" alt="الشحن البحري" width={600} height={350} className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Anchor size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">الشحن البحري</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                نوفر حلول شحن بحري متكاملة تشمل الحاويات الكاملة والمجزئة مع متابعة دقيقة لجميع مراحل الشحن ابتداءً من نقطة الانطلاق وحتى التسليم النهائي.
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
              <Image src="/images/air_freight.png" alt="الشحن الجوي" width={600} height={350} className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Plane size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">الشحن الجوي</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                عندما يكون الوقت عاملاً حاسماً، نقدم خدمات الشحن الجوي السريع التي تضمن وصول البضائع بأقصى سرعة ممكنة. نساعد عملاءنا على التعامل مع الشحنات الحساسة والعاجلة بكفاءة عالية مع توفير حلول مرنة تناسب مختلف الاحتياجات.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-primary font-bold">
                <li>• شحنات جوية عاجلة</li>
                <li>• رحلات مجدولة وتشارتر</li>
                <li>• نقل البضائع الحساسة</li>
                <li>• تتبع الرحلات المباشر</li>
              </ul>
            </div>
          </div>



          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 shrink-0">
              <Image src="/images/road_freight.jpg" alt="النقل البري الداخلي" width={600} height={350} className="w-full h-56 object-cover rounded-2xl shadow-md" />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Truck size={32} className="text-brand-red" />
                <h2 className="text-3xl font-bold text-primary">النقل البري الداخلي</h2>
              </div>
              <p className="text-gray-600 leading-relaxed font-medium mb-6 text-lg">
                تمتلك الشركة شبكة نقل بري فعالة تربط الموانئ والمنافذ والمخازن والأسواق التجارية، وتضمن نقل البضائع بأمان وكفاءة مع الالتزام بالجداول الزمنية المحددة.
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
               <Image src="/images/service-5.jpg" alt="الاستشارات اللوجستية" width={500} height={300} className="w-full h-48 object-cover" />
               <div className="p-8">
                 <div className="flex items-center gap-3 mb-4">
                   <Users size={28} className="text-brand-red" />
                   <h3 className="text-2xl font-bold text-primary">الاستشارات اللوجستية</h3>
                 </div>
                 <p className="text-gray-600 font-medium leading-relaxed">نقدم حلولاً لوجستية متكاملة تشمل التخطيط التشغيلي، إدارة سلاسل الإمداد، التنسيق بين الجهات المختلفة، متابعة الشحنات، وإدارة عمليات التسليم، مما يساعد في تحسين الكفاءة وتقليل التكاليف.</p>
               </div>
             </div>

             <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
               <Image src="/images/warehouse_solutions.jpg" alt="خدمات التخزين" width={500} height={300} className="w-full h-48 object-cover" />
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

      <section className="py-20 bg-white">
         <div className="max-w-3xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center gap-3">
             <FileQuestion className="text-brand-red" /> الأسئلة الشائعة
           </h2>
            <div className="space-y-4">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:bg-gray-50">
                <div className="flex justify-between items-center font-bold text-primary mb-3">
                  <span>ما هي الدول التي يغطيها نطاق خدمات هوت لاين الملاحية؟</span>
                  <ChevronDown size={20} className="text-brand-red" />
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mt-2">
                  تشمل تغطيتنا التشغيلية كلاً من الجمهورية اليمنية 🇾🇪، المملكة العربية السعودية 🇸🇦، الإمارات العربية المتحدة 🇦🇪، سلطنة عمان 🇴🇲، وجمهورية جيبوتي 🇩🇯، مع القدرة على الوصول إلى أهم الموانئ والممرات التجارية الإقليمية والدولية.
                </p>
              </div>
              
              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded-lg p-5 cursor-pointer bg-gray-50">
                <div className="flex justify-between items-center font-bold text-primary mb-3">
                  <span>ما هي الخدمات والحلول اللوجستية التي توفرها الشركة؟</span>
                  <ChevronDown size={20} className="text-brand-red transform rotate-180" />
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mt-2">
                  نقدم حلولاً لوجستية وشحن متكاملة تشمل الشحن البحري للحاويات الكاملة والمجزأة، الشحن الجوي السريع عبر الخطوط العالمية ومطار صنعاء، النقل البري الداخلي لتوصيل البضائع من الموانئ إلى مخازنكم، بالإضافة إلى التخطيط التشغيلي وإدارة سلاسل الإمداد والتخزين.
                </p>
              </div>
              
              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:bg-gray-50">
                <div className="flex justify-between items-center font-bold text-primary mb-3">
                  <span>ما الذي يميز شركة هوت لاين عن شركات الشحن الأخرى؟</span>
                  <ChevronDown size={20} className="text-brand-red" />
                </div>
                <p className="text-gray-600 text-sm font-medium leading-relaxed mt-2">
                  نتميز بخبرة طويلة تمتد لأكثر من 15 عاماً (منذ تأسيس الشركة عام 2009)، وفريق عمل متخصص يتابع العمليات بشكل مستمر لتقديم سرعة استجابة فائقة، وشبكة تغطية إقليمية واسعة، والتزام تام بأعلى معايير الجودة والشفافية والموثوقية لضمان وصول شحناتكم بسلامة.
                </p>
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
