/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, KeyboardEvent } from 'react';
import { Search, UserCircle, Phone, ShoppingBag } from 'lucide-react';

export default function Header({ onLogoClick, onLoginClick, onSupportClick, onCartClick, onSearch, cartCount = 0 }: { onLogoClick?: () => void, onLoginClick?: () => void, onSupportClick?: () => void, onCartClick?: () => void, onSearch?: (query: string) => void, cartCount?: number }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = () => {
    if (searchValue.trim() && onSearch) {
      onSearch(searchValue.trim());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <header className="bg-white py-3 border-b border-gray-100 relative z-30 shadow-sm">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Logo & Tagline */}
        <div className="flex items-center">
          <button onClick={onLogoClick} className="cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src="/src/components/logo gazzone.jpeg" 
              alt="GAZZ" 
              className="h-24 md:h-32 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full max-w-xl px-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Digite o que você procura..." 
              className="w-full border border-gray-200 py-3 px-5 pr-12 text-sm rounded-xl focus:ring-1 focus:ring-gazz-ink focus:border-gazz-ink outline-none transition-all placeholder:text-gray-400 font-medium"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={handleSearchSubmit}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
            >
              <Search className="w-5 h-5 text-[#7a3166]" />
            </button>
          </div>
        </div>

        {/* User Links */}
        <div className="flex items-center gap-8">
          <button onClick={onLoginClick} className="flex items-center gap-2 group">
            <div className="p-1.5 border border-gray-200 rounded-full group-hover:bg-gray-50 transition-colors">
              <UserCircle className="w-7 h-7 text-[#7a3166] transition-colors" />
            </div>
            <div className="text-left leading-[1.1] hidden lg:block uppercase font-bold text-[10px] tracking-tight">
              <p>Entre ou</p>
              <p>Cadastre</p>
            </div>
          </button>

          <button onClick={onSupportClick} className="flex items-center gap-2 group">
            <div className="p-1.5 border border-gray-200 rounded-full group-hover:bg-gray-50 transition-colors">
              <Phone className="w-6 h-6 text-[#7a3166] transition-colors" />
            </div>
            <div className="text-left leading-[1.1] hidden lg:block uppercase font-bold text-[10px] tracking-tight">
              <p>Central de</p>
              <p>Suporte</p>
            </div>
          </button>

          <button onClick={onCartClick} className="flex items-center gap-2 group relative">
            <div className="relative">
              <ShoppingBag className="w-8 h-8 text-[#7a3166] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7a3166] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-left leading-[1.1] hidden lg:block uppercase font-bold text-[10px] tracking-tight">
              <p>Carrinho</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
