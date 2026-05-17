"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/967783948888" // Example mapping based on phone number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_0_rgba(37,211,102,0.5)] transition-shadow hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] md:bottom-8 md:left-8"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      {/* Optional Ping Effect */}
      <span className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
    </motion.a>
  );
}
