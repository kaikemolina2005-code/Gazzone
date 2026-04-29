/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Heart, Share2, ShieldCheck, Truck, RotateCcw, Star, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export default function ProductDetailsPage({ product, onBack, onAddToCart }: ProductDetailsPageProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pb-20 pt-10"
    >
      <div className="container-wide">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Voltar para Loja</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery Area */}
          <div className="flex-1 space-y-4">
            <div className="aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {product.discountLabel && (
                <div className="absolute top-8 left-8 bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">
                  {product.discountLabel}
                </div>
              )}
            </div>
            
            {/* Thumbnails (Mock) */}
            <div className="flex gap-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${i === 0 ? 'border-gazz-ink' : 'border-transparent bg-gray-50'}`}>
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-1 max-w-xl">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">({product.reviewsCount || 2074} Avaliações)</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gazz-ink mb-6 leading-[0.9]">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4 mb-8">
                {product.originalPrice && (
                  <span className="text-xl text-gray-300 line-through font-bold">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
                <span className="text-5xl font-black text-gazz-ink">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-xs font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                  À Vista no PIX
                </span>
              </div>
              
              {product.installments && (
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">
                  {product.installments.replace('via Pix', 'no Cartão')}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-6 mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border-2 border-gray-100 rounded-2xl bg-gray-50/50 p-2">
                  <button onClick={handleDecrement} className="p-3 hover:text-gazz-ink transition-colors"><Minus className="w-5 h-5" /></button>
                  <span className="px-8 text-lg font-black text-gazz-ink">{quantity}</span>
                  <button onClick={handleIncrement} className="p-3 hover:text-gazz-ink transition-colors"><Plus className="w-5 h-5" /></button>
                </div>
                
                <button 
                  onClick={() => onAddToCart && onAddToCart(product, quantity)}
                  className="flex-1 bg-gazz-ink text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-purple-500/20 active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" /> Adicionar ao Carrinho
                </button>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-4 rounded-2xl hover:border-red-500 hover:text-red-500 transition-all text-[10px] font-black uppercase tracking-widest">
                  <Heart className="w-4 h-4" /> Favoritar
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-4 rounded-2xl hover:border-blue-500 hover:text-blue-500 transition-all text-[10px] font-black uppercase tracking-widest">
                  <Share2 className="w-4 h-4" /> Compartilhar
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gazz-ink mb-1">Compra Segura</h4>
                  <p className="text-[10px] font-bold text-gray-400">Criptografia de ponta a ponta.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gazz-ink mb-1">Frete Grátis</h4>
                  <p className="text-[10px] font-bold text-gray-400">Para todo o Brasil acima de R$ 199.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gazz-ink mb-1">Troca Grátis</h4>
                  <p className="text-[10px] font-bold text-gray-400">Até 7 dias após o recebimento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section (Mock) */}
        <div className="mt-24 pt-24 border-t border-gray-100">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Descrição do Produto</h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-medium">
              <p>A {product.name} foi desenvolvida pensando no máximo conforto e durabilidade para o seu dia a dia. Com acabamento premium e materiais selecionados, este produto une estilo e funcionalidade de forma única.</p>
              <ul className="space-y-4 list-disc pl-5">
                <li>Material de alta resistência e fácil limpeza;</li>
                <li>Compartimentos internos inteligentes;</li>
                <li>Zíperes reforçados com tecnologia anti-travamento;</li>
                <li>Design exclusivo Gazzone de edição limitada.</li>
              </ul>
              <p>Ideal para quem busca um acessório que acompanhe seu ritmo, seja em aventuras ao ar livre, na universidade ou em viagens de negócios.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
