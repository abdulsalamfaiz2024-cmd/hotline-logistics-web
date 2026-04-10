import Link from "next/link";
import { Anchor, ClipboardCheck, Truck, Users, Activity, Zap, ShieldCheck, TrendingDown, ArrowLeft, Package, Plane } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      {/* A. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/shipping.jpeg')" }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/90 via-primary/70 to-black/80" />

        <div className="relative z-10 text-center max-w-5xl px-4 mt-8 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl mb-8">
            لا تدع المسافات تحدد حجم تجارتك.. <span className="text-brand-red">نحن نهندس وصولها.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium">
            شريكك اللوجستي الموثوق لنقل البضائع إلى كافة الموانئ اليمنية، بخبرة تمتد لعقود في إدارة الأزمات وسلاسل الإمداد.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/tracking" 
              className="bg-brand-red hover:bg-red-800 text-white px-10 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-xl w-full sm:w-auto"
            >
              تتبع شحنتك
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-xl w-full sm:w-auto"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

      {/* B. Quick About Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">من نحن</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
                إرث ملاحي يعبر المحيطات، ورؤية مستقبلية تتخطى الحدود.
              </h3>
              <div className="w-20 h-1 bg-brand-red rounded-full mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                في "هوت لاين إنترناشيونال"، نؤمن بأن التجارة العالمية هي الشريان الذي يغذي نمو الأمم. لقد بنينا إرثنا على مدى عقود من الالتزام القاطع بتأمين خطوط الشحن إلى اليمن بأعلى معايير السلامة والكفاءة، حتى في أصعب الظروف الإقليمية. أدواتنا هي الخبرة العميقة، شبكاتنا القوية، وفريقنا المتفاني.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:text-brand-red font-bold text-lg transition-colors group">
                اقرأ المزيد عن قصتنا <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform rotate-3 -z-10" />
              <img src="/images/glopal.png" alt="Company Legacy" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* C. Services Preview (The Grid) */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">أبرز خدماتنا الملاحية</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-8" />
            <p className="mt-6 text-gray-500 font-medium text-xl max-w-2xl mx-auto">
              حلول متكاملة تغطي كافة مراحل السلسلة اللوجستية بدقة متناهية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "الشحن البحري", image: "/images/Freight.jpeg", icon: <Anchor size={24} />, desc: "توفير حلول الشحن للحاويات الكاملة والمجزأة بأسعار تنافسية مع أكبر الخطوط الملاحية." },
              { title: "الشحن الجوي", image: "/images/air_freight.png", icon: <Plane size={24} />, desc: "خدمات شحن جوي عالمية سريعة وموثوقة لضمان وصول بضائعك العاجلة بأمان." },
              { title: "التخليص الجمركي", image: "/images/port.png", icon: <ClipboardCheck size={24} />, desc: "تخليص سريع وآمن في موانئ اليمن عبر فريقنا الميداني المتمرس بقوانين الجمارك." },
              { title: "النقل البري", image: "/images/road_freight.jpg", icon: <Truck size={24} />, desc: "نقل الحاويات من الموانئ إلى المستودعات بأعلى معايير السلامة وفي الوقت المحدد." },
              { title: "الاستشارات اللوجستية", image: "/images/service-5.jpg", icon: <Users size={24} />, desc: "تقديم دراسات جدوى وتحليلات تسعيرية لاختيار أفضل المسارات المتاحة لبضائعك." },
              { title: "خدمات التخزين", image: "/images/warehouse_solutions.jpg", icon: <Package size={24} />, desc: "توفير مساحات تخزينية آمنة ومجهزة بأعلى معايير السلامة لحفظ بضائعك قبل وبعد الشحن." }
            ].map((service, i) => (
              <div key={i} className="bg-white overflow-hidden rounded-2xl shadow-lg border border-gray-100 flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur p-3 rounded-lg shadow-md text-brand-red">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow items-start">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 font-medium mb-8 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <Link href="/services" className="text-brand-red font-bold px-6 py-2 rounded border border-brand-red hover:bg-brand-red hover:text-white transition-colors w-full text-center mt-auto">
                    المزيد...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. Why Choose Us */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">لماذا تختار "هوت لاين"؟</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <Zap size={48} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4">السرعة الفائقة</h3>
              <p className="text-gray-300 font-medium leading-relaxed">إدارة أزمات لوجستية محكمة تضمن عدم تأخر البضائع ووصولها في الوقت المخطط له عبر مسارات بديلة عند الحاجة.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <ShieldCheck size={48} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4">الأمان الموثوق</h3>
              <p className="text-gray-300 font-medium leading-relaxed">توفير تأمين شامل على البضائع ومراقبة مستمرة منذ لحظة إبحار الحاوية وحتى وصولها إلى باب مستودعك لتفادي فقدانها.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <TrendingDown size={48} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4">الأسعار التنافسية</h3>
              <p className="text-gray-300 font-medium leading-relaxed">علاقاتنا الاستراتيجية مع الخطوط الملاحية العالمية تسمح لنا بتقديم أفضل الأسعار مع خفض رسوم الأرضيات الجمركية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* E. Call to Action Banner */}
      <section className="py-20 bg-brand-red text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">ابدأ شحن بضائعك معنا اليوم</h2>
          <p className="text-xl text-red-100 mb-10 font-medium font-sans">
            فريق خبرائنا جاهز فوراً للرد على استفساراتك وتقديم تسعيرة شاملة مبنية على الدقة والكفاءة.
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand-red px-12 py-4 rounded-md font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl">
            تواصل معنا لتسعير شحنتك
          </Link>
        </div>
      </section>
    </main>
  );
}
