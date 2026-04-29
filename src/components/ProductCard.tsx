/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
  key?: string;
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div 
      className="relative group cursor-pointer"
      onClick={() => onProductClick && onProductClick(product)}
    >
      {/* Luz focal atrás do card (Efeito de brilho) */}
      <div className="absolute inset-0 bg-[#7a3166] opacity-0 group-hover:opacity-40 rounded-2xl blur-3xl transition-all duration-700 -z-10 scale-90 group-hover:scale-110" />
      
      <div className="group-hover:ring-2 ring-[#7a3166]/20 transition-all duration-500 rounded-2xl flex flex-col bg-white/40 backdrop-blur-md border border-white/30 overflow-hidden hover:shadow-[0_20px_50px_rgba(122,49,102,0.3)] transform transition-all duration-500 hover:-translate-y-3 hover:bg-white/70 h-full">
        <div className="relative aspect-square bg-transparent overflow-hidden">
        {/* Tag */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-orange-500 text-white text-[10px] font-black px-2 py-1 uppercase rounded-sm shadow-sm ring-1 ring-white/20">
              {product.tag}
            </div>
          </div>
        )}
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Actions Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
           <button className="bg-white text-gazz-ink p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gazz-ink hover:text-white">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors shadow-sm">
            <Share2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-[13px] font-bold text-gray-800 leading-tight mb-2 line-clamp-2 min-h-[32px] group-hover:text-gazz-ink transition-colors uppercase tracking-tight">
          {product.name}
        </h3>
        
        {/* Rating Mockup */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < (product.rating || 4) ? 'fill-current' : 'fill-current opacity-30'}`} 
              />
            ))}
          </div>
          <span className="text-[10px] text-gray-400 font-bold">({product.reviewsCount || 2074})</span>
        </div>
        
        <div className="mt-auto">
          {product.originalPrice && (
            <div className="text-[11px] text-gray-400 font-medium line-through mb-1">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </div>
          )}
          
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-gazz-ink">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.discountLabel && (
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded uppercase tracking-tighter ring-1 ring-emerald-100">
                {product.discountLabel}
              </span>
            )}
          </div>

          {product.installments && (
            <p className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-50 pt-2 group-hover:text-gazz-ink transition-colors">
              {product.installments}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
