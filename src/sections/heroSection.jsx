import React from 'react';
import { motion } from 'framer-motion';
// Substitua pelo caminho correto da imagem de fundo
import heroBg from '../assets/hero-image.png'; 
import '../index.css';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="relative w-full px-6 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      
      {/* Fundo: Imagem preenche o ecrã com um gradiente sobreposto */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/85 to-white/30 md:via-white/70 md:to-transparent"></div>
      </motion.div>

      {/* Wrapper do Conteúdo com margens (padding) aumentadas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-12">
        <motion.div 
          className="max-w-[28rem] md:max-w-lg lg:max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-[#C85227]"></span>
            <span className="text-[#C85227] font-bold text-[10px] md:text-xs tracking-widest uppercase">
              Comunicação • Formação • Território
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 variants={itemVariants} className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#5C3D2E] leading-[1.15] mb-5">
            Comunicação que <br />
            transformam <br />
            territórios.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p variants={itemVariants} className="text-[15px] md:text-base text-[#1e293b] mb-8 leading-relaxed font-medium pr-4">
            Formação, jornalismo comunitário e produção audiovisual para fortalecer vozes, memórias e oportunidades.
          </motion.p>

          {/* Botões */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 w-full">
            <a 
              href="#conheca" 
              className="
                w-full md:w-auto
                text-center bg-[#C85227] text-white 
                px-6 py-4 rounded-lg font-bold text-[14px] md:text-[15px]
                transition-all duration-300 ease-in-out
                hover:bg-[#a6401d] hover:shadow-md active:scale-[0.98]
              "
            >
              Conheça o Instituto
            </a>
            
            <a 
              href="#faca-parte" 
              className="
                w-full md:w-auto
                text-center bg-white text-[#5C3D2E] 
                border border-gray-200 
                px-6 py-4 rounded-lg font-bold text-[14px] md:text-[15px]
                transition-all duration-300 ease-in-out
                hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]
              "
            >
              Faça parte
            </a>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;