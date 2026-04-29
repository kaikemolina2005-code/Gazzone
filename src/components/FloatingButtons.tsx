/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle, ShoppingBag, ExternalLink } from 'lucide-react';
import mlLogo from './logo_mercadolivre.png';
import shopeeLogo from './logo_shopee.png';

export default function FloatingButtons() {
  const buttons = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.822 11.822 0 001.592 6.001L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.637 0 12.048-5.412 12.052-12.05a11.817 11.817 0 00-3.582-8.455" />
        </svg>
      ),
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#128C7E]',
      link: 'https://wa.me/5511930906531',
    },
    {
      id: 'mercadolivre',
      name: 'Mercado Livre',
      icon: (
        <img src={mlLogo} alt="Mercado Livre" className="w-full h-full object-cover" />
      ),
      color: 'bg-[#FFE600]',
      hoverColor: 'hover:bg-[#FFE600]',
      link: 'https://www.mercadolivre.com.br/loja/gazz?item_id=MLB5697782196&category_id=MLB1430&official_store_id=80366&client=recoview-selleritems&recos_listing=true',
    },
    {
      id: 'shopee',
      name: 'Shopee',
      icon: (
        <img src={shopeeLogo} alt="Shopee" className="w-full h-full object-cover" />
      ),
      color: 'bg-[#EE4D2D]',
      hoverColor: 'hover:bg-[#EE4D2D]',
      link: '#',
    },
  ];

  return (
    <div id="floating-social-buttons" className="fixed right-6 bottom-12 z-50 flex flex-col gap-3">
      {buttons.map((btn, index) => (
        <motion.a
          key={btn.id}
          href={btn.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${btn.color} ${('textColor' in btn ? btn.textColor : '') || 'text-white'} ${btn.id === 'whatsapp' ? 'p-4' : 'overflow-hidden'} ${btn.hoverColor} group relative`}
          title={btn.name}
        >
          {btn.icon}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-black/80 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {btn.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
