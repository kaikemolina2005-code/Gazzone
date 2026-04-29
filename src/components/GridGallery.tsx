/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function GridGallery() {
  return (
    <section className="py-12 border-t border-gray-100/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 auto-rows-[240px]">
          {/* Malas */}
          <div className="lg:col-span-5 bg-[#F5F2ED] relative overflow-hidden group cursor-pointer p-8">
            <h3 className="text-3xl font-bold uppercase tracking-tight relative z-10">Malas</h3>
            <img 
              src="https://images.unsplash.com/photo-1544816153-12ad5d7132a1?q=80&w=600&auto=format&fit=crop" 
              alt="Malas" 
              className="absolute right-0 bottom-0 w-[240px] h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Coleção Premium */}
          <div className="lg:col-span-4 bg-[#141414] relative overflow-hidden group cursor-pointer p-8 text-white">
            <h3 className="text-3xl font-bold uppercase tracking-tight leading-tight relative z-10">
              COLEÇÃO PREMIUM<br />DE MALAS
            </h3>
            <img 
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop" 
              alt="Premium" 
              className="absolute right-0 bottom-0 w-[200px] h-[150px] object-cover grayscale brightness-75 opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Atelie again */}
          <div className="lg:col-span-3 bg-[#F5F2ED] relative overflow-hidden group cursor-pointer p-8">
            <h3 className="text-3xl font-bold uppercase tracking-tight leading-tight relative z-10">
              ATELIÊ DE<br />CHAPÉUS
            </h3>
            <div className="absolute right-[-40px] bottom-[-40px] flex gap-2">
               <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=200&auto=format&fit=crop" className="w-32 h-32 rounded-full object-cover grayscale brightness-90 shadow-2xl" />
               <img src="https://images.unsplash.com/photo-1596455607563-ad619bae2d9c?q=80&w=200&auto=format&fit=crop" className="w-32 h-32 rounded-full object-cover grayscale brightness-90 shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
