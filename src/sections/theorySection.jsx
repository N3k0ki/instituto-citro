import React from 'react';
import { motion } from 'framer-motion';
import teamImage from '../assets/theory-section-image.jpg'; // Substitua pelo caminho da sua imagem real
import logoCitro from '../assets/logo_instituto.svg';

function TheoryOfChangeSection() {
  return (
    <section className="py-16 md:py-24 px-10 bg-[#F5F1EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative order-2 lg:order-1"
          >
            <img 
              src={teamImage} 
              alt="Jovens aprendendo a usar câmera" 
              className="w-full h-auto object-cover rounded-md md:rounded-sm shadow-md lg:shadow-none"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3 mb-4 md:mb-6">
               <img src={logoCitro} alt="Citrô" className="w-6 h-6 md:w-8 md:h-8" />
               <span className="text-[#C85227] font-bold tracking-widest text-sm md:text-base">CITRÔ</span>
            </div>
            
            <span className="text-[#C85227] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 md:mb-4">
              TEORIA DA MUDANÇA
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#5C3D2E] leading-tight mb-4 md:mb-6">
              Fazer junto é o nosso ponto de partida.
            </h2>
            
            <p className="text-[#5C3D2E] text-base md:text-lg leading-relaxed">
              Nenhuma solução é construída sozinha. Incentivamos a colaboração entre pessoas, organizações e parceiros para desenvolver iniciativas que deixem um legado positivo.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
export default TheoryOfChangeSection;