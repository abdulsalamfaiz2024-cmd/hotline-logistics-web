"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ship, Anchor, Globe, Package } from "lucide-react";

export default function LoadingScreen() {
  const [currentFact, setCurrentFact] = useState(0);

  const facts = [
    "هل تعلم؟ أكثر من 90% من التجارة العالمية تعتمد على الشحن البحري.",
    "في أي لحظة زمنية، يوجد حوالي 20 مليون حاوية شحن في عرض البحر.",
    "سفن الحاويات العملاقة قادرة على حمل أكثر من 20,000 حاوية في رحلة واحدة.",
    "نلتزم بتقديم أفضل الخدمات الملاحية واللوجستية بأعلى معايير الأمان.",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 2500); // Change fact every 2.5 seconds
    return () => clearInterval(timer);
  }, [facts.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
    >
      <div className="flex w-full max-w-2xl flex-col items-center px-4 text-center">
        
        {/* Animated Icons Group */}
        <div className="mb-10 flex items-center justify-center gap-6 text-brand-blue">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Anchor size={40} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            animate={{ x: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="text-white bg-brand-red/10 rounded-full p-4"
          >
            <Ship size={56} strokeWidth={1.5} className="text-brand-red" />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <Globe size={40} strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Fading in Logo Text */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-3xl font-extrabold tracking-wide text-white md:text-5xl"
        >
          هوت لاين للخدمات الملاحية
        </motion.h1>

        {/* Small animated loader bar beneath */}
        <div className="mb-12 h-1.5 w-64 overflow-hidden rounded-full border border-brand-red/20 bg-primary/50 shadow-inner">
          <motion.div
            className="h-full bg-brand-red"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>

        {/* Dynamic Shipping Facts */}
        <div className="h-20 min-h-[5rem] w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFact}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-medium leading-relaxed text-gray-300 md:text-xl"
            >
              {facts[currentFact]}
            </motion.p>
          </AnimatePresence>
        </div>
        
      </div>
    </motion.div>
  );
}
