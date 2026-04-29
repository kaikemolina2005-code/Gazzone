import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import bgInstagram from './bg_instagram.jpeg';
import imgInstagramProfile from './instagram_profile.jpeg';

export default function InstagramSection() {
  return (
    <section 
      className="relative py-28 overflow-hidden bg-center bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: `url(${bgInstagram})` }}
    >
      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 text-white backdrop-blur-md rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Instagram className="w-4 h-4" />
              <span>Dicas & Tendências</span>
            </div>
            <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8 text-white drop-shadow-2xl">
              Siga a <br />
              <span className="text-yellow-400">Gazz Beauty</span> <br /> 
              no Instagram
            </h2>
            <p className="text-white font-bold max-w-md mx-auto lg:mx-0 mb-10 text-lg drop-shadow-md">
              Acompanhe nosso dia a dia, confira lançamentos exclusivos e inspire-se com as melhores dicas de estilo.
            </p>
            <a 
              href="https://instagram.com/gazzbeauty" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#7a3166] px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-2xl rounded-full"
            >
              @GazzBeauty
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Floating Phone Mockup */}
          <div className="flex-1 relative">
            <motion.div 
              initial={{ y: 0 }}
              whileInView={{ y: [-15, 15, -15] }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              viewport={{ once: false }}
              className="relative z-10 w-[280px] lg:w-[320px] aspect-[9/19] mx-auto bg-black rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-[8px] border-gray-900"
            >
              {/* Phone Content / Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                <img 
                  src={imgInstagramProfile} 
                  alt="Instagram Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[3rem]" />
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7a3166]/5 rounded-full blur-3xl -z-0" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7a3166]/10 rounded-full blur-2xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
