/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  installments?: string;
  image: string;
  isNew?: boolean;
  tag?: string;
  discountLabel?: string;
  rating?: number;
  reviewsCount?: number;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}
