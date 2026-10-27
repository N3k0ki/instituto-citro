import React from 'react';
import { motion } from 'framer-motion'; 

import programas from '../assets/programas.png'; 
import programastech from '../assets/tech.png';
import ProgramasCarrossel from '../sections/sections_atuacao/carrossel';

// Componente para renderizar a imagem enviada com fallback seguro
function ImageSlot({ src, alt = "Imagem da seção", className = "" }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-sm bg-transparent ${className}`}>
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

// Ícones SVG inline correspondentes aos programas e seções
function IconComunica() {
  return (
    <svg className="w-8 h-8 text-[#C85227]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
}

function IconLab() {
  return (
    <svg className="w-8 h-8 text-[#5C7241]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

function IconMemoria() {
  return (
    <svg className="w-8 h-8 text-[#7B4275]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function IconConecta() {
  return (
    <svg className="w-8 h-8 text-[#B84236]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

function Atuacao() {
  return (
    <main className="w-full bg-[#ffffff] text-slate-800 font-sans">
      
{/* SEÇÃO 1: CABEÇALHO */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C85227]">
                NOSSO FOCO INICIAL
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4A2E35] leading-tight">
                Programas permanentes, <br />
                não ações isoladas.
              </h1>

              <p className="text-base sm:text-lg text-[#5C3D2E]/90 leading-relaxed max-w-2xl mt-2">
                A atuação do Instituto CITRÔ se organiza em quatro programas contínuos. As trilhas de formação, oficinas e projetos acontecem dentro deles.
              </p>
            </div>

            {/* Imagem limpa sem borda nem moldura de fundo */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <img 
                src={programas} 
                alt="Ilustração de Programas" 
                className="w-full max-w-md h-auto object-contain shadow-none border-0 bg-transparent"
              />
            </div>

          </div>
        </div>
      </section>

        <ProgramasCarrossel />

      {/* SEÇÃO 3: COMO OS PROGRAMAS SE CONECTAM */}
      <section className="w-full bg-[#F5EFEB]/50 py-20 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C85227]">
            COMO OS PROGRAMAS SE CONECTAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4A2E35] mt-2 mb-12">
            Um ciclo contínuo entre escuta, <br />
            formação, produção e oportunidade.
          </h2>

          {/* Grid de 6 Passos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative">
              <span className="text-xl font-black text-[#C85227] mb-2 block">01</span>
              <h3 className="font-bold text-lg text-[#4A2E35] mb-2">O território indica as necessidades</h3>
              <p className="text-sm text-slate-600">Escutamos as realidades locais para identificar o que realmente importa.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative">
              <span className="text-xl font-black text-[#3B6180] mb-2 block">02</span>
              <h3 className="font-bold text-lg text-[#4A2E35] mb-2">O território indica as necessidades</h3>
              <p className="text-sm text-slate-600">Escutamos as realidades locais para identificar o que realmente importa.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative">
              <span className="text-xl font-black text-[#5C7241] mb-2 block">03</span>
              <h3 className="font-bold text-lg text-[#4A2E35] mb-2">O CITRÔ oferece formação</h3>
              <p className="text-sm text-slate-600">Capacita pessoas e lideranças para potencializar as oportunidades.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative">
              <span className="text-xl font-black text-[#7B4275] mb-2 block">04</span>
              <h3 className="font-bold text-lg text-[#4A2E35] mb-2">Os conteúdos são produzidos</h3>
              <p className="text-sm text-slate-600">Transformamos conhecimento em materiais e soluções relevantes.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative">
              <span className="text-xl font-black text-[#5A3E2B] mb-2 block">05</span>
              <h3 className="font-bold text-lg text-[#4A2E35] mb-2">As histórias circulam</h3>
              <p className="text-sm text-slate-600">Compartilhamos experiências que inspiram e fortalecem outros territórios.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 relative">
              <span className="text-xl font-black text-[#D69E2E] mb-2 block">06</span>
              <h3 className="font-bold text-lg text-[#4A2E35] mb-2">Os portfólios geram oportunidades</h3>
              <p className="text-sm text-slate-600">Escutamos as realidades locais para identificar o que realmente importa.</p>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 4: TECNOLOGIA É ELEMENTO TRANSVERSAL */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#F5EFEB] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-stone-200">
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-[#C85227]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#4A2E35] mb-2">Tecnologia é elemento transversal</h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-2xl">
                  Está presente em todos os programas: produção, edição, ferramentas digitais, segurança, acessibilidade, armazenamento e circulação dos conteúdos.
                </p>
              </div>
            </div>

            {/* Ilustração de tecnologia */}
            <div className="w-full lg:w-64 shrink-0">
              <ImageSlot 
                src={programastech} 
                alt="Ilustração de Tecnologia" 
                className="w-full h-28"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 5: CALL TO ACTION FINAL */}
      <section className="w-full py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-stone-200 pt-12">
          
          <p className="text-base sm:text-lg font-bold text-[#4A2E35]">
            Quer estudar, ensinar ou apoiar um desses programas?
          </p>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href="#faca-parte"
              className="flex-1 sm:flex-none text-center bg-[#C85227] hover:bg-[#b0431f] text-white font-medium px-6 py-3.5 rounded-xl shadow transition-all"
            >
              Faça parte
            </a>
            
            <a
              href="#apoiar"
              className="flex-1 sm:flex-none text-center bg-white hover:bg-stone-50 text-[#5C3D2E] border border-stone-300 font-medium px-6 py-3.5 rounded-xl shadow-sm transition-all"
            >
              Apoiar o CITRÔ
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Atuacao;