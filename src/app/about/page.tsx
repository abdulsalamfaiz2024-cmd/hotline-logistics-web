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
            نحن "هوت لاين إنترناشيونال"، شركة وطنية ودولية تسعى لسد ثغرات التجارة وسلاسل الإمداد في منطقة معقدة وديناميكية. تأسست الشركة لتقديم وعود ملاحية صادقة، وأفعال لوجستية قياسية، واضعين نصب أعيننا تعافي الاقتصاد وازدهاره.
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
                أن نكون الشريان الأبرز لربط اليمن بالاقتصاد العالمي، وأن نُمكّن التجار وأصحاب المصانع من تحقيق أهدافهم بأقل تكلفة، دون أن تكون المخاطر الملاحية عائقاً أمام أعمالهم، مستبقين التحديات برؤية تقنية ولوجستية مبدعة.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-2xl shadow-xl border-t-4 border-brand-red">
              <h2 className="text-3xl font-bold text-primary mb-6">مهمتنا</h2>
              <p className="text-gray-600 leading-relaxed font-medium text-lg">
                تقديم خدمات النقل البحري والبري والتخليص الجمركي بموثوقية تامة وكفاءة زمانية ومكانية مطلقة. نلتزم بناء جسور من الشفافية والتواصل المباشر مع عُملائنا، وتبسيط الإجراءات إلى أقصى حد لنجاح كافة الأطراف.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-16">قيمنا المؤسسية</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">1</div>
               <h3 className="text-xl font-bold text-primary mb-3">الالتزام (Commitment)</h3>
               <p className="text-sm font-medium text-gray-500">الوفاء بوعود الوصول والأسعار مهما قست الظروف المحيطة.</p>
             </div>
             
             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">2</div>
               <h3 className="text-xl font-bold text-primary mb-3">الشفافية (Transparency)</h3>
               <p className="text-sm font-medium text-gray-500">إطلاع العميل على كافة الحقائق والعقبات الجمركية بشكل فوري ومباشر.</p>
             </div>

             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">3</div>
               <h3 className="text-xl font-bold text-primary mb-3">الابتكار (Innovation)</h3>
               <p className="text-sm font-medium text-gray-500">تطوير حلول جديدة لتفادي التأخيرات وتقليل نفقات الأرضيات المكلفة.</p>
             </div>

             <div className="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">4</div>
               <h3 className="text-xl font-bold text-primary mb-3">السرعة (Agility)</h3>
               <p className="text-sm font-medium text-gray-500">سرعة الاستجابة واتخاذ القرارات البديلة عند انسداد الطرق أو الأرصفة.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
