/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Filter, Tag } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import imgProd1 from './product_1.webp';
import imgProd3 from './product_3.webp';

interface PromotionsPageProps {
  onBack: () => void;
}

export default function PromotionsPage({ onBack }: PromotionsPageProps) {
  const products: Product[] = [
    {
      id: 'promo-1',
      name: "Bolsa Feminina Elegance Promo",
      price: 89.90,
      originalPrice: 179.90,
      discountLabel: '50% OFF',
      image: imgProd3,
      installments: 'ou R$ 85,00 via Pix',
    },
    {
      id: 'promo-2',
      name: "Mochila Urbana Gazzone Black",
      price: 119.90,
      originalPrice: 199.90,
      discountLabel: '40% OFF',
      image: imgProd1,
      installments: 'ou R$ 113,00 via Pix',
    },
    {
      id: 'promo-3',
      name: "Chapéu de Praia Classic Gazzone",
      price: 35.00,
      originalPrice: 70.00,
      discountLabel: '50% OFF',
      image: imgProd1,
      installments: 'ou R$ 33,00 via Pix',
    },
    {
      id: 'promo-4',
      name: "Viseira Sport Gazzone UV",
      price: 19.90,
      originalPrice: 39.90,
      discountLabel: '50% OFF',
      image: imgProd1,
      installments: 'ou R$ 18,90 via Pix',
    },
    {
      id: 'promo-5',
      name: "Kit Acessórios Verão Premium",
      price: 149.90,
      originalPrice: 299.90,
      discountLabel: '50% OFF',
      image: imgProd3,
      installments: 'ou R$ 142,00 via Pix',
    },
    {
      id: 'promo-6',
      name: "Shoulder Bag Gazzone Street",
      price: 49.90,
      originalPrice: 99.90,
      discountLabel: '50% OFF',
      image: imgProd3,
      installments: 'ou R$ 47,00 via Pix',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-white min-h-screen pb-20"
    >
      {/* Promotion Hero Header */}
      <div className="bg-[#5c2d5c] py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="container-wide relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Voltar para Início</span>
          </button>
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-orange-500/20">
              <Tag className="w-3 h-3" />
              Ofertas Imperdíveis
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">Queima de <br/><span className="text-orange-500">Estoque</span></h1>
            <p className="text-lg md:text-xl text-white/70 font-medium max-w-lg">
              Aproveite descontos de até 50% em peças selecionadas. Renove seu estilo com a Gazzone.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[34px] z-30 bg-white border-b border-gray-100 py-4 mb-12 shadow-sm">
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtrar por Categoria
            </button>
            <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-gray-300">|</span>
            <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-gray-400">{products.length} itens encontrados</span>
          </div>
          
          <div className="flex items-center gap-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Ordenar:</label>
            <select className="text-[10px] font-black uppercase tracking-widest bg-transparent border-none focus:ring-0 cursor-pointer font-bold">
              <option>Maior Desconto</option>
              <option>Menor Preço</option>
              <option>Novidades</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        {/* Empty State / Bottom banner */}
        <div className="mt-20 p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 text-center">
          <h3 className="text-2xl font-black text-gazz-ink mb-2">Gostou de algo?</h3>
          <p className="text-gray-500 mb-8 font-medium">As ofertas são por tempo limitado ou enquanto durarem os estoques.</p>
          <button className="bg-black text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Adicionar Mais ao Carrinho
          </button>
        </div>
      </div>
    </motion.div>
  );
}
