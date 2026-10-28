import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HeartHandshake, BookType, ArrowRight } from 'lucide-react';
// Substitui pelo caminho correto da imagem real
import participateImage from '../assets/citro-tecnologia.jpg'; 

function FacaParte() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#FDFBF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contentor Grid: 1 coluna no telemóvel, 2 colunas no computador */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Esquerda (Texto, Cartões e Botão) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col"
          >
            {/* Tagline e Título */}
            <motion.span variants={fadeUpVariant} className="text-[#C85227] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block">
              FAÇA PARTE
            </motion.span>
            
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#5C3D2E] leading-tight mb-4">
              Existe um lugar para você nesta rede.
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-[#5C3D2E] text-base md:text-lg mb-8 md:pr-10 leading-relaxed">
              Aprenda uma nova linguagem, ensine o que você domina ou contribua com sua experiência em comunicação, audiovisual e tecnologia.
            </motion.p>

            {/* Contentor dos Cartões (Grid uniforme de 3 colunas em sm, 2 em mobile com span correto) */}
            <motion.div variants={fadeUpVariant} className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-10">
              
              {/* Cartão 1 - Como aluno */}
              <div className="bg-[#e99a12] rounded-xl p-4 md:p-5 flex flex-col justify-between aspect-square sm:aspect-auto sm:h-36 transition-transform hover:-translate-y-1">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-[#5C3D2E] mb-4" strokeWidth={1.5} />
                <span className="text-[#5C3D2E] font-bold text-sm md:text-base leading-tight">Como aluno</span>
              </div>

              {/* Cartão 2 - Como patrocinador */}
              <div className="bg-[#8EAFBB] rounded-xl p-4 md:p-5 flex flex-col justify-between aspect-square sm:aspect-auto sm:h-36 transition-transform hover:-translate-y-1">
                <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-[#5C3D2E] mb-4" strokeWidth={1.5} />
                <span className="text-[#5C3D2E] font-bold text-sm md:text-base leading-tight">Como patrocinador</span>
              </div>

              {/* Cartão 3 - Como educador (Corrigido col-span para ficar igual aos outros) */}
              <div className="bg-[#78866B] rounded-xl p-4 md:p-5 flex flex-col justify-between aspect-square sm:aspect-auto sm:h-36 transition-transform hover:-translate-y-1 col-span-1">
                <BookType className="w-6 h-6 md:w-8 md:h-8 text-[#1f2937] mb-4" strokeWidth={1.5} />
                <span className="text-[#1f2937] font-bold text-sm md:text-base leading-tight">Como educador</span>
              </div>

            </motion.div>

            {/* Botão de Ação */}
            <motion.div variants={fadeUpVariant}>
              <a 
                href="#participar" 
                className="inline-flex items-center justify-center gap-2 bg-[#C85227] text-white px-6 py-4 rounded-lg font-bold text-[15px] transition-all duration-300 hover:bg-[#a6401d] hover:shadow-md active:scale-[0.98] w-full sm:w-auto"
              >
                Escolha como participar
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna da Direita (Imagem) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={participateImage} 
              alt="Jovens aprendendo em frente a computadores" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FacaParte;