import React from 'react';
import { motion } from 'framer-motion';

// Importação da imagem do banner
import Casas from '../assets/casas.png';

// Componente para renderizar imagem enviada com fallback seguro
function ImageSlot({ src, alt = "Imagem da seção", className = "" }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden bg-transparent ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#C85227]/40 bg-[#F5EFEB] rounded-2xl">
          <svg className="w-10 h-10 text-[#C85227] mb-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C85227]">
            [Imagem não carregada]
          </span>
        </div>
      )}
    </div>
  );
}

// Ícones SVG inline para os 6 Ambientes
function IconJornalismo() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

function IconPodcast() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 010 12.728M12 12a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

function IconLaboratorio() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconCoworking() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconEquipamentos() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function IconMemoriaAmbiente() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function Citro() {
  return (
    <main className="w-full bg-[#FFFFFF] text-slate-800 font-sans overflow-x-hidden">

      {/* SEÇÃO 1: CABEÇALHO DA PÁGINA */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full py-10 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C85227]">
              O CITRÔ
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4A2E35] leading-tight">
              Uma estrutura social <br />
              permanente.
            </h1>

            <p className="text-base sm:text-lg text-[#5C3D2E]/90 leading-relaxed mt-2">
              O Instituto CITRÔ nasceu da convicção de que todo território deve ter condições de produzir sua própria informação, preservar suas memórias e criar oportunidades para seus talentos.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SEÇÃO 2: NOSSA ESSÊNCIA (VALORES E PILARES) */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#FFF6EA]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Texto de Apresentação da Essência */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 flex flex-col gap-3"
            >
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C85227]">
                NOSSA ESSÊNCIA
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#4A2E35] leading-tight">
                O que nos move
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-1">
                O CITRÔ acredita no poder das pessoas e dos territórios. Nossa atuação é guiada por valores que fortalecem comunidades, ampliam oportunidades e constroem futuros mais justos.
              </p>
            </motion.div>

            {/* Cards dos 3 Pilares */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              
              {/* Card 1 */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5 }}
                className="bg-[#F9ECE8] p-7 sm:p-8 rounded-2xl border border-rose-100/80 flex flex-col justify-between h-full min-h-[260px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E8C2B8] flex items-center justify-center mb-5 text-[#8C3A2B] shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                    Organização da sociedade civil
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Sem fins lucrativos, criada para conectar comunicação, cultura, formação, tecnologia, participação social e desenvolvimento territorial.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5 }}
                className="bg-[#EEF2E8] p-7 sm:p-8 rounded-2xl border border-emerald-100/80 flex flex-col justify-between h-full min-h-[260px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C7D8B6] flex items-center justify-center mb-5 text-[#43592A] shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                    Nascida de uma convicção
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Todo território deve ter condições de produzir sua própria informação, potencializar suas competências e criar oportunidades para seus talentos.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5 }}
                className="bg-[#EBF1F5] p-7 sm:p-8 rounded-2xl border border-sky-100/80 flex flex-col justify-between h-full min-h-[260px] shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#B8CDE0] flex items-center justify-center mb-5 text-[#2B4B68] shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                    Mais que cursos e estudos
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Uma estrutura de transformação social e autonomia comunitária contínua e sustentável no território.
                  </p>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>
      
      {/* SEÇÃO 3: FAIXA DESTAQUE/MANIFESTO VERDE-ÁGUA */}
      <section className="w-full py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#83A9A3] text-white rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[220px]"
          >
            
            {/* Lado do Texto */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex items-center">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold leading-snug">
                O <span className="text-[#D69E2E]">CITRÔ</span> não nasce para falar pelo território. <br className="hidden sm:inline" />
                Nasce para criar condições para que o território fale por si.
              </h2>
            </div>

            {/* Lado da Imagem */}
            <div className="lg:col-span-5 w-full h-full min-h-[160px] sm:min-h-[200px] flex items-end justify-end overflow-hidden relative">
              <img
                src={Casas}
                alt="Ilustração do Manifesto CITRÔ"
                className="w-full h-auto max-h-[85%] sm:max-h-[95%] lg:max-h-full object-contain object-right-bottom translate-x-2 sm:translate-x-4 block p-0 m-0 border-0 shadow-none"
              />
            </div>

          </motion.div>

        </div>
      </section>

      {/* SEÇÃO 4: AMBIENTES */}
      <section className="w-full py-16 lg:py-24 bg-[#FFF6EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Cabeçalho da Seção */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#B84424]">
                AMBIENTES CITRÔ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A2E35] mt-2 leading-tight">
                Espaços vivos para conectar formação e comunidade.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 max-w-md leading-relaxed">
              Cada espaço foi desenhado como uma estrutura física e tecnológica para sustentar os programas permanentes do território.
            </p>
          </motion.div>

          {/* Grid de 6 Ambientes com Animação em Cascata */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            
            {/* Card 01 - #735A78 (Roxo) */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-[#F3EEF4] rounded-3xl p-7 lg:p-8 border-2 border-[#735A78]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#DBCDE0] text-[#735A78] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    <IconJornalismo />
                  </div>
                  <span className="text-4xl font-black text-[#735A78]/25 select-none font-mono">
                    01
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                  Estúdio de jornalismo e entrevistas
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Para contar histórias, registrar vozes e dar visibilidade às pautas autênticas do território.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#735A78]/20 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#735A78]">
                  Produção & Comunicação
                </span>
                <div className="w-3 h-3 rounded-full bg-[#735A78]" />
              </div>
            </motion.div>

            {/* Card 02 - #B84424 (Terracota) */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-[#FDF0EC] rounded-3xl p-7 lg:p-8 border-2 border-[#B84424]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#FAD2C7] text-[#B84424] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    <IconPodcast />
                  </div>
                  <span className="text-4xl font-black text-[#B84424]/25 select-none font-mono">
                    02
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                  Estúdio de podcast e áudio
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Produção de conteúdo em áudio, com acústica tratada, equipamentos de ponta e apoio técnico.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#B84424]/20 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#B84424]">
                  Voz & Audiovisual
                </span>
                <div className="w-3 h-3 rounded-full bg-[#B84424]" />
              </div>
            </motion.div>

            {/* Card 03 - #583725 (Marrom Terroso) */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-[#FAF3EF] rounded-3xl p-7 lg:p-8 border-2 border-[#583725]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#E8D6CC] text-[#583725] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    <IconLaboratorio />
                  </div>
                  <span className="text-4xl font-black text-[#583725]/25 select-none font-mono">
                    03
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                  Laboratório de formação e produção
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Edição, finalização e criação de conteúdos digitais e projetos tecnológicos inovadores.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#583725]/20 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#583725]">
                  Capacitação & Edição
                </span>
                <div className="w-3 h-3 rounded-full bg-[#583725]" />
              </div>
            </motion.div>

            {/* Card 04 - #CF716F (Rosa Goiaba) */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-[#FDF2F2] rounded-3xl p-7 lg:p-8 border-2 border-[#CF716F]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#F7D3D3] text-[#CF716F] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    <IconCoworking />
                  </div>
                  <span className="text-4xl font-black text-[#CF716F]/25 select-none font-mono">
                    04
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                  Coworking comunitário
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Um ambiente aberto e colaborativo para encontros, articulação de ideias, estudo e trabalho em rede.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#CF716F]/20 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#CF716F]">
                  Conexão & Rede
                </span>
                <div className="w-3 h-3 rounded-full bg-[#CF716F]" />
              </div>
            </motion.div>

            {/* Card 05 - #E99A12 (Amarelo Ocre) */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-[#FEF8EC] rounded-3xl p-7 lg:p-8 border-2 border-[#E99A12]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#FCE5B8] text-[#E99A12] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    <IconEquipamentos />
                  </div>
                  <span className="text-4xl font-black text-[#E99A12]/25 select-none font-mono">
                    05
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                  Equipamentos para produção externa
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Kits de gravação móveis e recursos técnicos para levar as produções diretamente para as ruas do território.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E99A12]/20 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#E99A12]">
                  Mobilidade & Campo
                </span>
                <div className="w-3 h-3 rounded-full bg-[#E99A12]" />
              </div>
            </motion.div>

            {/* Card 06 - #75845B (Verde Oliva) */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6 }}
              className="bg-[#F3F5F0] rounded-3xl p-7 lg:p-8 border-2 border-[#75845B]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#D7DEC9] text-[#75845B] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform shrink-0">
                    <IconMemoriaAmbiente />
                  </div>
                  <span className="text-4xl font-black text-[#75845B]/25 select-none font-mono">
                    06
                  </span>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                  Ambientes de memória e colaboração
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Espaço dedicado à pesquisa, preservação de acervos históricos, reuniões e exposições comunitárias.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#75845B]/20 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#75845B]">
                  Acervo & Identidade
                </span>
                <div className="w-3 h-3 rounded-full bg-[#75845B]" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* SEÇÃO 5: CALL TO ACTION FINAL */}
      <section className="w-full py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-200 pt-10 sm:pt-12">
          
          <p className="text-base sm:text-lg font-bold text-[#4A2E35] text-center sm:text-left">
            Quer estudar, ensinar ou apoiar um desses programas?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#faca-parte"
              className="w-full sm:w-auto text-center bg-[#C85227] hover:bg-[#b0431f] text-white font-medium px-6 py-3.5 rounded-xl shadow transition-all active:scale-95"
            >
              Faça parte
            </a>
            
            <a
              href="#apoiar"
              className="w-full sm:w-auto text-center bg-white hover:bg-stone-50 text-[#5C3D2E] border border-stone-300 font-medium px-6 py-3.5 rounded-xl shadow-sm transition-all active:scale-95"
            >
              Apoiar o CITRÔ
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Citro;