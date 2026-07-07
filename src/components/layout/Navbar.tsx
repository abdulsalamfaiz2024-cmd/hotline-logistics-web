"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, Globe, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "خدماتنا", path: "/services" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-xl border-b border-gray-100/50" : "bg-white/70 backdrop-blur-md"
      )}>
        {/* Top Bar - Classic Corporate */}
        <div className="hidden border-b border-gray-200/50 bg-primary py-2 md:block text-white">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 text-xs font-semibold lg:px-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-red" />
                <div className="flex gap-2 font-mono tracking-wider">
                  <span dir="ltr">+967 780 000 088</span>
                  <span className="hidden lg:inline text-gray-400">|</span>
                  <span dir="ltr" className="hidden lg:inline">+967 770 000 028</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-red" />
                <span className="font-mono">contact@hotline-int-ye.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="transition-colors hover:text-brand-red"><Globe size={16} /></Link>
              <Link href="#" className="transition-colors hover:text-brand-red"><MessageCircle size={16} /></Link>
            </div>
          </div>
        </div>

        {/* Main Interface Navbar */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-8 relative">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center relative z-10">
            <img src="/images/logo_with_text.png?v=2" alt="Hotline International" className="h-12 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Nodes */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="relative group px-1 py-2">
                <span className={cn(
                  "text-sm font-bold transition-colors lg:text-base",
                  pathname === link.path ? "text-brand-red" : "text-primary group-hover:text-brand-red"
                )}>
                  {link.name}
                </span>
                {/* Active Indicator Line */}
                {pathname === link.path && (
                  <motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-red rounded-t-md" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex relative z-10">
            <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-brand-red px-6 py-2.5 font-bold text-white transition-all hover:bg-red-700 shadow-md">
               <span className="relative z-10">تواصل معنا</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="text-primary md:hidden relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Routing Node */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 flex flex-col bg-white/95 backdrop-blur-xl md:hidden pt-[110px] px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                 <Link 
                   key={link.name}
                   onClick={() => setMobileMenuOpen(false)} 
                   href={link.path} 
                   className={cn(
                     "py-4 text-xl font-bold border-b border-gray-100/50",
                     pathname === link.path ? "text-brand-red" : "text-primary"
                   )}
                 >
                   {link.name}
                 </Link>
              ))}
              <div className="mt-8">
                 <Link onClick={() => setMobileMenuOpen(false)} href="/contact" className="flex w-full items-center justify-center rounded-md bg-brand-red py-4 font-bold text-white shadow-lg text-lg">
                   تواصل معنا
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
