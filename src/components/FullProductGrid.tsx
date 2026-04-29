/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import SecondaryBanner from './SecondaryBanner';
import BottomBanner from './BottomBanner';
import { Product } from '../types';

import imgProd1 from './product_1.webp';
import imgProd2 from './product_1.webp';
import imgProd3 from './product_3.webp';
import imgProd4 from './product_4.webp';
import imgProd5 from './product_5.webp';
import imgProd6 from './product_6.webp';

interface CarouselRowProps {
  title: string;
  products: Product[];
  onProductClick?: (product: Product) => void;
}

function CarouselRow({ title, products, onProductClick }: CarouselRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-12 relative group">
      {title && (
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
          <h3 className="text-lg font-black uppercase tracking-tight text-gazz-ink">{title}</h3>
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gazz-ink" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[280px] md:min-w-[240px] snap-start">
              <ProductCard product={product} onProductClick={onProductClick} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6 text-gazz-ink" />
        </button>
      </div>
    </div>
  );
}

export default function FullProductGrid({ onBeachHatsClick, onFishingClick, onPromotionsClick, onProductClick }: { onBeachHatsClick?: () => void, onFishingClick?: () => void, onPromotionsClick?: () => void, onProductClick?: (product: Product) => void }) {
  const row1Products: Product[] = [
    {
      id: 'r1-1',
      name: "Mochila Urbana Feminina Gazzone's Beauty Rosa Bebê Pequena 10L",
      price: 39.50,
      originalPrice: 56.96,
      discountLabel: '31% OFF',
      tag: 'NOVIDADE',
      image: imgProd1,
      installments: 'ou R$ 37,90 via Pix',
    },
    {
      id: 'r1-2',
      name: 'Bolsa Feminina Barata Grande Media Alça De Ombro Sacola Preta',
      price: 29.50,
      originalPrice: 35.62,
      discountLabel: '17% OFF',
      tag: 'OUTLET',
      image: imgProd3,
      installments: 'OU R$ 28,90 VIA PIX',
    },
    {
      id: 'r1-3',
      name: 'Saquinho De Costas Liso Com Cordão Para Chuteira Preto',
      price: 21.95,
      originalPrice: 29.37,
      discountLabel: '25% OFF',
      image: imgProd4,
      installments: 'OU R$ 21,50 VIA PIX',
    },
    {
      id: 'r1-4',
      name: 'Mochila Passeio Feminina Gazzone Alça Regulável Preta',
      price: 37.68,
      originalPrice: 46.34,
      discountLabel: '18% OFF',
      image: imgProd5,
      installments: 'ou R$ 36,90 via Pix',
    },
    {
      id: 'r1-5',
      name: "Bolsa De Ombro Feminina Gazzone's Beauty Grande",
      price: 42.86,
      originalPrice: 52.72,
      discountLabel: '18% OFF',
      image: imgProd6,
      installments: 'ou R$ 41,00 via Pix',
    },
    {
      id: 'r1-6',
      name: "Mochila Tech Pro Gazzone Design Executivo",
      price: 89.90,
      originalPrice: 120.00,
      discountLabel: '25% OFF',
      tag: 'PREMIUM',
      image: imgProd1,
      installments: 'ou R$ 85,00 via Pix',
    },
    {
      id: 'r1-7',
      name: "Bolsa shopper Classic Gazzone Couro Sintético",
      price: 45.90,
      originalPrice: 59.90,
      discountLabel: '23% OFF',
      image: imgProd3,
      installments: 'ou R$ 43,00 via Pix',
    },
    {
      id: 'r1-8',
      name: "Necessaire Organizadora Gazzone Beauty",
      price: 15.90,
      originalPrice: 25.00,
      discountLabel: '36% OFF',
      tag: 'OFERTA',
      image: imgProd4,
      installments: 'ou R$ 14,00 via Pix',
    },
  ];

  const row2Products: Product[] = [
    {
      id: 'r2-1',
      name: "Mochila Escolar Infantil Gazzone Cores",
      price: 32.50,
      originalPrice: 45.00,
      discountLabel: '27% OFF',
      image: imgProd5,
      installments: 'ou R$ 30,00 via Pix',
    },
    {
      id: 'r2-2',
      name: "Bolsa de Mão Elegance Gazzone",
      price: 55.00,
      originalPrice: 75.00,
      discountLabel: '26% OFF',
      image: imgProd6,
      installments: 'ou R$ 52,00 via Pix',
    },
    {
      id: 'r2-3',
      name: "Mochila Urbana Feminina Gazzone Rosa",
      price: 39.50,
      originalPrice: 56.96,
      discountLabel: '31% OFF',
      image: imgProd1,
      installments: 'ou R$ 37,90 via Pix',
    },
    {
      id: 'r2-4',
      name: 'Bolsa Sacola Gazzone Preta Grande',
      price: 29.50,
      originalPrice: 35.62,
      discountLabel: '17% OFF',
      image: imgProd3,
      installments: 'OU R$ 28,90 VIA PIX',
    },
    {
      id: 'r2-5',
      name: 'Saquinho Chuteira Gazzone Preto',
      price: 21.95,
      originalPrice: 29.37,
      discountLabel: '25% OFF',
      image: imgProd4,
      installments: 'OU R$ 21,50 VIA PIX',
    },
    {
      id: 'r2-6',
      name: "Mochila Passeio Gazzone Feminina",
      price: 37.68,
      originalPrice: 46.34,
      discountLabel: '18% OFF',
      image: imgProd5,
      installments: 'ou R$ 36,90 via Pix',
    },
    {
      id: 'r2-7',
      name: "Bolsa de Ombro Gazzone Beauty",
      price: 42.86,
      originalPrice: 52.72,
      discountLabel: '18% OFF',
      image: imgProd6,
      installments: 'ou R$ 41,00 via Pix',
    },
    {
      id: 'r2-8',
      name: "Kit Mochila e Bolsa Gazzone",
      price: 99.00,
      originalPrice: 150.00,
      discountLabel: '34% OFF',
      tag: 'KITS',
      image: imgProd1,
      installments: 'ou R$ 94,00 via Pix',
    },
  ];

  const row3Products: Product[] = [
    {
      id: 'r3-1',
      name: "Bolsa de Ombro Feminina Gazzone's Beauty Preta",
      price: 42.86,
      originalPrice: 52.72,
      discountLabel: '18% OFF',
      image: imgProd6,
      installments: 'ou R$ 41,00 via Pix',
    },
    {
      id: 'r3-2',
      name: "Mochila Passeio Feminina Gazzone Alça Regulável",
      price: 37.68,
      originalPrice: 46.34,
      discountLabel: '18% OFF',
      image: imgProd5,
      installments: 'ou R$ 36,90 via Pix',
    },
    {
      id: 'r3-3',
      name: 'Saquinho De Costas Liso Com Cordão Preto',
      price: 21.95,
      originalPrice: 29.37,
      discountLabel: '25% OFF',
      image: imgProd4,
      installments: 'OU R$ 21,50 VIA PIX',
    },
    {
      id: 'r3-4',
      name: 'Bolsa Feminina Barata Grande Media Alça De Ombro',
      price: 29.50,
      originalPrice: 35.62,
      discountLabel: '17% OFF',
      image: imgProd3,
      installments: 'OU R$ 28,90 VIA PIX',
    },
    {
      id: 'r3-5',
      name: "Mochila Urbana Feminina Gazzone Beauty",
      price: 39.50,
      originalPrice: 56.96,
      discountLabel: '31% OFF',
      image: imgProd1,
      installments: 'ou R$ 37,90 via Pix',
    },
    {
      id: 'r3-6',
      name: "Mochila Tech Pro Gazzone Executiva",
      price: 89.90,
      originalPrice: 120.00,
      discountLabel: '25% OFF',
      tag: 'PREMIUM',
      image: imgProd1,
      installments: 'ou R$ 85,00 via Pix',
    },
    {
      id: 'r3-7',
      name: "Bolsa shopper Classic Gazzone Couro",
      price: 45.90,
      originalPrice: 59.90,
      discountLabel: '23% OFF',
      image: imgProd3,
      installments: 'ou R$ 43,00 via Pix',
    },
    {
      id: 'r3-8',
      name: "Necessaire Organizadora Gazzone",
      price: 15.90,
      originalPrice: 25.00,
      discountLabel: '36% OFF',
      tag: 'OFERTA',
      image: imgProd4,
      installments: 'ou R$ 14,00 via Pix',
    },
  ];

  const row4Products: Product[] = [
    {
      id: 'r4-1',
      name: "Chapéu de Praia Feminino Aba Larga Nude Proteção",
      price: 49.90,
      originalPrice: 65.00,
      discountLabel: '23% OFF',
      image: imgProd2,
      installments: 'ou R$ 47,00 via Pix',
    },
    {
      id: 'r4-2',
      name: "Viseira de Praia Feminina Ajustável",
      price: 24.90,
      originalPrice: 35.00,
      discountLabel: '29% OFF',
      image: imgProd2,
      installments: 'ou R$ 23,00 via Pix',
    },
    {
      id: 'r4-3',
      name: "Chapéu de Palha Estilo Panama",
      price: 59.90,
      originalPrice: 85.00,
      discountLabel: '30% OFF',
      image: imgProd2,
      installments: 'ou R$ 56,00 via Pix',
    },
    {
      id: 'r4-4',
      name: "Chapéu de Pesca com Proteção Solar",
      price: 34.90,
      originalPrice: 45.00,
      discountLabel: '22% OFF',
      image: imgProd2,
      installments: 'ou R$ 33,00 via Pix',
    },
    {
      id: 'r4-5',
      name: "Boné Gazzone Sport",
      price: 19.90,
      originalPrice: 29.90,
      discountLabel: '33% OFF',
      image: imgProd3,
      installments: 'ou R$ 18,90 via Pix',
    },
    {
      id: 'r4-6',
      name: "Bucket Hat Gazzone Summer",
      price: 29.90,
      originalPrice: 39.90,
      discountLabel: '25% OFF',
      image: imgProd4,
      installments: 'ou R$ 28,00 via Pix',
    },
    {
      id: 'r4-7',
      name: "Viseira Sport Performance",
      price: 22.50,
      originalPrice: 30.00,
      discountLabel: '25% OFF',
      image: imgProd5,
      installments: 'ou R$ 21,00 via Pix',
    },
    {
      id: 'r4-8',
      name: "Chapéu Fedora Casual Gazzone",
      price: 69.90,
      originalPrice: 95.00,
      discountLabel: '26% OFF',
      image: imgProd2,
      installments: 'ou R$ 66,00 via Pix',
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-10 border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-gazz-ink">VOCÊ TAMBÉM PODE GOSTAR</h2>
          <div className="flex gap-4">
            <a href="#" className="text-xs font-black uppercase tracking-widest text-gazz-ink hover:underline">Ver Todos</a>
          </div>
        </div>
        
        <CarouselRow title="Destaques Recomendados" products={row1Products} onProductClick={onProductClick} />
        <CarouselRow title="Mais do Nosso Catálogo" products={row2Products} onProductClick={onProductClick} />
        <CarouselRow title="" products={row3Products} onProductClick={onProductClick} />
        <SecondaryBanner onBeachHatsClick={onBeachHatsClick} onFishingClick={onFishingClick} />
        <CarouselRow title="Chapéus e Acessórios" products={row4Products} onProductClick={onProductClick} />
        <BottomBanner onPromotionsClick={onPromotionsClick} />
      </div>
    </section>
  );
}

