/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, Search as SearchIcon, Filter } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface SearchResultsPageProps {
  query: string;
  results: Product[];
  onBack: () => void;
  onProductClick?: (product: Product) => void;
}

export default function SearchResultsPage({ query, results, onBack, onProductClick }: SearchResultsPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pb-20"
    >
      <div className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="container-wide">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Voltar para Início</span>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-gray-400 mb-2">
                <SearchIcon className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Resultados da busca</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gazz-ink">
                "{query}"
              </h1>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              {results.length} {results.length === 1 ? 'Produto encontrado' : 'Produtos encontrados'}
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-[34px] z-30 bg-white border-b border-gray-100 py-4 mb-12 shadow-sm">
        <div className="container-wide flex items-center justify-between">
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border border-gray-200 px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filtrar Resultados
          </button>
          
          <div className="flex items-center gap-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 font-bold">Ordenar:</label>
            <select className="text-[10px] font-black uppercase tracking-widest bg-transparent border-none focus:ring-0 cursor-pointer font-bold">
              <option>Relevância</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container-wide">
        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {results.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} onProductClick={onProductClick} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <SearchIcon className="w-12 h-12 text-gray-200 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-gazz-ink mb-2 uppercase tracking-tight">Nenhum produto encontrado</h3>
            <p className="text-gray-500 font-medium mb-8">Tente usar termos mais genéricos ou verifique a ortografia.</p>
            <button 
              onClick={onBack}
              className="bg-black text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Ver todos os produtos
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
