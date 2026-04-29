/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import imgPraia from './imagem praia.png';
import imgPesca from './imagem pesca.png';

export default function SecondaryBanner({ onBeachHatsClick, onFishingClick }: { onBeachHatsClick?: () => void, onFishingClick?: () => void }) {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Banner 1: Opens to the left */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={onBeachHatsClick}
            className="relative overflow-hidden rounded-[2rem] shadow-xl group aspect-[16/9] md:aspect-auto cursor-pointer"
          >
            <img 
              src={imgPraia} 
              alt="Coleção Praia" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 text-white z-10">
              <span className="bg-orange-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Verão</span>
            </div>
          </motion.div>

          {/* Banner 2: Opens to the right */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={onFishingClick}
            className="relative overflow-hidden rounded-[2rem] shadow-xl group aspect-[16/9] md:aspect-auto cursor-pointer"
          >
            <img 
              src={imgPesca} 
              alt="Equipamentos de Pesca" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 right-6 text-white z-10 text-right">
              <span className="bg-gazz-ink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Pesca Esportiva</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
