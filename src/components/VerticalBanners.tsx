/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgBanner1 from './faça_um_banner_202604271630.jpeg';
import imgBanner2 from './faça_uma_imagem_202604271643.jpeg';
import imgBanner3 from './Gemini_Generated_Image_h8f9jbh8f9jbh8f9.png';
import imgBanner4 from './Gemini_Generated_Image_jl3opjl3opjl3opj.png';

const smallBanners = [
  { id: 1, image: imgBanner1, title: 'Oferta Relâmpago' },
  { id: 2, image: imgBanner2, title: 'Nova Coleção Gazz' },
  { id: 3, image: imgBanner3, title: 'Coleção Premium' },
  { id: 4, image: imgBanner4, title: 'Preços Baixos' },
];

export default function VerticalBanners() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % smallBanners.length);
    }, 4000); // Pass one by one at medium speed
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % smallBanners.length);
  const prev = () => setIndex((prev) => (prev - 1 + smallBanners.length) % smallBanners.length);

  return (
    <div className="relative">
      <div className="relative h-[560px] w-full overflow-hidden rounded-3xl shadow-lg group">
        <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img 
                src={smallBanners[index].image} 
                alt={smallBanners[index].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-black uppercase tracking-widest text-white/70 mb-1">Exclusivo</p>
                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3">
                  {smallBanners[index].title}
                </h3>
                <button className="px-4 py-1.5 bg-white text-gazz-ink text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-gazz-ink hover:text-white transition-all shadow-lg active:scale-95">
                  Descobrir
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prev} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={next} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 right-8 flex gap-2">
            {smallBanners.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
              />
            ))}
          </div>
      </div>
    </div>
  );
}
