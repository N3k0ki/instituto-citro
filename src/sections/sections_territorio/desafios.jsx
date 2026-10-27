import React from 'react';
import { motion } from 'framer-motion';
// Substitua pelos caminhos corretos das imagens dos cards
import desafio1 from '../../assets/desafios.png';
import desafio2 from '../../assets/memoria.png';
import desafio3 from '../../assets/desigualdade.png';
import '../../index.css';

function TerritorioDesafios() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="w-full bg-[#fcf9f5] py-20 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#583725] mb-6 tracking-tight">
            Desafios que fazem parte da nossa história.
          </h2>
          <p className="text-sm sm:text-base text-[#583725] leading-relaxed font-medium">
            Essas marcas ainda influenciam a forma como o território é percebido e as oportunidades que chegam até ele. Mas olhar para esses desafios não significa definir o território por suas dificuldades. Significa compreender sua história para construir, a partir dela, novas possibilidades.
          </p>
        </motion.div>

        {/* Grid de Cards com Imagens de Fundo */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Card 1: Desafios socioambientais */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden shadow-lg h-[360px] flex items-end p-8 bg-stone-300 transition-transform duration-300 hover:-translate-y-2"
          >
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${desafio1})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Desafios <br />socioambientais
            </h3>
          </motion.div>

          {/* Card 2: Memória, hanseníase e estigma */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden shadow-lg h-[360px] flex items-end p-8 bg-stone-300 transition-transform duration-300 hover:-translate-y-2"
          >
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${desafio2})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Memória, <br />hanseníase e <br />estigma
            </h3>
          </motion.div>

          {/* Card 3: Desigualdade de oportunidades */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden shadow-lg h-[360px] flex items-end p-8 bg-stone-300 transition-transform duration-300 hover:-translate-y-2"
          >
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${desafio3})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>
            <h3 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Desigualdade de <br />oportunidades
            </h3>
          </motion.div>

        </motion.div>

        {/* Reticências decorativas finais */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center gap-2 mt-12 text-[#8c5a6d] text-2xl font-black tracking-widest select-none"
        >

        </motion.div>

      </div>
    </section>
  );
}

export default TerritorioDesafios;