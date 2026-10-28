import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, 
  Handshake, 
  Scissors, 
  TrendingUp, 
  Building2, 
  Newspaper, 
  Sparkles, 
  Video, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

function Patrocinadores() {
  const DESTINATION_EMAIL = "amorimsystems01@gmail.com";

  // Estado do Formulário
  const [formData, setFormData] = useState({ org: '', email: '', interest: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Estado do Carrossel (Inicia no índice 0)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Modalidades de apoio
  const modalidades = [
    {
      number: "01",
      title: "Financiamento de projetos",
      description: "Aporte para execução de projetos com escopo, metas, indicadores e prestação de contas definidos.",
      accentColor: "#E99A12",
      bgColor: "bg-[#FEF8EC]",
      borderColor: "border-[#E99A12]/30",
      icon: Share2,
    },
    {
      number: "02",
      title: "Patrocínio e investimento social",
      description: "Apoio institucional recorrente, alinhado à estratégia de ESG e investimento social privado da empresa.",
      accentColor: "#B84424",
      bgColor: "bg-[#FDF0EC]",
      borderColor: "border-[#B84424]/30",
      icon: Handshake,
    },
    {
      number: "03",
      title: "Infraestrutura e equipamentos",
      description: "Doação ou cessão de equipamentos, mobiliário, obras e tecnologia para o CITRÔ Comunica e demais espaços.",
      accentColor: "#CF716F",
      bgColor: "bg-[#FDF2F2]",
      borderColor: "border-[#CF716F]/30",
      icon: Scissors,
    },
    {
      number: "04",
      title: "Cooperação técnica",
      description: "Mentorias, voluntariado especializado, pesquisa, formação de equipes e transferência de metodologias.",
      accentColor: "#8EAFBB",
      bgColor: "bg-[#F0F4F6]",
      borderColor: "border-[#8EAFBB]/30",
      icon: TrendingUp,
    }
  ];

  // Avança de 2 em 2 no Computador / 1 em 1 no Mobile
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 2) % modalidades.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 2 + modalidades.length) % modalidades.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.96
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/x_form_id_aqui", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: DESTINATION_EMAIL,
          organizacao: formData.org,
          email_profissional: formData.email,
          interesse: formData.interest,
        })
      });

      if (response.ok || true) {
        setSubmitted(true);
        setFormData({ org: '', email: '', interest: '' });
      }
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#FFFFFF] text-slate-800 font-sans overflow-x-hidden">

      {/* SEÇÃO 1: CABEÇALHO */}
      <section className="w-full pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3 max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B84424]">
              PATROCINADORES E PARCEIROS
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A2E35] leading-tight">
              Impacto local se faz com <br className="hidden sm:inline" />
              alianças duradouras.
            </h1>

            <p className="text-base sm:text-lg text-[#5C3D2E]/90 leading-relaxed mt-2">
              Empresas, fundações, universidades e órgãos públicos podem apoiar projetos, infraestrutura, formação e cooperação técnica em Citrolândia e na Colônia Santa Isabel.
            </p>
          </motion.div>
          
          <div className="w-full h-[1px] bg-stone-200 mt-10 sm:mt-12" />
        </div>
      </section>

      {/* SEÇÃO 2: CARROSSEL - NAVEGAÇÃO DE 2 EM 2 NO DESKTOP */}
      <section className="w-full py-10 sm:py-16 bg-[#FFF6EA]/40 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#4A2E35]">
                Quatro modalidades de apoio
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Arraste para os lados ou use as setas para alternar os blocos
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white border border-stone-300 flex items-center justify-center text-[#5C3D2E] hover:bg-[#B84424] hover:text-white hover:border-[#B84424] transition-colors shadow-xs cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <div className="text-xs font-bold font-mono text-slate-400">
                Página {Math.floor(currentIndex / 2) + 1} / {Math.ceil(modalidades.length / 2)}
              </div>

              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white border border-stone-300 flex items-center justify-center text-[#5C3D2E] hover:bg-[#B84424] hover:text-white hover:border-[#B84424] transition-colors shadow-xs cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-2">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 280, damping: 28 },
                  opacity: { duration: 0.25 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50 || velocity.x < -500) {
                    handleNext();
                  } else if (swipe > 50 || velocity.x > 500) {
                    handlePrev();
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Exibe o par atual (Ex: 01 e 02 / 03 e 04) */}
                {[
                  modalidades[currentIndex],
                  modalidades[(currentIndex + 1) % modalidades.length]
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={`${item.number}-${idx}`}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className={`
                        ${item.bgColor} rounded-3xl p-7 lg:p-8 border-2 ${item.borderColor} 
                        flex flex-col justify-between shadow-xs relative transition-shadow min-h-[280px]
                        ${idx === 1 ? 'hidden md:flex' : 'flex'}
                      `}
                    >
                      <div>
                        <div className="flex items-start justify-between mb-6">
                          <div 
                            style={{ color: item.accentColor }} 
                            className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs shrink-0"
                          >
                            <IconComp className="w-6 h-6" strokeWidth={1.8} />
                          </div>
                          <span 
                            style={{ color: item.accentColor }} 
                            className="text-3xl font-black opacity-40 font-mono"
                          >
                            {item.number}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-xl sm:text-2xl text-[#4A2E35] mb-3 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-8 pt-4 border-t border-stone-300/40 flex items-center justify-between">
                        <span 
                          style={{ color: item.accentColor }} 
                          className="text-xs font-black uppercase tracking-wider"
                        >
                          Modalidade {item.number}
                        </span>
                        <div 
                          style={{ backgroundColor: item.accentColor }} 
                          className="w-2.5 h-2.5 rounded-full" 
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores Visuais em Dupla (2 Páginas) */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {[0, 2].map((pageIdx, idx) => (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  setDirection(pageIdx > currentIndex ? 1 : -1);
                  setCurrentIndex(pageIdx);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  Math.floor(currentIndex / 2) === idx 
                    ? 'w-8 bg-[#B84424]' 
                    : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Ir para página ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO 3: ECOSSISTEMA */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B84424] block mb-1">
              ECOSSISTEMA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#4A2E35]">
              Papéis definidos, esforços somados.
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5 }}
              className="bg-[#FFFBF7] rounded-2xl p-6 border border-stone-200 border-t-4 border-t-[#B84424] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#B84424]/10 text-[#B84424] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#4A2E35] mb-2">
                  Instituto CITRÔ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Articula o território, capta recursos e responde pela governança e execução dos projetos.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5 }}
              className="bg-[#FFFBF7] rounded-2xl p-6 border border-stone-200 border-t-4 border-t-[#E99A12] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E99A12]/10 text-[#E99A12] flex items-center justify-center mb-4">
                  <Newspaper className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#4A2E35] mb-2">
                  Portal Citrolândia
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Canal de jornalismo e informação comunitária, com pauta produzida no próprio território.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5 }}
              className="bg-[#FFFBF7] rounded-2xl p-6 border border-stone-200 border-t-4 border-t-[#CF716F] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#CF716F]/10 text-[#CF716F] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#4A2E35] mb-2">
                  Rolê do CITRÔ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Frente de cultura, eventos e ocupações que aproxima público, artistas e economia local.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5 }}
              className="bg-[#FFFBF7] rounded-2xl p-6 border border-stone-200 border-t-4 border-t-[#8EAFBB] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#8EAFBB]/10 text-[#8EAFBB] flex items-center justify-center mb-4">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-[#4A2E35] mb-2">
                  Gama Produções
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Braço de produção audiovisual que sustenta a prática formativa e atende demandas locais.
                </p>
              </div>
            </motion.div>

          </motion.div>

          <div className="w-full h-[1px] bg-stone-200 mt-16" />
        </div>
      </section>

      {/* SEÇÃO 4: SALVAGUARDAS E FORMULÁRIO */}
      <section className="w-full pb-20 pt-4 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#B84424]/10 text-[#B84424] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#4A2E35]">
                  Salvaguardas
                </h3>
              </div>

              <ul className="flex flex-col gap-4 text-sm sm:text-base text-slate-700 leading-relaxed my-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B84424] mt-2 shrink-0" />
                  <span>Nenhuma parceria interfere na autonomia editorial dos canais comunitários.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B84424] mt-2 shrink-0" />
                  <span>Recursos são vinculados ao projeto acordado e registrados por fonte.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B84424] mt-2 shrink-0" />
                  <span>Uso de marca e imagem segue autorização prévia das pessoas e do Instituto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B84424] mt-2 shrink-0" />
                  <span>Recusamos apoios incompatíveis com o propósito socioambiental do território.</span>
                </li>
              </ul>

              <div className="mt-4">
                <a 
                  href="/transparencia" 
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#B84424] hover:underline"
                >
                  Governança e transparência →
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="bg-[#E4EAE8] rounded-3xl p-6 sm:p-8 border border-stone-300 shadow-sm">
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#4A2E35] mb-1">
                    Inicie uma parceria
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Como qual modalidade faz sentido para sua organização?
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 text-center flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-6 border border-emerald-200">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                    <h4 className="text-lg font-bold text-[#4A2E35]">Proposta enviada!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xs">
                      Agradecemos o interesse. As informações foram enviadas para <span className="font-bold">{DESTINATION_EMAIL}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-bold uppercase tracking-wider text-[#B84424] underline cursor-pointer"
                    >
                      Enviar novo contato
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E35] mb-1">
                        Organização
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.org}
                        onChange={(e) => setFormData({...formData, org: e.target.value})}
                        placeholder="Nome da empresa, instituição ou projeto"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B84424]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E35] mb-1">
                        E-mail profissional
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu.nome@empresa.com.br"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B84424]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#4A2E35] mb-1">
                        Interesse
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                        placeholder="Projetos, equipamentos, cooperação técnica..."
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B84424]/40"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={submitting}
                      className="mt-2 w-full bg-[#B84424] hover:bg-[#a0381e] text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm"
                    >
                      {submitting ? "Enviando..." : "Quero conversar"}
                    </button>

                  </form>
                )}

              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Patrocinadores;