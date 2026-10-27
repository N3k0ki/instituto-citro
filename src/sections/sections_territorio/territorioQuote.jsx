import React from 'react';
import { motion } from 'framer-motion';
import '../../index.css';

function TerritorioQuote() {
  return (
    <section className="w-full bg-[#FDFBF7] py-20 lg:py-28 px-6 overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2E35] leading-tight mb-8 tracking-tight">
            Conectar pessoas, preservar histórias, produzir conhecimento e transformar talento em oportunidade.
          </h2>

          {/* Citação de Paulo Freire */}
          <blockquote className="border-l-4 border-[#C85227] pl-5 sm:pl-6 py-1 mb-10">
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#5C3D2E] italic leading-relaxed mb-2">
              “Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.”
            </p>
            <footer className="text-xs sm:text-sm font-semibold text-[#8C4356]">
              – Paulo Freire, educador e filósofo brasileiro.
            </footer>
          </blockquote>

          {/* Botão Nossas Atuações */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#atuacao"
              className="inline-flex items-center gap-3 bg-[#6B4355] hover:bg-[#573544] text-white font-medium px-6 py-3.5 rounded-xl shadow transition-all duration-300 ease-in-out hover:-translate-y-0.5"
            >
              <span>Nossas atuações</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default TerritorioQuote;