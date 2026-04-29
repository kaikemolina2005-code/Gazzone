/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VerticalBanners from './components/VerticalBanners';
import CuradoriaSection from './components/CuradoriaSection';
import InstagramSection from './components/InstagramSection';
import FullProductGrid from './components/FullProductGrid';
import FloatingButtons from './components/FloatingButtons';
import BeachHatsPage from './components/BeachHatsPage';
import FishingProductsPage from './components/FishingProductsPage';
import PromotionsPage from './components/PromotionsPage';
import LoginPage from './components/LoginPage';
import SupportPage from './components/SupportPage';
import CartPage from './components/CartPage';
import SearchResultsPage from './components/SearchResultsPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import Footer from './components/Footer';
import { ALL_PRODUCTS } from './constants';
import { Product, CartItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'beach-hats' | 'fishing' | 'promotions' | 'login' | 'support' | 'cart' | 'search' | 'product-details'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    // Optional: show a notification or redirect to cart
    goToCart();
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-details');
    window.scrollTo(0, 0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = ALL_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
    setCurrentPage('search');
    window.scrollTo(0, 0);
  };

  const goToBeachHats = () => {
    setCurrentPage('beach-hats');
    window.scrollTo(0, 0);
  };

  const goToFishing = () => {
    setCurrentPage('fishing');
    window.scrollTo(0, 0);
  };

  const goToPromotions = () => {
    setCurrentPage('promotions');
    window.scrollTo(0, 0);
  };

  const goToLogin = () => {
    setCurrentPage('login');
    window.scrollTo(0, 0);
  };

  const goToSupport = () => {
    setCurrentPage('support');
    window.scrollTo(0, 0);
  };

  const goToCart = () => {
    setCurrentPage('cart');
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <div className="flex flex-col flex-1">
        <Header 
          onLogoClick={goToHome}
          onLoginClick={goToLogin} 
          onSupportClick={goToSupport} 
          onCartClick={goToCart} 
          onSearch={handleSearch}
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        />
        <Navbar />
        <main className="flex-1">
          {currentPage === 'home' ? (
            <>
              <Hero />
              <CuradoriaSection onProductClick={handleProductClick} />
              <InstagramSection />
              <FullProductGrid 
                onBeachHatsClick={goToBeachHats} 
                onFishingClick={goToFishing}
                onPromotionsClick={goToPromotions} 
                onProductClick={handleProductClick}
              />
            </>
          ) : currentPage === 'beach-hats' ? (
            <BeachHatsPage onBack={goToHome} onProductClick={handleProductClick} />
          ) : currentPage === 'fishing' ? (
            <FishingProductsPage onBack={goToHome} onProductClick={handleProductClick} />
          ) : currentPage === 'promotions' ? (
            <PromotionsPage onBack={goToHome} onProductClick={handleProductClick} />
          ) : currentPage === 'login' ? (
            <LoginPage onBack={goToHome} />
          ) : currentPage === 'support' ? (
            <SupportPage onBack={goToHome} />
          ) : currentPage === 'cart' ? (
            <CartPage 
              onBack={goToHome} 
              cartItems={cart} 
              onRemove={removeFromCart} 
              onUpdateQuantity={updateQuantity} 
            />
          ) : currentPage === 'search' ? (
            <SearchResultsPage query={searchQuery} results={searchResults} onBack={goToHome} onProductClick={handleProductClick} />
          ) : (
            selectedProduct && <ProductDetailsPage product={selectedProduct} onBack={goToHome} onAddToCart={addToCart} />
          )}
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
}
