"use client";

import { useState } from "react";
import { Search, MapPin, Anchor, LocateFixed, Plane, Radio, CheckCircle, Clock, Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Simulated Backend Database
const DUMMY_SHIPMENTS = {
  "HTL-1001": {
    lat: 14.8,
    lon: 42.9,
    zoom: 10,
    message: "تم العثور على الشحنة: متجهة إلى ميناء الحديدة",
    port: "ميناء الحديدة، اليمن"
  },
  "HTL-1002": {
    lat: 12.7,
    lon: 44.9,
    zoom: 10,
    message: "تم العثور على الشحنة: متجهة إلى ميناء عدن",
    port: "ميناء عدن، اليمن"
  },
  "HTL-1003": {
    lat: 25.0,
    lon: 55.0,
    zoom: 10,
    message: "تم العثور على الشحنة: متواجدة في ميناء جبل علي، دبي",
    port: "ميناء جبل علي، دبي"
  }
};

const DEFAULT_MAP = { lat: 14.5, lon: 43.5, zoom: 6 };

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  
  // App States
  const [mapState, setMapState] = useState(DEFAULT_MAP);
  const [notice, setNotice] = useState<{type: 'error' | 'success', message: string} | null>(null);
  const [activeShipment, setActiveShipment] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingNumber.trim().toUpperCase();
    
    if (!query) {
      setNotice({ type: 'error', message: "يرجى إدخال رقم بوليصة الشحن (B/L) أو الحاوية." });
      setActiveShipment(null);
      setMapState(DEFAULT_MAP);
      return;
    }
    
    setNotice(null);
    setIsSearching(true);
    setActiveShipment(null);

    // Simulate database lookup and map adjustment
    setTimeout(() => {
      setIsSearching(false);
      const shipment = DUMMY_SHIPMENTS[query as keyof typeof DUMMY_SHIPMENTS];
      
      if (shipment) {
        setNotice({ type: 'success', message: shipment.message });
        setMapState({ lat: shipment.lat, lon: shipment.lon, zoom: shipment.zoom });
        setActiveShipment(shipment);
      } else {
        setNotice({ type: 'error', message: "رقم البوليصة غير صالح أو قيد المعالجة. يرجى المحاولة لاحقاً." });
        setMapState(DEFAULT_MAP);
      }
    }, 1500);
  };

  return (
    <main className="flex flex-col min-h-screen pt-24 bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* Page Header */}
        <div className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2f4c] mb-6">تتبع الشحنات وحالة الملاحة</h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            منظومة رقمية متكاملة تتيح لك تتبع مسار بضائعك من نقطة المصدر، ومراقبة حركة الملاحة البحرية بشكل مباشر وحي.
          </p>
        </div>

        {/* Section 1: The B/L Search Engine */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 relative">
            <form onSubmit={handleSearch} className="space-y-6 relative z-10">
              <label htmlFor="trackingNumber" className="block text-center font-bold text-[#1a2f4c] text-2xl md:text-3xl mb-8">
                أداة تتبع بوليصة الشحن
              </label>
              
              <div className="relative">
                <input 
                  type="text" 
                  id="trackingNumber"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="أدخل رقم بوليصة الشحن (B/L)..."
                  className={`w-full text-center text-xl md:text-2xl font-mono p-5 md:p-6 border-2 rounded-2xl focus:outline-none transition-colors uppercase shadow-sm ${
                    notice?.type === 'error' ? 'border-red-400 focus:border-red-600 bg-red-50' : 
                    notice?.type === 'success' ? 'border-emerald-400 focus:border-emerald-600 bg-emerald-50' :
                    'border-gray-200 focus:border-[#cc0000] bg-white'
                  }`}
                  dir="ltr"
                />
                
                {/* Notice Messages */}
                <AnimatePresence mode="wait">
                  {notice && (
                    <motion.p 
                      key={notice.message}
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0 }} 
                      className={`text-sm font-bold text-center mt-3 ${notice.type === 'error' ? 'text-red-600' : 'text-emerald-700'}`}
                    >
                      {notice.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              
              <button 
                type="submit" 
                disabled={isSearching}
                className="w-full max-w-sm mx-auto bg-[#cc0000] hover:bg-red-800 text-white font-bold text-xl md:text-2xl py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(204,0,0,0.3)] flex justify-center items-center gap-3 disabled:opacity-75 disabled:cursor-wait"
              >
                {isSearching ? (
                  <span className="flex items-center gap-3 animate-pulse">
                    <LocateFixed size={28} className="animate-spin" /> جاري البحث والمطابقة...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <Search size={28} /> بــحــث
                  </span>
                )}
              </button>

              <div className="text-center mt-6">
                <p className="text-gray-500 font-bold text-sm">
                  أرقام تجريبية للأنظمة: 
                  <span className="font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded-md border border-gray-200 mx-1 cursor-pointer hover:bg-gray-200" onClick={() => setTrackingNumber('HTL-1001')}>HTL-1001</span>
                  <span className="font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded-md border border-gray-200 mx-1 cursor-pointer hover:bg-gray-200" onClick={() => setTrackingNumber('HTL-1002')}>HTL-1002</span>
                  <span className="font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded-md border border-gray-200 mx-1 cursor-pointer hover:bg-gray-200" onClick={() => setTrackingNumber('HTL-1003')}>HTL-1003</span>
                </p>
              </div>
            </form>
          </div>

          {/* Conditional Tracking Simulation Dashboard */}
          <AnimatePresence>
            {activeShipment && !isSearching && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="max-w-4xl mx-auto w-full mt-8"
              >
                <div className="bg-white rounded-t-3xl border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                   <div>
                     <p className="text-gray-500 font-bold mb-1">رقم البوليصة المعتمد</p>
                     <p className="text-3xl font-mono font-black text-[#1a2f4c] tracking-wider" dir="ltr">{trackingNumber.toUpperCase()}</p>
                   </div>
                   <div className="text-center md:text-left flex flex-col items-center md:items-end">
                     <span className="bg-emerald-100 text-emerald-800 font-bold px-5 py-2 rounded-full mb-3 flex items-center gap-2 border border-emerald-200">
                       <CheckCircle size={18} /> متاح على الخريطة الملاحية أدناه
                     </span>
                   </div>
                </div>

                <div className="bg-gray-50 border-x border-b border-gray-100 px-8 py-10 rounded-b-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                   <div className="flex flex-col items-center md:items-start text-center md:text-right relative z-10 w-full md:w-auto">
                     <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">الميناء المصدر</p>
                     <p className="text-xl font-bold text-[#1a2f4c] flex items-center justify-center md:justify-start gap-2"><MapPin size={18} className="text-gray-400"/> جوانزو، الصين</p>
                   </div>

                   <div className="w-full relative flex items-center justify-center py-4">
                      <div className="absolute w-full h-1 bg-gray-300 top-1/2 left-0 -translate-y-1/2 rounded-full"></div>
                      <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute h-1.5 bg-[#cc0000] rounded-full top-1/2 right-0 -translate-y-1/2 z-10" />
                      <motion.div initial={{ left: "100%" }} animate={{ left: "20%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute z-20 top-1/2 -translate-y-1/2">
                        <Plane size={24} className="text-[#cc0000] bg-gray-50 p-1 -rotate-90 flip-x" />
                      </motion.div>
                   </div>

                   <div className="flex flex-col items-center md:items-end text-center md:text-left relative z-10 w-full md:w-auto">
                     <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">النقطة الجغرافية الحالية</p>
                     <p className="text-xl font-bold text-[#1a2f4c] flex items-center justify-center md:justify-end gap-2">{activeShipment.port} <Anchor size={18} className="text-[#cc0000] animate-bounce"/></p>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Section 2: The Live AIS Map */}
        <section className="mb-12 scroll-mt-24" id="map-section">
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <div className="flex items-center justify-center gap-3">
              <h2 className="text-3xl font-extrabold text-[#1a2f4c]">حركة الملاحة العالمية المباشرة</h2>
              <span className="flex items-center gap-1 bg-red-100 text-[#cc0000] text-xs font-bold px-3 py-1 rounded-full border border-red-200 animate-pulse">
                <Radio size={14} /> LIVE
              </span>
            </div>
            {activeShipment ? (
              <p className="text-emerald-600 font-bold tracking-wide">الخريطة متمركزة حالياً على النطاق الجغرافي لشحنتك</p>
            ) : (
              <p className="text-gray-500 font-medium">نظام التتبع بالأقمار الصناعية (AIS) لمراقبة السفن التجارية.</p>
            )}
          </div>

          <motion.div 
            layout
            className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-2 border-2 border-gray-100 overflow-hidden relative transition-all duration-700"
            animate={{ borderColor: activeShipment ? '#cc0000' : '#f3f4f6' }}
          >
            {/* Dynamic Iframe Keying causes reload, but its necessary for external URL change */}
            <iframe 
              key={`${mapState.lat}-${mapState.lon}`}
              name="vesselfinder" 
              id="vesselfinder" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              src={`https://www.vesselfinder.com/aismap?zoom=${mapState.zoom}&lat=${mapState.lat}&lon=${mapState.lon}&width=100%25&height=600&names=false&mmsi=0&track=true&fleet=false&fleet_name=false&fleet_hide_old_positions=false&clicktoact=false&argos=false&flush=true&backgroundcolor=transparent&text=000000&text_background=ffffff`}
              className="rounded-xl transition-opacity duration-1000"
            ></iframe>
            
            {isSearching && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-xl">
                 <LocateFixed size={48} className="text-[#cc0000] animate-spin opacity-80" />
              </div>
            )}
          </motion.div>
        </section>

      </div>
    </main>
  );
}
