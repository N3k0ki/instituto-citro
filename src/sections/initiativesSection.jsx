import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Megaphone, Laptop } from 'lucide-react';

function InitiativesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cards = [
    {
      title: "Educação",
      desc: "Capacitação de jovens, lideranças e comunidades para ampliar oportunidades pessoais, profissionais e cidadãs.",
      icon: <BookOpen className="w-10 h-10 text-[#C85227] mb-4 md:mb-6" />,
      color: "bg-[#C85227]",
    },
    {
      title: "Comunicação",
      desc: "Jornalismo comunitário, podcast, locução e redes sociais com escuta e responsabilidade.",
      icon: <Megaphone className="w-10 h-10 text-[#C85227] mb-4 md:mb-6" />,
      color: "bg-[#EAB308]",
    },
    {
      title: "Inovação",
      desc: "Projetos colaborativos que unem tecnologia, empreendedorismo, sustentabilidade e fortalecimento das redes locais.",
      icon: <Laptop className="w-10 h-10 text-[#C85227] mb-4 md:mb-6" />,
      color: "bg-[#78866B]",
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#FDFBF9]">
      <div className="max-w-7xl px-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 md:mb-16 text-center md:text-left mx-auto md:mx-0"
        >
          <span className="text-[#C85227] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 md:mb-4">
            NOSSO FOCO INICIAL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#5C3D2E] leading-tight mb-4 md:mb-6">
            Iniciativas que transformam potencial em oportunidades.
          </h2>
          <p className="text-[#5C3D2E] text-base md:text-lg">
            Atuamos em diferentes frentes para fortalecer o território, conectando conhecimento, inovação, cultura e participação social.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="bg-white rounded-b-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full"
            >
              <div className={`h-2 md:h-3 w-full ${card.color}`}></div>
              <div className="p-6 md:p-8 flex-grow">
                {card.icon}
                <h3 className="text-xl md:text-2xl font-bold text-[#5C3D2E] mb-3 md:mb-4">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center md:justify-start"
        >
           <a href="#trilhas" className="inline-flex items-center gap-2 border border-[#EAB308] text-[#EAB308] font-bold py-3 px-6 rounded-lg hover:bg-[#EAB308]/10 transition-colors text-sm md:text-base w-full md:w-auto justify-center">
              Conhecer nossas trilhas
              <span className="text-lg md:text-xl">→</span>
           </a>
        </motion.div>
      </div>
    </section>
  );
}
export default InitiativesSection;