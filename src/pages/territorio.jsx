import React from 'react';
import { motion } from 'framer-motion';
// Substitua pelo caminho correto da sua imagem de fundo do pórtico
import territorioBg from '../assets/colonia.png'; 
import Desafios from '../sections/sections_territorio/desafios.jsx';
import TerritorioAtivos from '../sections/sections_territorio/territorioAtivos.jsx';
import TerritorioQuote from '../sections/sections_territorio/territorioQuote.jsx';
import '../index.css';

function Territorio() {
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
    <main className="w-full">
    <section className="relative w-full px-6 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      
      {/* Fundo: Imagem de fundo preenchendo o ecrã com gradiente para leitura clara do texto */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${territorioBg})` }}
      >
        {/* Overlay em gradiente escuro e suave do roxo/marrom para garantir contraste com o texto branco */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/75 to-transparent md:w-3/4 lg:w-2/3"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-16">
        <motion.div 
          className="max-w-xl lg:max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#b37cbd]"></span>
            <span className="text-[#b37cbd] font-bold text-xs sm:text-sm tracking-widest uppercase">
              CONTEXTO E POTÊNCIA
            </span>
          </motion.div>

          {/* Título Principal com destaque roxo e branco */}
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-white leading-[1.2] mb-6">
            <span className="text-[#b37cbd]">Citrolândia</span> e <span className="text-[#b37cbd]">Colônia Santa Isabel:</span><br />
            Um território que transformou desafios em identidade
          </motion.h1>

          {/* Texto descritivo */}
          <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-100 leading-relaxed font-normal max-w-xl">
            Toda comunidade carrega histórias que revelam quem ela é. Em Citrolândia, elas são marcadas pela
            resistência, pela memória e pela capacidade de criar novos caminhos diante dos desafios. Entre estigmas e
            desigualdades, a comunidade preservou suas histórias, fortaleceu seus vínculos e encontrou formas
            próprias de transformar sua realidade.
          </motion.p>

        </motion.div>
      </div>
    </section>

    <Desafios />
    <TerritorioAtivos />
    <TerritorioQuote />
    </main>
  );
}

export default Territorio;