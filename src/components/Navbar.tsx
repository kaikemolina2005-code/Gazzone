/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = {
  'DEPARTAMENTOS': [
    'Mochilas',
    'Chapéus',
    'Bolsas',
    'Malas'
  ],
  'MOCHILAS': [
    'Mini Mochilinhas',
    'Mochilas Infantil',
    'Mochilas Universitária',
    'Mochilinhas',
    'Saco de Costas'
  ],
  'CHAPÉUS': [
    'Bonés e Viseira',
    'Buckets',
    'Chapéu Caçador',
    'Chapéu Cowboy',
    'Chapéu de Palha'
  ],
  'BOLSAS': [
    'Bolsas Femininas',
    'Necessaries',
    'Shoulder Bag'
  ],
  'MALAS': [
    'Mala de Viagem',
    'Organizador de viagem'
  ]
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { name: 'MOCHILAS' },
    { name: 'CHAPÉUS' },
    { name: 'BOLSAS' },
    { name: 'MALAS' },
  ];

  return (
    <nav className="bg-[#7a3166] text-white py-1 sticky top-0 z-50">
      <div className="container-wide flex items-center justify-between text-[11px] font-bold tracking-widest leading-none">
        
        {/* Todos os Departamentos */}
        <div 
          className="relative group h-10 flex items-center"
          onMouseEnter={() => setActiveMenu('DEPARTAMENTOS')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="flex items-center gap-2 hover:opacity-75 transition-opacity uppercase px-4 cursor-pointer">
            <Menu className="w-4 h-4" />
            <span>Todos os Departamentos</span>
          </button>
          
          <AnimatePresence>
            {activeMenu === 'DEPARTAMENTOS' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-10 left-0 w-64 bg-white text-gazz-ink shadow-2xl rounded-b-2xl py-4 overflow-hidden z-50 border border-gray-100"
              >
                {CATEGORIES.DEPARTAMENTOS.map((sub) => (
                  <a 
                    key={sub} 
                    href="#" 
                    className="block px-8 py-3.5 hover:bg-gray-50 transition-colors text-sm font-bold first:pt-4 last:pb-4"
                  >
                    {sub}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Categories */}
        <ul className="flex items-center gap-12 lg:gap-20">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="relative h-10 flex items-center"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button 
                className="hover:text-gray-300 transition-colors flex items-center gap-2 h-full cursor-pointer"
              >
                {item.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white text-gazz-ink shadow-2xl rounded-b-2xl py-4 overflow-hidden z-50 border border-gray-100"
                  >
                    {CATEGORIES[item.name as keyof typeof CATEGORIES].map((sub) => (
                      <a 
                        key={sub} 
                        href="#" 
                        className="block px-8 py-3.5 hover:bg-gray-50 transition-colors text-sm font-bold first:pt-4 last:pb-4"
                      >
                        {sub}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Empty space for layout symmetry */}
        <div className="w-[200px] hidden lg:block"></div>
      </div>
    </nav>
  );
}
