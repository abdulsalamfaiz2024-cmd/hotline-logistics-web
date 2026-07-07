import Link from "next/link";
import Image from "next/image";
import { Anchor, Truck, Users, Zap, ShieldCheck, ArrowLeft, Package, Plane, Globe, CheckCircle, Headphones } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-white">
      {/* A. Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/shipping.jpeg" 
            alt="Hotline International Shipping" 
            fill 
            priority
            className="object-cover object-center"
          />
        </div>
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
              href="/contact" 
              className="bg-brand-red hover:bg-red-800 text-white px-10 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-xl w-full sm:w-auto"
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
                شريككم اللوجستي الموثوق منذ 2009
              </h3>
              <div className="w-20 h-1 bg-brand-red rounded-full mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                هوت لاين الدولية للخدمات الملاحية شركة متخصصة في تقديم حلول الشحن والنقل والخدمات اللوجستية المتكاملة على المستويين الإقليمي والدولي. نعمل على ربط الأسواق والموانئ والموردين من خلال منظومة تشغيلية احترافية تضمن سهولة الحركة التجارية وسرعة الإنجاز.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary hover:text-brand-red font-bold text-lg transition-colors group">
                اقرأ المزيد عن قصتنا <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform rotate-3 -z-10" />
              <Image 
                src="/images/glopal.png" 
                alt="Company Legacy" 
                width={600} 
                height={400} 
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" 
              />
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
              { title: "خدمات الاستيراد والتصدير", image: "/images/Freight.jpeg", icon: <Anchor size={24} />, desc: "نوفر حلول شحن بحري متكاملة تشمل الحاويات الكاملة والمجزئة مع متابعة دقيقة لجميع مراحل الشحن ابتداءً من نقطة الانطلاق وحتى التسليم النهائي." },
              { title: "خدمة الشحن الجوي", image: "/images/air_freight.png", icon: <Plane size={24} />, desc: "نقدم خدمات الشحن الجوي السريع التي تضمن وصول البضائع بأقصى سرعة ممكنة، ونساعد عملاءنا على التعامل مع الشحنات الحساسة والعاجلة بكفاءة عالية." },
              { title: "الخدمات اللوجيستية", image: "/images/service-5.jpg", icon: <Globe size={24} />, desc: "نقدم حلولاً لوجستية متكاملة تشمل التخطيط التشغيلي، إدارة سلاسل الإمداد، التنسيق بين الجهات المختلفة، متابعة الشحنات، وإدارة عمليات التسليم." },
              { title: "خدمات الشحن البري", image: "/images/road_freight.jpg", icon: <Truck size={24} />, desc: "تمتلك الشركة شبكة نقل بري فعالة تربط الموانئ والمنافذ والمخازن والأسواق التجارية، وتضمن نقل البضائع بأمان وكفاءة مع الالتزام بالجداول الزمنية." },
              { title: "خدمات الشحن الجزئي", image: "/images/warehouse_solutions.jpg", icon: <Package size={24} />, desc: "شحن الطرود والبضائع من دولة الصين وإيصالها إليكم." },
              { title: "خدمات نقل الموانئ", image: "/images/port.png", icon: <Users size={24} />, desc: "شحن ونقل البضائع عبر ميناء جيبوتي إلى ميناء الصليف، ومن ميناء الحديدة إلى أي مكان في الجمهورية اليمنية." }
            ].map((service, i) => (
              <div key={i} className="bg-white overflow-hidden rounded-2xl shadow-lg border border-gray-100 flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <Zap size={40} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3">خبرة طويلة</h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm">أكثر من خمسة عشر عاماً من العمل المستمر في قطاع الشحن والخدمات اللوجستية.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <ShieldCheck size={40} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3">سرعة الاستجابة</h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm">فريق متخصص يتابع العمليات بشكل مستمر ويقدم حلولاً سريعة وفعالة.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <Globe size={40} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3">شبكة إقليمية واسعة</h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm">تغطية تشغيلية تشمل اليمن والسعودية والإمارات وعمان وجيبوتي والممرات التجارية الرئيسية.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <CheckCircle size={40} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3">موثوقية عالية</h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm">نلتزم بأعلى معايير الجودة والدقة والشفافية في جميع مراحل العمل.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-6 rounded-full mb-6 relative group border border-white/5">
                <Headphones size={40} className="text-brand-red group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold mb-3">خدمة عملاء احترافية</h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm">نؤمن بأن نجاحنا يبدأ من رضا عملائنا، لذلك نحرص على تقديم تجربة متميزة في كل خطوة.</p>
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
