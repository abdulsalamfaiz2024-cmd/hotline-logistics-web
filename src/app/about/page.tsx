export const metadata = { title: "من نحن - هوت لاين" };

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 bg-white">
      {/* Intro */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-primary text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/hero_cargo_ship.png')] bg-cover opacity-10 blur-sm pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-right">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">من نحن</h1>
          <div className="w-24 h-1 bg-brand-red mx-auto lg:mx-0 rounded-full mb-8" />
          <p className="text-xl text-gray-300 font-medium leading-relaxed max-w-3xl">
            هوت لاين الدولية للخدمات الملاحية شركة متخصصة في تقديم حلول الشحن والنقل والخدمات اللوجستية المتكاملة على المستويين الإقليمي والدولي. نعمل على ربط الأسواق والموانئ والموردين والعملاء من خلال منظومة تشغيلية احترافية تضمن سهولة الحركة التجارية وسرعة الإنجاز وتقليل التحديات التشغيلية التي تواجه العملاء. لقد مكنتنا خبرتنا الطويلة من خدمة العديد من القطاعات التجارية والصناعية، وتقديم حلول مرنة تتناسب مع مختلف أنواع الشحنات والبضائع مهما كانت طبيعتها أو وجهتها.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-light-bg border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-2xl shadow-xl border-t-4 border-primary">
              <h2 className="text-3xl font-bold text-primary mb-6">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                أن نكون الخيار الأول في قطاع الخدمات الملاحية واللوجستية في المنطقة، وأن نُعرف كشريك استراتيجي موثوق يقدم قيمة حقيقية لعملائه من خلال حلول مبتكرة وخدمات عالية الجودة.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-xl border-t-4 border-brand-red">
              <h2 className="text-3xl font-bold text-primary mb-6">رسالتنا</h2>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                توفير خدمات شحن ولوجستيات متكاملة تجمع بين السرعة والكفاءة والموثوقية، مع التركيز على بناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والالتزام والشفافية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-16">لماذا تختار هوت لاين؟</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">1</div>
               <h3 className="text-xl font-bold text-primary mb-3">خبرة طويلة</h3>
               <p className="text-sm font-medium text-gray-500">أكثر من 15 عاماً من العمل المستمر في قطاع الشحن والخدمات اللوجستية.</p>
             </div>
             
             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">2</div>
               <h3 className="text-xl font-bold text-primary mb-3">سرعة الاستجابة</h3>
               <p className="text-sm font-medium text-gray-500">فريق متخصص يتابع العمليات بشكل مستمر ويقدم حلولاً سريعة وفعالة.</p>
             </div>

             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">3</div>
               <h3 className="text-xl font-bold text-primary mb-3">شبكة واسعة</h3>
               <p className="text-sm font-medium text-gray-500">تغطية تشغيلية تشمل اليمن والسعودية والإمارات وعمان وجيبوتي.</p>
             </div>

             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">4</div>
               <h3 className="text-xl font-bold text-primary mb-3">موثوقية عالية</h3>
               <p className="text-sm font-medium text-gray-500">نلتزم بأعلى معايير الجودة والدقة والشفافية في جميع مراحل العمل.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
