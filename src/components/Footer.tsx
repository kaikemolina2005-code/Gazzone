/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Youtube, Phone, MessageCircle, Mail, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import logoImg from './logo gazzone.jpeg';

export default function Footer() {
  return (
    <footer className="pt-16 pb-6 border-t border-gray-100 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Social */}
          <div className="lg:col-span-1">
            <img 
              src={logoImg} 
              alt="Gazzone Logo" 
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-[13px] text-gray-600 mb-6 font-medium">A bolsa certa é a que combina com você.</p>
            
            <button className="bg-black text-white px-8 py-3 rounded-xl text-sm font-black mb-10 hover:opacity-80 transition-opacity">
              Saiba Mais
            </button>

            <h4 className="font-bold text-[16px] text-gazz-ink mb-4">Siga - nos nas redes!</h4>
            <div className="flex gap-2">
               <a href="https://www.facebook.com/profile.php?id=100090743631994&mibextid=kFxxJD&rdid=eaPdBv7eD0VRo1pL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F159xryohdY%2F%3Fmibextid%3DkFxxJD#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"><Facebook className="w-5 h-5 text-gray-700" /></a>
               <a href="https://www.youtube.com/channel/UCQOt62zCkUtTuI3x2Mk6L-g" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"><Youtube className="w-5 h-5 text-gray-700" /></a>
               <a href="https://www.instagram.com/gazzbeauty" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"><Instagram className="w-5 h-5 text-gray-700" /></a>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-black text-lg mb-8 text-gazz-ink">Categorias</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Mochilas</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Chapéus</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Bolsas</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Malas</a></li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-black text-lg mb-8 text-gazz-ink">Institucional</h3>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Quem somos</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Meios de pagamento e de frete</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-gazz-ink transition-colors">Política de Trocas e Devoluções</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="font-black text-lg mb-8 text-gazz-ink">Atendimento</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-black" />
                <span>Telefone: (11) 93090-6531</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-black" />
                <span>Whatsapp: (11) 93090-6531</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-black" />
                <div className="flex flex-col">
                  <span>E-mail:</span>
                  <span className="text-gray-500">gazzonebeauty@outlook.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment and Seals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-100 mb-12">
          <div>
            <h4 className="font-black text-lg mb-6">Pague com</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-black italic text-blue-800 shadow-sm">VISA</div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-black italic text-red-600 shadow-sm">MASTER</div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-black italic text-gray-400 shadow-sm">ELO</div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-black italic text-blue-500 shadow-sm tracking-tighter">DINERS</div>
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[8px] font-black italic text-blue-900 shadow-sm">AMEX</div>
              <div className="h-10 px-4 bg-white border border-gray-200 rounded flex items-center gap-2 shadow-sm">
                <div className="w-4 h-5 bg-gray-800 rounded-sm"></div>
                <div className="text-[8px] font-black uppercase leading-none">Boleto<br/>Bancário</div>
              </div>
              <div className="h-10 px-4 bg-white border border-gray-200 rounded flex items-center gap-2 shadow-sm font-black text-cyan-500 uppercase text-[10px]">
                <div className="w-4 h-4 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                   <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                </div>
                Pix
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-black text-lg mb-6">Selos</h4>
            <div className="flex flex-wrap items-center gap-4">
               <div className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded-xl bg-gray-50/50 shadow-sm">
                 <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200 text-white">
                   <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Compra Segura</span>
                   <span className="text-[11px] font-black uppercase text-gray-700 leading-none">Site Protegido</span>
                 </div>
               </div>

               <div className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded-xl bg-gray-50/50 shadow-sm">
                 <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 text-white">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <div className="flex flex-col text-gray-700">
                   <span className="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Google</span>
                   <span className="text-[11px] font-black uppercase text-gray-700 leading-none">Safe Browsing</span>
                 </div>
               </div>

               <div className="flex items-center gap-3 border border-gray-200 px-4 py-3 rounded-xl bg-gray-50/50 shadow-sm">
                 <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg shadow-gray-200 text-white">
                   <Lock className="w-5 h-5 text-green-400" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[11px] font-black uppercase text-gray-700 leading-none">SSL Certificado</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100 text-center">
           <p className="text-[11px] text-gray-400 font-bold uppercase tracking-tight">
             GAZZONA BEAUTY CENTER COMERCIAL LTDA - CNPJ: 41.637.750/0001-29 © Todos os direitos reservados, 2018
           </p>
        </div>
      </div>
    </footer>
  );
}
