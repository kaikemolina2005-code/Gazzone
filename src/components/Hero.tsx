/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    image: '/src/components/banner principal gazzone.png',
    title: 'GAZZ',
    subtitle: 'A bolsa certa que combina com você.',
    position: 'center'
  },
  {
    image: '/src/components/Gemini_Generated_Image_8c8tnc8c8tnc8c8t.png',
    title: 'ATACADO GAZZ',
    subtitle: 'Aproveite as ofertas exclusivas para revenda.',
    position: 'center'
  },
  {
    image: '/src/components/Gemini_Generated_Image_89gk6o89gk6o89gk.png',
    title: 'COLEÇÃO GAZZ',
    subtitle: 'A bolsa certa é a que combina com você.',
    position: 'center'
  },
  {
    image: '/src/components/Gemini_Generated_Image_5v4a3w5v4a3w5v4a.png',
    title: 'LINHA INFANTIL',
    subtitle: 'Coleção aventura e imaginação.',
    position: 'center'
  },
  {
    image: '/src/components/banner novo.png',
    title: 'LINHA ACADÊMICA',
    subtitle: 'Acompanhe sua jornada com estilo e foco.',
    position: 'center'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prev = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <section className="relative bg-[#e5e1db]">
      {/* Immersive Main Banner */}
      <div className="relative w-full h-[500px] lg:h-[700px] group">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover overflow-hidden transition-transform duration-[6000ms] ease-linear group-hover:scale-110"
            style={{ 
              backgroundImage: `url('${banners[current].image}')`,
              backgroundPosition: banners[current].position
            }}
          />
        </AnimatePresence>
        
        {/* Vignette/Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>

        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
          <button 
            onClick={prev}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>


        {/* Free Shipping Badge */}
        <div className="absolute top-10 right-0 z-30">
          <div className="bg-black/60 backdrop-blur-md px-6 py-3 flex items-center gap-3 text-white">
            <div className="p-1 bg-[#7a3166] rounded-sm">
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="text-[10px] lg:text-xs font-bold tracking-widest uppercase">Free Shipping to São Paulo</span>
          </div>
        </div>

        {/* Bottom Sub-Banners - Smaller and pinned to bottom right, overlapping the divider */}
        <div className="absolute bottom-0 right-4 lg:right-12 z-40 translate-y-1/2 pointer-events-none">
          <div className="flex flex-row flex-wrap justify-end gap-3 pointer-events-auto">
            {/* Banner 1 */}
            <div className="relative w-[120px] lg:w-[220px] h-[80px] lg:h-[140px] overflow-hidden group cursor-pointer border border-[#7a3166]/20 bg-white/80 backdrop-blur-sm transition-all hover:bg-white/100">
              <img 
                src="/src/components/categoria bolsas.jpeg" 
                alt="Bolsa Feminina" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
                <h3 className="text-[10px] lg:text-sm font-black uppercase leading-[0.9] tracking-tighter text-gazz-ink">BOLSA<br />FEMININA</h3>
              </div>
            </div>

            {/* Banner 2 */}
            <div className="relative w-[120px] lg:w-[220px] h-[80px] lg:h-[140px] overflow-hidden group cursor-pointer border border-[#7a3166]/20 bg-white/80 backdrop-blur-sm transition-all hover:bg-white/100">
              <img 
                src="/src/components/faça_essa_mesma_202604271443.jpeg" 
                alt="Chapéus Gazzone" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
                <h3 className="text-[10px] lg:text-sm font-black uppercase leading-[0.9] tracking-tighter text-gazz-ink">CHAPÉUS<br />GAZZONE</h3>
              </div>
            </div>

            {/* Banner 3 */}
            <div className="relative w-[120px] lg:w-[220px] h-[80px] lg:h-[140px] overflow-hidden group cursor-pointer border border-[#7a3166]/20 bg-white/80 backdrop-blur-sm transition-all hover:bg-white/100">
              <img 
                src="/src/components/faça_uma_imagem_202604271446.jpeg" 
                alt="Mochilas Gazzone" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
                <h3 className="text-[10px] lg:text-sm font-black uppercase leading-[0.9] tracking-tighter text-gazz-ink">MOCHILAS<br />GAZZONE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
