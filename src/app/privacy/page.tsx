export const metadata = { title: "سياسة الخصوصية - هوت لاين" };

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen pt-24 bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">سياسة الخصوصية</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-right">
          <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. مقدمة</h2>
              <p>
                نحن في شركة هوت لاين الدولية للخدمات الملاحية نلتزم بحماية خصوصية بيانات عملائنا وزوار موقعنا الإلكتروني. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية البيانات التي تزودنا بها أثناء تصفح الموقع أو طلب الخدمات.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. المعلومات التي نجمعها</h2>
              <p>
                نقوم بجمع المعلومات التي تدخلها طواعية في نموذج الاتصال أو طلب التسعيرة، وتشمل:
              </p>
              <ul className="list-disc list-inside mr-4 space-y-2 mt-3">
                <li>• الاسم الكامل والبريد الإلكتروني ورقم الهاتف.</li>
                <li>• تفاصيل الشحنات والموانئ والخدمات اللوجستية المطلوبة.</li>
                <li>• البيانات الفنية التلقائية مثل عنوان IP ونوع المتصفح وملفات تعريف الارتباط لتحسين أداء الموقع.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. استخدام المعلومات</h2>
              <p>
                تُستخدم البيانات التي يتم جمعها للأغراض التالية:
              </p>
              <ul className="list-disc list-inside mr-4 space-y-2 mt-3">
                <li>• الرد على استفساراتك وتقديم تسعيرات مخصصة لشحناتك.</li>
                <li>• تقديم وتطوير الخدمات اللوجستية والملاحية التي تطلبها.</li>
                <li>• تحسين أداء الموقع الإلكتروني وتجربة المستخدم وتأمين العمليات.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. حماية البيانات وأمنها</h2>
              <p>
                نطبق معايير أمان فنية وإدارية صارمة لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نحن لا نقوم ببيع أو مشاركة بياناتك الشخصية مع أطراف خارجية لأغراض تجارية مطلقاً، وتتم مشاركة البيانات فقط مع الجهات الرسمية أو الملاحية اللازمة لإكمال إجراءات الشحن والنقل الخاصة بك.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. ملفات تعريف الارتباط (Cookies)</h2>
              <p>
                يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح وتوفير وظائف مخصصة. يمكنك التحكم في إعدادات ملفات تعريف الارتباط أو تعطيلها من خلال إعدادات متصفحك في أي وقت.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. التواصل معنا</h2>
              <p>
                إذا كان لديك أي استفسار حول سياسة الخصوصية هذه، يمكنك مراسلتنا مباشرة عبر البريد الإلكتروني:
                <span className="block font-mono font-bold text-brand-red mt-2">info@hotline-int.com</span>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
