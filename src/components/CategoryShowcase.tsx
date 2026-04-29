/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const categories = [
  {
    title: "BÁSICOS PARA O DIA-A-DIA",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
    link: "#",
    tag: "Bolsas"
  },
  {
    title: "COMPANHEIROS DE VIAGEM",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=400&auto=format&fit=crop",
    link: "#",
    tag: "Malas"
  },
  {
    title: "ATELIÊ DE CHAPÉUS",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop",
    link: "#",
    tag: "Chapéus"
  }
];

export default function CategoryShowcase() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[750px] flex flex-col justify-end pb-12 overflow-hidden bg-white">
      <div className="container-wide w-full flex justify-end">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
           {categories.map((cat, idx) => (
             <motion.a
               key={idx}
               href={cat.link}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1, duration: 0.8 }}
               viewport={{ once: true }}
               className="group relative h-[140px] lg:h-[180px] w-full md:w-[220px] lg:w-[280px] overflow-hidden border border-[#7a3166]/20 bg-gray-50/60 backdrop-blur-sm cursor-pointer shadow-md transition-all hover:bg-gray-50/80"
             >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-110 transition-transform duration-1000 grayscale"
                />
                <div className="absolute bottom-3 left-3 z-10">
                   <h3 className="text-[10px] lg:text-xs font-bold uppercase leading-tight tracking-wider text-gazz-ink drop-shadow-sm">
                      {cat.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                   </h3>
                </div>
                {/* Decorative border accent */}
                <div className="absolute inset-1.5 border border-[#7a3166]/10 pointer-events-none"></div>
             </motion.a>
           ))}
         </div>
      </div>
      
      {/* Floating delivery badge positioned relative to the showcase area */}
      <div className="absolute bottom-4 right-12 hidden lg:flex items-center gap-2 text-gazz-ink/60 text-[8px] font-bold uppercase tracking-widest px-4 py-1">
        <span>ENTREGA RÁPIDA PARA SÃO PAULO</span>
      </div>
    </section>
  );
}
