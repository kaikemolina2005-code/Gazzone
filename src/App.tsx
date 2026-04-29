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
import Footer from './components/Footer';
import { ALL_PRODUCTS } from './constants';
import { Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'beach-hats' | 'fishing' | 'promotions' | 'login' | 'support' | 'cart' | 'search'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

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
        />
        <Navbar />
        <main className="flex-1">
          {currentPage === 'home' ? (
            <>
              <Hero />
              <CuradoriaSection />
              <InstagramSection />
              <FullProductGrid 
                onBeachHatsClick={goToBeachHats} 
                onFishingClick={goToFishing}
                onPromotionsClick={goToPromotions} 
              />
            </>
          ) : currentPage === 'beach-hats' ? (
            <BeachHatsPage onBack={goToHome} />
          ) : currentPage === 'fishing' ? (
            <FishingProductsPage onBack={goToHome} />
          ) : currentPage === 'promotions' ? (
            <PromotionsPage onBack={goToHome} />
          ) : currentPage === 'login' ? (
            <LoginPage onBack={goToHome} />
          ) : currentPage === 'support' ? (
            <SupportPage onBack={goToHome} />
          ) : currentPage === 'cart' ? (
            <CartPage onBack={goToHome} />
          ) : (
            <SearchResultsPage query={searchQuery} results={searchResults} onBack={goToHome} />
          )}
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
}
