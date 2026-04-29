/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, User, Lock, Mail, Github, Chrome } from 'lucide-react';
import { useState } from 'react';

interface LoginPageProps {
  onBack: () => void;
}

export default function LoginPage({ onBack }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-gray-50 min-h-screen py-20"
    >
      <div className="container-wide max-w-lg">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-10 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Voltar para Loja</span>
        </button>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black uppercase tracking-tighter text-gazz-ink mb-2">
              {isLogin ? 'Bem-vindo de volta' : 'Criar sua conta'}
            </h1>
            <p className="text-gray-500 font-medium whitespace-nowrap">
              {isLogin ? 'Acesse sua conta para gerenciar pedidos.' : 'Cadastre-se para aproveitar benefícios.'}
            </p>
          </div>

          <div className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Nome Completo</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full border border-gray-200 py-3.5 px-12 rounded-xl text-sm focus:ring-1 focus:ring-gazz-ink focus:border-gazz-ink outline-none transition-all"
                  />
                  <User className="w-5 h-5 text-gray-300 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            )}

            <div className="relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">E-mail</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="exemplo@email.com"
                  className="w-full border border-gray-200 py-3.5 px-12 rounded-xl text-sm focus:ring-1 focus:ring-gazz-ink focus:border-gazz-ink outline-none transition-all"
                />
                <Mail className="w-5 h-5 text-gray-300 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Senha</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full border border-gray-200 py-3.5 px-12 rounded-xl text-sm focus:ring-1 focus:ring-gazz-ink focus:border-gazz-ink outline-none transition-all"
                />
                <Lock className="w-5 h-5 text-gray-300 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gazz-ink transition-colors">
                  Esqueceu a senha?
                </button>
              </div>
            )}

            <button className="w-full bg-gazz-ink text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-black transition-colors shadow-lg shadow-purple-500/10">
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <div className="relative flex justify-center text-[10px]"><span className="px-4 bg-white text-gray-400 font-bold uppercase tracking-widest">Ou use</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border border-gray-100 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors text-xs font-bold">
                <Chrome className="w-4 h-4" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-100 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors text-xs font-bold">
                <Github className="w-4 h-4" /> Facebook
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-xs font-medium">
              {isLogin ? 'Ainda não tem conta?' : 'Já possui uma conta?'}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-black uppercase tracking-widest text-gazz-ink hover:underline decoration-2 underline-offset-4"
              >
                {isLogin ? 'Crie agora' : 'Entre aqui'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
