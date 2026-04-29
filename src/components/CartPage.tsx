/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, ShoppingBag, Trash2, Plus, Minus, CreditCard, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  onBack: () => void;
  cartItems: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export default function CartPage({ onBack, cartItems, onRemove, onUpdateQuantity }: CartPageProps) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-gray-50 min-h-screen pb-20"
    >
      <div className="container-wide py-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Continuar Comprando</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-8">
              <ShoppingBag className="w-8 h-8 text-gazz-ink" />
              <h1 className="text-4xl font-black uppercase tracking-tighter">Meu Carrinho</h1>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 md:p-10 space-y-8">
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-sm font-black uppercase tracking-widest text-gazz-ink mb-1">{item.name}</h3>
                        <p className="text-gray-400 text-[10px] font-black uppercase mb-4 tracking-widest">Código: {item.id}</p>
                        
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                          <div className="flex items-center border border-gray-100 rounded-full bg-gray-50/50">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-2 hover:text-purple-600 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-5 text-sm font-black text-gazz-ink">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-2 hover:text-purple-600 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-8">
                            <p className="text-lg font-black text-gazz-ink">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                            <button 
                              onClick={() => onRemove(item.id)}
                              className="p-3 text-gray-300 hover:text-red-500 transition-colors bg-red-50/0 hover:bg-red-50 rounded-xl"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20">
                    <p className="text-gray-400 font-medium italic">Seu carrinho está vazio.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-[400px] space-y-6">
            <div className="bg-gazz-ink text-white p-10 rounded-[2.5rem] shadow-2xl">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Resumo</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm font-medium text-white/60">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-white/60">
                  <span>Frete</span>
                  <span className="text-green-400 font-black uppercase tracking-widest text-[10px]">Grátis</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between">
                  <span className="text-lg font-bold uppercase tracking-widest">Total</span>
                  <span className="text-2xl font-black">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-white text-gazz-ink py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors shadow-lg">
                <CreditCard className="w-5 h-5" /> Finalizar Pedido
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/40">
                <ShieldCheck className="w-4 h-4" /> Compra 100% Segura
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-gray-100">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Cupom de Desconto</h4>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Seu cupom..." 
                  className="flex-1 bg-gray-50 border border-gray-100 px-5 py-3 rounded-xl text-xs font-bold outline-none focus:ring-1 focus:ring-gazz-ink transition-all"
                />
                <button className="bg-gray-100 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors">Aplicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
