/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Filter, Grid, List as ListIcon } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import imgProdHat from './product_1.webp'; // Placeholder, using what's available

interface BeachHatsPageProps {
  onBack: () => void;
  onProductClick?: (product: Product) => void;
}

export default function BeachHatsPage({ onBack, onProductClick }: BeachHatsPageProps) {
  const products: Product[] = [
    {
      id: 'bh-1',
      name: "Chapéu de Praia Feminino Aba Larga Nude Proteção",
      price: 49.90,
      originalPrice: 65.00,
      discountLabel: '23% OFF',
      image: imgProdHat,
      installments: 'ou R$ 47,00 via Pix',
    },
    {
      id: 'bh-2',
      name: "Viseira de Praia Feminina Ajustável Summer",
      price: 24.90,
      originalPrice: 35.00,
      discountLabel: '29% OFF',
      image: imgProdHat,
      installments: 'ou R$ 23,00 via Pix',
    },
    {
      id: 'bh-3',
      name: "Chapéu de Palha Estilo Panama Gazzone",
      price: 59.90,
      originalPrice: 85.00,
      discountLabel: '30% OFF',
      image: imgProdHat,
      installments: 'ou R$ 56,00 via Pix',
    },
    {
      id: 'bh-4',
      name: "Bucket Hat Gazzone Summer Vibes",
      price: 29.90,
      originalPrice: 39.90,
      discountLabel: '25% OFF',
      image: imgProdHat,
      installments: 'ou R$ 28,00 via Pix',
    },
    {
      id: 'bh-5',
      name: "Chapéu de Sol Flexível Aba Gigante",
      price: 79.90,
      originalPrice: 110.00,
      discountLabel: '27% OFF',
      image: imgProdHat,
      installments: 'ou R$ 75,00 via Pix',
    },
    {
      id: 'bh-6',
      name: "Viseira Sport Performance Neon",
      price: 22.50,
      originalPrice: 30.00,
      discountLabel: '25% OFF',
      image: imgProdHat,
      installments: 'ou R$ 21,00 via Pix',
    },
    {
      id: 'bh-7',
      name: "Chapéu Fedora Casual Gazzone Summer",
      price: 69.90,
      originalPrice: 95.00,
      discountLabel: '26% OFF',
      image: imgProdHat,
      installments: 'ou R$ 66,00 via Pix',
    },
    {
      id: 'bh-8',
      name: "Boné Gazzone Sport Tropical",
      price: 19.90,
      originalPrice: 29.90,
      discountLabel: '33% OFF',
      image: imgProdHat,
      installments: 'ou R$ 18,90 via Pix',
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white min-h-screen pb-20"
    >
      {/* Header / Breadcrumb Area */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
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
              <h1 className="text-4xl font-black uppercase tracking-tighter text-gazz-ink mb-2">Coleção Praia</h1>
              <p className="text-gray-500 font-medium">Proteção e estilo para os seus melhores momentos sob o sol.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-black uppercase tracking-widest text-gray-400">{products.length} Produtos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-[34px] z-30 bg-white border-b border-gray-100 py-4 mb-12 shadow-sm">
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtrar
            </button>
            <div className="hidden md:flex items-center gap-2 border-l border-gray-200 pl-6 h-6">
              <button className="p-1 text-gazz-ink"><Grid className="w-4 h-4" /></button>
              <button className="p-1 text-gray-300 hover:text-gray-500"><ListIcon className="w-4 h-4" /></button>
            </div>
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

      {/* Product Grid */}
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
