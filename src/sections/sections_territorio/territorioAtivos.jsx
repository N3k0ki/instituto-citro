import React from 'react';
import { motion } from 'framer-motion';
import '../../index.css';

// Ícones SVG inline para os cards de Ativos
function IconMemoria() {
  return (
    <svg className="w-8 h-8 text-[#6B4355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
    </svg>
  );
}

function IconCultura() {
  return (
    <svg className="w-8 h-8 text-[#6B4355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function IconJuventude() {
  return (
    <svg className="w-8 h-8 text-[#6B4355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconComercio() {
  return (
    <svg className="w-8 h-8 text-[#6B4355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function IconComunicacao() {
  return (
    <svg className="w-8 h-8 text-[#6B4355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function IconRedes() {
  return (
    <svg className="w-8 h-8 text-[#6B4355]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function TerritorioAtivos() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const ativosList = [
    {
      icon: <IconMemoria />,
      title: "Memória e patrimônio",
      desc: "Histórias de vida, fotografias, documentos e referências da Colônia Santa Isabel formam um patrimônio que precisa ser preservado, pesquisado e compartilhado."
    },
    {
      icon: <IconCultura />,
      title: "Cultura e criatividade",
      desc: "Artistas, produtores, coletivos e saberes populares movimentam o território e revelam diferentes formas de criar, contar histórias e gerar valor."
    },
    {
      icon: <IconJuventude />,
      title: "Juventude e talentos",
      desc: "Existe uma nova geração com repertório digital, criatividade e vontade de produzir. O CITRÔ cria caminhos para transformar esse potencial em experiência, portfólio e oportunidade."
    },
    {
      icon: <IconComercio />,
      title: "Comércio e iniciativas locais",
      desc: "Pequenos negócios, trabalhadores e iniciativas comunitárias fazem parte da economia cotidiana e podem se fortalecer por meio de redes, comunicação e conhecimento."
    },
    {
      icon: <IconComunicacao />,
      title: "Comunicação comunitária",
      desc: "Rádios, jornais, portais, coletivos e iniciativas independentes mostram que a comunicação sempre fez parte da mobilização do território."
    },
    {
      icon: <IconRedes />,
      title: "Redes e participação",
      desc: "Associações, lideranças, organizações e redes de cuidado já mobilizam pessoas. Conectar essas iniciativas amplia sua capacidade de colaboração e transformação."
    }
  ];

  return (
    <section className="w-full bg-[#735a78] text-white py-20 lg:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Secção */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#fff6ea]-200">
            ATIVOS DO TERRITÓRIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6 leading-tight">
            O território já tem muito <br className="hidden sm:block" />
            para construir
          </h2>
          <p className="text-sm sm:text-base text-[#fff6ea]/90 leading-relaxed font-medium">
            Antes de criar novas soluções, é preciso reconhecer aquilo que já existe. Citrolândia possui histórias, talentos, iniciativas, redes e conhecimentos construídos ao longo de gerações. O papel do CITRÔ é conectar esses ativos, ampliar sua circulação e transformá-los em formação, comunicação e oportunidades.
          </p>
        </motion.div>

        {/* Grelha de Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ativosList.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 text-slate-800 shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
            >
              <div>
                <div className="p-3.5 bg-[#F5EFEB] rounded-xl w-fit mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4A2E35] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default TerritorioAtivos;