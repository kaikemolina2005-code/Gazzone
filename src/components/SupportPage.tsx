/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, Phone, Mail, HelpCircle, FileText, Send } from 'lucide-react';

interface SupportPageProps {
  onBack: () => void;
}

export default function SupportPage({ onBack }: SupportPageProps) {
  const faqs = [
    { q: "Qual o prazo de entrega?", a: "O prazo de entrega varia entre 5 a 15 dias úteis, dependendo da sua região." },
    { q: "Como rastrear meu pedido?", a: "Você receberá um código de rastreio em seu e-mail logo após o envio do pedido." },
    { q: "Posso trocar meu produto?", a: "Sim, oferecemos trocas gratuitas em até 7 dias após o recebimento do produto." },
    { q: "Quais as formas de pagamento?", a: "Aceitamos Cartões de Crédito, PIX e Boleto Bancário." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="bg-white min-h-screen pb-20"
    >
      {/* Header Area */}
      <div className="bg-gazz-ink text-white py-20 overflow-hidden relative">
        <div className="container-wide relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Voltar para Loja</span>
          </button>
          
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">Como podemos <br/>ajudar você?</h1>
          <p className="text-white/70 max-w-lg font-medium text-lg">Estamos prontos para tirar suas dúvidas e garantir que sua experiência com a Gazzone seja excelente.</p>
        </div>
        
        {/* Abstract decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>

      <div className="container-wide -mt-16 relative z-20">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group hover:border-[#25D366] transition-colors">
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7 text-[#25D366]" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gazz-ink mb-2">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-6">Atendimento rápido e direto com nossa equipe.</p>
            <a href="https://wa.me/5511930906531" className="text-xs font-black uppercase tracking-widest text-[#25D366] flex items-center gap-2">
              Iniciar conversa <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group hover:border-blue-500 transition-colors">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gazz-ink mb-2">E-mail</h3>
            <p className="text-gray-500 text-sm mb-6">Envie suas dúvidas detalhadas para nossa equipe.</p>
            <a href="mailto:contato@gazzone.com" className="text-xs font-black uppercase tracking-widest text-blue-500 flex items-center gap-2">
              Enviar e-mail <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group hover:border-purple-500 transition-colors">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gazz-ink mb-2">Telefone</h3>
            <p className="text-gray-500 text-sm mb-6">Segunda a Sexta, das 09h às 18h.</p>
            <span className="text-xs font-black uppercase tracking-widest text-purple-500">(11) 93090-6531</span>
          </div>
        </div>

        {/* FAQ & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle className="w-8 h-8 text-gazz-ink" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">Perguntas Frequentes</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-6 group">
                  <h4 className="text-sm font-black uppercase tracking-widest text-gazz-ink mb-3 group-hover:text-purple-600 transition-colors cursor-pointer">{faq.q}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-7 h-7 text-gazz-ink" />
              <h2 className="text-2xl font-black uppercase tracking-tighter">Envie uma mensagem</h2>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Assunto</label>
                <select className="w-full bg-white border border-gray-200 py-3.5 px-6 rounded-xl text-sm focus:ring-1 focus:ring-gazz-ink outline-none">
                  <option>Dúvida sobre Produto</option>
                  <option>Status do Pedido</option>
                  <option>Troca e Devolução</option>
                  <option>Parcerias</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Mensagem</label>
                <textarea rows={4} className="w-full bg-white border border-gray-200 py-4 px-6 rounded-xl text-sm focus:ring-1 focus:ring-gazz-ink outline-none resize-none placeholder:text-gray-300" placeholder="Como podemos ajudar..."></textarea>
              </div>
              <button className="w-full bg-gazz-ink text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black transition-colors">
                <Send className="w-4 h-4" /> Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
