/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Filter, Grid, List as ListIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import imgProdFishing from './product_4.webp'; // Using existing relevant image

interface FishingProductsPageProps {
  onBack: () => void;
  onProductClick?: (product: Product) => void;
}

export default function FishingProductsPage({ onBack, onProductClick }: FishingProductsPageProps) {
  const products: Product[] = [
    {
      id: 'fp-1',
      name: "Chapéu de Pesca com Proteção Solar Gazzone",
      price: 34.90,
      originalPrice: 45.00,
      discountLabel: '22% OFF',
      image: imgProdFishing,
      installments: 'ou R$ 33,00 via Pix',
    },
    {
      id: 'fp-2',
      name: "Gazzone Fishing Hat Camuflado Pro",
      price: 39.90,
      originalPrice: 55.00,
      discountLabel: '27% OFF',
      image: imgProdFishing,
      installments: 'ou R$ 37,00 via Pix',
    },
    {
      id: 'fp-3',
      name: "Boné Gazzone Pesca Esportiva Respirável",
      price: 29.90,
      originalPrice: 39.90,
      discountLabel: '25% OFF',
      image: imgProdFishing,
      installments: 'ou R$ 28,00 via Pix',
    },
    {
      id: 'fp-4',
      name: "Viseira Gazzone Performance Pesca",
      price: 24.90,
      originalPrice: 32.00,
      discountLabel: '22% OFF',
      image: imgProdFishing,
      installments: 'ou R$ 23,00 via Pix',
    },
    {
      id: 'fp-5',
      name: "Chapéu Australiano com Protetor de Nuca",
      price: 44.90,
      originalPrice: 59.90,
      discountLabel: '25% OFF',
      image: imgProdFishing,
      installments: 'ou R$ 42,00 via Pix',
    },
    {
      id: 'fp-6',
      name: "Bandana Gazzone Pesca UV50+",
      price: 15.90,
      originalPrice: 20.00,
      discountLabel: '20% OFF',
      image: imgProdFishing,
      installments: 'ou R$ 15,00 via Pix',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white min-h-screen pb-20"
    >
      <div className="bg-slate-50 border-b border-gray-200 py-8">
        <div className="container-wide">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Voltar para Início</span>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tighter text-gazz-ink mb-2">Pesca Esportiva</h1>
              <p className="text-gray-500 font-medium">Equipamento de alta performance para o pescador exigente.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400">{products.length} Produtos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-[34px] z-30 bg-white border-b border-gray-100 py-4 mb-12 shadow-sm">
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtrar
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Ordenar por:</label>
            <select className="text-[10px] font-black uppercase tracking-widest bg-transparent border-none focus:ring-0 cursor-pointer">
              <option>Destaques</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Mais Vendidos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} onProductClick={onProductClick} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
