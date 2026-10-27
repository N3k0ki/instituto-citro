import React from 'react';
import { motion } from 'framer-motion';
import { Book, Sprout, HeartHandshake } from 'lucide-react'; 

function EssenceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const cards = [
    {
      title: "Missão",
      desc: "Fortalecer pessoas e comunidades conectando educação, cultura e oportunidades por meio de programas de comunicação e produção audiovisual.",
      icon: <Book className="w-8 h-8 text-[#C85227] mb-4 md:mb-6" />,
      color: "bg-[#8EAFBB]",
    },
    {
      title: "Visão",
      desc: "Um território sustentável, participativo e capaz de criar seus próprios futuros.",
      icon: <Sprout className="w-8 h-8 text-[#C85227] mb-4 md:mb-6" />,
      color: "bg-[#78866B]",
    },
    {
      title: "Valores",
      desc: "Escuta ativa de novas vozes, diversidade nas telas, transparência, cooperação criativa e compromisso com as histórias do território.",
      icon: <HeartHandshake className="w-8 h-8 text-[#C85227] mb-4 md:mb-6" />,
      color: "bg-[#EAB308]",
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center md:text-left"
        >
          <span className="text-[#C85227] font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 md:mb-4">
            NOSSA ESSÊNCIA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#5C3D2E] leading-tight max-w-2xl mx-auto md:mx-0">
            Três páginas para conhecer o que nos move.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="flex flex-col bg-white shadow-sm md:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 md:border-none rounded-b-lg"
            >
              <div className={`h-2 md:h-3 w-full ${card.color}`}></div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                {card.icon}
                <h3 className="text-xl md:text-2xl font-bold text-[#5C3D2E] mb-3 md:mb-4">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 flex-grow">{card.desc}</p>
                <a href={`#${card.title.toLowerCase()}`} className="inline-flex items-center gap-2 text-[#C85227] font-bold hover:gap-3 transition-all text-sm md:text-base mt-auto">
                  Conhecer <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default EssenceSection;