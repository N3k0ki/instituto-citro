import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Dados dos 4 programas
const programasData = [
  {
    id: '01',
    title: 'CITRÔ Comunica',
    color: '#C85227',
    desc: 'Jornalismo comunitário, audiovisual, podcast, informação de interesse público e educação midiática.',
    items: [
      'Reportagens, entrevistas e boletins',
      'Estúdio de jornalismo, podcast e áudio',
      'Campanhas de utilidade pública',
      'Checagem e enfrentamento à desinformação',
    ],
    link: '#programa-1',
    icon: (
      <svg className="w-8 h-8 text-[#C85227]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'CITRÔ Lab',
    color: '#5C7241',
    desc: 'Cursos, oficinas, prática supervisionada, tecnologia, produção e desenvolvimento de portfólio.',
    items: [
      'Cursos, oficinas e laboratórios',
      'Prática supervisionada em produção real',
      'Mentorias e projetos integradores',
      'Portfólio para oportunidades profissionais',
    ],
    link: '#programa-2',
    icon: (
      <svg className="w-8 h-8 text-[#5C7241]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'CITRÔ Memória',
    color: '#7B4275',
    desc: 'História oral, arquivos, fotografias, documentários, identidade e enfrentamento ao estigma.',
    items: [
      'Registro de histórias de vida',
      'Digitalização de fotos e documentos',
      'Documentários, séries e exposições',
      'Arquivo audiovisual comunitário',
    ],
    link: '#programa-3',
    icon: (
      <svg className="w-8 h-8 text-[#7B4275]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'CITRÔ Conecta',
    color: '#B84236',
    desc: 'Coworking, mentorias, banco de talentos, inclusão produtiva e fortalecimento de redes.',
    items: [
      'Coworking comunitário e apoio a egressos',
      'Banco de talentos e oportunidades',
      'Contratos, precificação e empreendedorismo',
      'Parcerias e incubação de iniciativas',
    ],
    link: '#programa-4',
    icon: (
      <svg className="w-8 h-8 text-[#B84236]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
];

function ProgramasCarrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function handleNext() {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % programasData.length);
  }

  function handlePrev() {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + programasData.length) % programasData.length);
  }

  function handleDotClick(index) {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }

  // Variantes de animação do Framer Motion para transições suaves
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  };

  const currentProgram = programasData[currentIndex];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Cabeçalho do Carrossel com Controles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C85227]">
              PROGRAMAS CITRÔ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E35] mt-1">
              Conheça as nossas frentes de atuação
            </h2>
          </div>

          {/* Botões de Navegação */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Programa Anterior"
              className="p-3.5 rounded-full bg-white border border-stone-200 text-[#4A2E35] hover:bg-[#F5EFEB] shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Próximo Programa"
              className="p-3.5 rounded-full bg-[#C85227] text-white shadow-md hover:bg-[#b0431f] transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Área do Card Principal (Carrossel) */}
        <div className="relative min-h-[460px] flex items-center justify-center overflow-hidden py-4">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -100) {
                  handleNext();
                } else if (swipe > 10000 || offset.x > 100) {
                  handlePrev();
                }
              }}
              className="w-full max-w-3xl bg-white rounded-2xl p-8 sm:p-10 shadow-xl border-t-8 flex flex-col justify-between cursor-grab active:cursor-grabbing select-none"
              style={{ borderColor: currentProgram.color }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#F5EFEB] rounded-xl">
                    {currentProgram.icon}
                  </div>
                  <span className="text-3xl font-black" style={{ color: currentProgram.color }}>
                    {currentProgram.id}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4A2E35] mb-3">
                  {currentProgram.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {currentProgram.desc}
                </p>

                <hr className="border-stone-200 mb-6" />

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 mb-8">
                  {currentProgram.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-base" style={{ color: currentProgram.color }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-2">
                <a
                  href={currentProgram.link}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold hover:underline transition-all"
                  style={{ color: currentProgram.color }}
                >
                  <span>Ver programa</span>
                  <span>→</span>
                </a>

                <span className="text-xs font-semibold text-stone-400">
                  {currentIndex + 1} de {programasData.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores em Pontos (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {programasData.map((prog, idx) => (
            <button
              key={prog.id}
              onClick={() => handleDotClick(idx)}
              aria-label={`Ir para programa ${prog.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-[#C85227]'
                  : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProgramasCarrossel;