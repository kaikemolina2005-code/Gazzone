/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import promoImg from './banner promoção.png';

export default function BottomBanner({ onPromotionsClick }: { onPromotionsClick?: () => void }) {
  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onClick={onPromotionsClick}
          className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer"
        >
          <img 
            src={promoImg} 
            alt="Promoção Gazzone" 
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}
