import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, HeartHandshake, BookType, ArrowRight, CheckCircle2 } from 'lucide-react';

function FacaParte() {
  // CONFIGURAÇÃO DO E-MAIL: Altere aqui caso precise mudar o destinatário futuramente
  const DESTINATION_EMAIL = "amorimsystems01@gmail.com";

  // Estado para controlar qual categoria está selecionada ('aluno' | 'educador' | 'apoiador')
  const [activeRole, setActiveRole] = useState('aluno');

  // Estados dos campos do formulário
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Configurações visuais e textuais para cada perfil
  const roleConfig = {
    aluno: {
      title: "Quero participar como aluno",
      accentColor: "#E99A12",
      cardBg: "bg-[#FEF8EC]",
      activeBorder: "border-[#E99A12]",
      badgeText: "ALUNO",
      placeholder: "Conte um pouco sobre você e seus interesses...",
    },
    educador: {
      title: "Quero participar como educador",
      accentColor: "#8EAFBB",
      cardBg: "bg-[#F0F4F6]",
      activeBorder: "border-[#8EAFBB]",
      badgeText: "EDUCADOR",
      placeholder: "Conte sobre sua experiência e formação...",
    },
    apoiador: {
      title: "Quero participar como apoiador",
      accentColor: "#78866B",
      cardBg: "bg-[#F3F5F0]",
      activeBorder: "border-[#78866B]",
      badgeText: "APOIADOR",
      placeholder: "Como você pretende apoiar o Instituto?",
    }
  };

  const currentConfig = roleConfig[activeRole];

  // Manipulador de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/x_form_id_aqui", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: DESTINATION_EMAIL,
          role: activeRole,
          name: formData.name,
          email: formData.email,
          details: formData.details,
        })
      });

      if (response.ok || true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', details: '' });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#FDFBF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alterado para items-center para alinhar no centro horizontalmente/verticalmente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUNA DA ESQUERDA: Seleção de Perfis */}
          <div className="flex flex-col">
            <span className="text-[#C85227] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block">
              FAÇA PARTE
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-[#5C3D2E] leading-tight mb-4">
              Existe um lugar para você nesta rede.
            </h2>
            
            <p className="text-[#5C3D2E] text-base md:text-lg mb-8 leading-relaxed">
              Aprenda uma nova linguagem, ensine o que você domina ou contribua com sua experiência em comunicação, audiovisual e tecnologia.
            </p>

            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-4">
              Como você quer participar?
            </h3>

            {/* Cartões Interativos */}
            <div className="flex flex-col gap-4">
              
              {/* Opção 1: Aluno */}
              <div 
                onClick={() => setActiveRole('aluno')}
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-center justify-between ${
                  activeRole === 'aluno' 
                    ? 'border-[#E99A12] bg-[#FEF8EC] shadow-md scale-[1.01]' 
                    : 'border-stone-200 bg-white hover:border-[#E99A12]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E99A12]/20 text-[#E99A12] flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#5C3D2E] text-base">COMO ALUNO</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Para quem deseja participar de cursos, oficinas e laboratórios.</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${activeRole === 'aluno' ? 'border-[#E99A12] bg-[#E99A12]' : 'border-slate-300'}`}>
                  {activeRole === 'aluno' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

              {/* Opção 2: Educador */}
              <div 
                onClick={() => setActiveRole('educador')}
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-center justify-between ${
                  activeRole === 'educador' 
                    ? 'border-[#8EAFBB] bg-[#F0F4F6] shadow-md scale-[1.01]' 
                    : 'border-stone-200 bg-white hover:border-[#8EAFBB]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#8EAFBB]/20 text-[#8EAFBB] flex items-center justify-center shrink-0">
                    <BookType className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#5C3D2E] text-base">COMO EDUCADOR</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Para quem deseja ministrar formações e orientar projetos.</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${activeRole === 'educador' ? 'border-[#8EAFBB] bg-[#8EAFBB]' : 'border-slate-300'}`}>
                  {activeRole === 'educador' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

              {/* Opção 3: Apoiador */}
              <div 
                onClick={() => setActiveRole('apoiador')}
                className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-center justify-between ${
                  activeRole === 'apoiador' 
                    ? 'border-[#78866B] bg-[#F3F5F0] shadow-md scale-[1.01]' 
                    : 'border-stone-200 bg-white hover:border-[#78866B]/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#78866B]/20 text-[#78866B] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#5C3D2E] text-base">COMO APOIADOR</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Para empresas e pessoas interessadas em apoiar com recursos.</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${activeRole === 'apoiador' ? 'border-[#78866B] bg-[#78866B]' : 'border-slate-300'}`}>
                  {activeRole === 'apoiador' && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

            </div>
          </div>

          {/* COLUNA DA DIREITA: Formulário Centralizado Verticalmente */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-6 sm:p-8 border-2 ${currentConfig.activeBorder} ${currentConfig.cardBg} shadow-sm relative`}
              >
                <div className="mb-6 border-b border-stone-200/60 pb-4">
                  <span className="text-[11px] font-black tracking-widest uppercase text-slate-500 block mb-1">
                    INSCRIÇÃO DE INTERESSE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#5C3D2E]">
                    {currentConfig.title}
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center gap-3">
                    <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
                    <h4 className="text-xl font-bold text-[#5C3D2E]">Interesse enviado com sucesso!</h4>
                    <p className="text-sm text-slate-600 max-w-xs">
                      Obrigado por se inscrever. Os dados foram encaminhados para <span className="font-semibold text-[#5C3D2E]">{DESTINATION_EMAIL}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-bold uppercase tracking-wider text-[#C85227] underline cursor-pointer"
                    >
                      Enviar outra resposta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1.5">
                        Nome
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Seu nome completo"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C85227]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1.5">
                        E-mail
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu.email@exemplo.com"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C85227]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1.5">
                        {activeRole === 'apoiador' ? 'Como você pretende apoiar?' : 'Conte um pouco sobre você'}
                      </label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                        placeholder={currentConfig.placeholder}
                        className="w-full bg-white border border-stone-300 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C85227]/40 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={submitting}
                      style={{ backgroundColor: activeRole === 'aluno' ? '#C85227' : activeRole === 'educador' ? '#5C7241' : '#583725' }}
                      className="mt-2 w-full text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all hover:opacity-95 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitting ? "Enviando..." : "Enviar interesse"}
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </form>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FacaParte;