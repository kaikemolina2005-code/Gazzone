/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronLeft, ChevronRight, Store, Tag, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';
import { Product } from '../types';

import imgSobre from './faça_uma_imagem_202604271521.jpeg';
import imgPromo from './imagem_promocao.jpeg';
import imgDestaques from './produtos_destaques.jpeg';
import imgMarketplaces from './marketplaces_banner.jpeg';

import imgProd1 from './product_1.webp';
import imgProd3 from './product_3.webp';
import imgProd4 from './product_4.webp';
import imgProd5 from './product_5.webp';
import imgProd6 from './product_6.webp';

const infoBoxes = [
  {
    title: 'Sobre a Loja',
    description: 'Conheça nossa história e compromisso com a qualidade.',
    icon: Store,
    link: '#',
    color: 'from-blue-500/40 to-indigo-500/40',
    image: imgSobre
  },
  {
    title: 'Promoções',
    description: 'As melhores ofertas selecionadas para você.',
    icon: Tag,
    link: '#',
    color: 'from-orange-500/40 to-red-500/40',
    image: imgPromo
  },
  {
    title: 'Destaques',
    description: 'Produtos que são tendência e sucesso de vendas.',
    icon: Star,
    link: '#',
    color: 'from-yellow-500/40 to-amber-500/40',
    image: imgDestaques
  },
  {
    title: 'Marketplaces',
    description: 'Encontre-nos no Shopee e Mercado Livre.',
    icon: ShoppingCart,
    link: '#',
    color: 'from-emerald-500/40 to-teal-500/40',
    image: imgMarketplaces
  }
];

import VerticalBanners from './VerticalBanners';

export default function CuradoriaSection() {
  const products: Product[] = [
    {
      id: '1',
      name: "Mochila Urbana Feminina Gazzone's Beauty Rosa Bebê",
      price: 39.50,
      originalPrice: 56.96,
      discountLabel: '31% OFF',
      tag: 'MAIS VENDIDO',
      image: imgProd1,
      installments: 'ou R$ 37,90 via Pix',
    },
    {
      id: '2',
      name: 'Chapéu De Praia Feminino Aba Larga Nude Proteção Solar Upf',
      price: 36.90,
      originalPrice: 43.16,
      discountLabel: '14% OFF',
      tag: 'MAIS VENDIDO',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop',
      installments: 'ou R$ 34,90 via Pix',
    },
    {
      id: '3',
      name: 'Bolsa Feminina Barata Grande Media Alça De Ombro Sacola Cor Preto Desenho do tecido Lisa',
      price: 29.50,
      originalPrice: 35.62,
      discountLabel: '17% OFF',
      tag: 'MAIS VENDIDO',
      rating: 4.7,
      reviewsCount: 3390,
      image: imgProd3,
      installments: 'OU R$ 28,90 VIA PIX',
    },
    {
      id: '4',
      name: 'Saquinho De Costas Liso Com Cordão Para Levar Chuteira Cor Preto Desenho do tecido Lisa',
      price: 21.95,
      originalPrice: 29.37,
      discountLabel: '25% OFF',
      tag: 'MAIS VENDIDO',
      image: imgProd4,
      installments: 'OU R$ 21,50 VIA PIX',
    },
    {
      id: '5',
      name: 'Mochila Passeio Feminina Gazzone Alça Regulável Cor Preta',
      price: 37.68,
      originalPrice: 46.34,
      discountLabel: '18% OFF',
      tag: 'MAIS VENDIDO',
      image: imgProd5,
      installments: 'ou R$ 36,90 via Pix',
    },
    {
      id: '6',
      name: "Bolsa De Ombro Feminina Gazzone's Beauty Grande Para Trabalho",
      price: 42.86,
      originalPrice: 52.72,
      discountLabel: '18% OFF',
      tag: 'MAIS VENDIDO',
      image: imgProd6,
      installments: 'ou R$ 41,00 via Pix',
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative background elements for glassmorphism contrast */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gazz-ink/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#7a3166]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-wide relative z-10">
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-gazz-ink">PRODUTOS DESTAQUES</h2>
          <div className="flex gap-2">
            <button className="p-1 hover:text-gray-400 transition-colors"><ChevronLeft className="w-6 h-6 stroke-[1.5]" /></button>
            <button className="p-1 hover:text-gray-400 transition-colors"><ChevronRight className="w-6 h-6 stroke-[1.5]" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Product Grid (3 cols for 2 rows = 6 items) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Sidebar Area: Info Boxes + Vertical Banners */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 h-fit relative">
               {/* Decorative Background Elements for Glass Effect */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-400 rounded-full blur-3xl" />
               </div>

               {infoBoxes.map((box, idx) => (
                  <motion.a
                    key={idx}
                    href={box.link}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative flex flex-col justify-between p-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all overflow-hidden h-[160px] shadow-sm rounded-2xl"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 -z-10 transition-transform duration-700 group-hover:scale-110">
                      <img 
                        src={box.image} 
                        alt={box.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>

                    <div className={`absolute inset-0 bg-gradient-to-br ${box.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-white text-[#7a3166] flex items-center justify-center rounded-xl mb-3 shadow-sm group-hover:scale-110 transition-transform">
                        <box.icon className="w-4 h-4" />
                      </div>
                      
                      <h3 className="text-sm font-black uppercase tracking-tight text-white shadow-sm">
                        {box.title}
                      </h3>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-white">
                      <span>Ver Detalhes</span>
                      <div className="w-4 h-[1px] bg-white transition-all group-hover:w-8" />
                    </div>
                  </motion.a>
               ))}
            </div>

            <VerticalBanners />
          </div>
        </div>
      </div>
    </section>
  );
}
