"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck, Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a111a] text-white pt-24 pb-8 border-t border-gray-800">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Column 1: System Identity */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex bg-white p-3 rounded-xl border border-white/10 self-start shadow-sm">
              <img src="/images/logo_with_text.png?v=2" alt="Hotline International" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              نظام لوجستي ذكي ومقاوم للأزمات يضمن لك عبور بضائعك نحو موانئ اليمن بسلامة مطلقة وبيانات لحظية.
            </p>
            <div className="flex items-center gap-3 mt-2">
               <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                 <Activity size={12} className="animate-pulse" /> Platform Active
               </span>
               <span className="flex items-center gap-1 text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full border border-brand-blue/20">
                 <ShieldCheck size={12} /> SECURED
               </span>
            </div>
          </div>

          {/* Column 2: Dashboard Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">الوحدات المركزية</h3>
            <Link href="/" className="text-gray-400 font-medium hover:text-brand-red transition-colors hover:translate-x-[-4px] transform inline-block">الرئيسية</Link>
            <Link href="/about" className="text-gray-400 font-medium hover:text-brand-red transition-colors hover:translate-x-[-4px] transform inline-block">من نحن</Link>
            <Link href="/services" className="text-gray-400 font-medium hover:text-brand-red transition-colors hover:translate-x-[-4px] transform inline-block">حلولنا اللوجستية</Link>
          </div>

          {/* Column 3: Branches */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-2">فروعنا ومكاتبنا</h3>
            <ul className="flex flex-col gap-3 font-medium text-gray-400">
              <li className="flex items-center gap-2 before:content-[''] before:block before:w-1.5 before:h-1.5 before:bg-brand-red before:rounded-full">الإدارة العامة صنعاء: صنعاء - شارع الخمسين - خلف سما مول - مبنى زُبيدة كافي - الدور الخامس</li>
            </ul>
          </div>

          {/* Column 4: Secure Comm Protocol */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">بروتوكول التواصل</h3>
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-400">
              <div className="flex items-start gap-3 group">
                <MapPin className="text-brand-blue group-hover:text-brand-red transition-colors" size={20} />
                <span>صنعاء - شارع الخمسين - خلف سما مول<br/>مبنى زُبيدة كافي - الدور الخامس</span>
              </div>
              <div className="flex items-start gap-3 group">
                <Phone className="text-brand-blue group-hover:text-brand-red transition-colors mt-1" size={20} />
                <div className="flex flex-col gap-1">
                  <span dir="ltr" className="font-mono tracking-widest">+967 780 000 088</span>
                  <span dir="ltr" className="font-mono tracking-widest">+967 770 000 028</span>
                  <span dir="ltr" className="font-mono tracking-widest">+967 783948888</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="text-brand-blue group-hover:text-brand-red transition-colors" size={20} />
                <span className="font-mono">contact@hotline-int-ye.com</span>
              </div>
            </div>
            <Link href="/contact" className="mt-2 w-full text-center bg-gray-800 hover:bg-brand-red hover:text-white transition-colors text-white py-3 rounded-lg font-bold border border-gray-700">
              تواصل معنا
            </Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Hotline International Logistics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-red transition-colors">سياسة الخصوصية</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="hover:text-brand-red transition-colors">شروط الخدمة</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
