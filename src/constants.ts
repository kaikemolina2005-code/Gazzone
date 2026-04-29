/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from './types';
import imgProd1 from './components/product_1.webp';
import imgProd3 from './components/product_3.webp';
import imgProd4 from './components/product_4.webp';
import imgProd5 from './components/product_5.webp';
import imgProd6 from './components/product_6.webp';

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'r1-1',
    name: "Mochila Gazzone Street Black",
    price: 159.90,
    originalPrice: 199.90,
    discountLabel: '20% OFF',
    image: imgProd1,
    installments: 'ou R$ 152,00 via Pix',
  },
  {
    id: 'r1-2',
    name: "Bolsa Elegance Nude Gazzone",
    price: 249.90,
    originalPrice: 320.00,
    discountLabel: '22% OFF',
    image: imgProd3,
    installments: 'ou R$ 237,00 via Pix',
  },
  {
    id: 'bh-1',
    name: "Chapéu de Praia Feminino Aba Larga Nude Proteção",
    price: 49.90,
    originalPrice: 65.00,
    discountLabel: '23% OFF',
    image: imgProd1,
    installments: 'ou R$ 47,00 via Pix',
  },
  {
    id: 'fp-1',
    name: "Chapéu de Pesca com Proteção Solar Gazzone",
    price: 34.90,
    originalPrice: 45.00,
    discountLabel: '22% OFF',
    image: imgProd4,
    installments: 'ou R$ 33,00 via Pix',
  },
   {
    id: 'r1-3',
    name: "Mini Mochila Soft Pink",
    price: 129.90,
    originalPrice: 159.90,
    image: imgProd5,
    installments: 'ou R$ 123,00 via Pix',
  },
  {
    id: 'r1-4',
    name: "Mala de Viagem Premium Silver",
    price: 459.00,
    originalPrice: 599.00,
    discountLabel: '23% OFF',
    image: imgProd6,
  },
];
