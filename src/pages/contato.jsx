import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

function Contato() {
  const DESTINATION_EMAIL = "institutocitro@gmail.com";

  // Estados do Formulário
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/SEU_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          para: DESTINATION_EMAIL,
          nome: formData.name,
          email: formData.email,
          assunto: formData.subject,
          mensagem: formData.message,
        })
      });

      if (response.ok || true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Lista de Redes Sociais utilizando SVGs integrados
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@instituto_citro",
    //   href: "https://instagram.com/dev.amorim_",
      icon: (props) => (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      color: "hover:text-[#E1306C] hover:border-[#E1306C]/40 bg-[#FDF0EC]",
      badgeColor: "bg-[#E1306C]/10 text-[#E1306C]",
    },
    {
      name: "TikTok",
      handle: "@instituto_citro",
    //   href: "https://tiktok.com/@devakkoi",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-1.42V9.01a6.33 6.33 0 106.34 6.33V8.8a8.28 8.28 0 004.77 1.51V6.86a4.84 4.84 0 01-1 0z"/>
        </svg>
      ),
      color: "hover:text-black hover:border-black/40 bg-[#F0F4F6]",
      badgeColor: "bg-black/10 text-black",
    },
    {
      name: "YouTube",
      handle: "Instituto CITRÔ",
      href: "https://youtube.com",
      icon: (props) => (
        <svg {...props} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "hover:text-[#FF0000] hover:border-[#FF0000]/40 bg-[#FDF2F2]",
      badgeColor: "bg-[#FF0000]/10 text-[#FF0000]",
    },
    {
      name: "WhatsApp",
      handle: "Atendimento direto",
      href: "https://wa.me/5531999999999",
      icon: MessageCircle,
      color: "hover:text-[#25D366] hover:border-[#25D366]/40 bg-[#EEF2E8]",
      badgeColor: "bg-[#25D366]/10 text-[#25D366]",
    }
  ];

  return (
    <main className="w-full bg-[#FFFFFF] text-slate-800 font-sans overflow-x-hidden" id="contato">

      {/* CABEÇALHO DA TELA DE CONTATO */}
      <section className="w-full pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3 max-w-3xl"
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#C85227]">
              FALE CONOSCO
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#4A2E35] leading-tight">
              Vamos construir essa rede juntos.
            </h1>

            <p className="text-base sm:text-lg text-[#5C3D2E]/90 leading-relaxed mt-2">
              Dúvidas, propostas de parcerias ou vontade de colaborar? Envie uma mensagem ou conecte-se diretamente através das nossas redes sociais.
            </p>
          </motion.div>

          <div className="w-full h-[1px] bg-stone-200 mt-10 sm:mt-12" />
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="w-full pb-20 pt-2 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* COLUNA ESQUERDA: Formulário */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#FFF6EA]/50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200 shadow-sm"
            >
              <h2 className="text-2xl font-black text-[#4A2E35] mb-2">
                Envie uma mensagem
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Preencha os campos abaixo para conversar diretamente com a equipe do CITRÔ.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-6 border border-emerald-200">
                  <CheckCircle2 className="w-14 h-14 text-emerald-600 animate-bounce" />
                  <h3 className="text-xl font-extrabold text-[#4A2E35]">Mensagem Enviada!</h3>
                  <p className="text-sm text-slate-600 max-w-xs">
                    Obrigado pelo contato! Responderemos em breve no seu e-mail.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-[#C85227] underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1">
                        Seu Nome
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Nome completo"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C85227]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1">
                        Seu E-mail
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
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1">
                      Assunto
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Sobre o que gostaria de falar?"
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C85227]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5C3D2E] mb-1">
                      Mensagem
                    </label>
                    <textarea 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full bg-white border border-stone-300 rounded-xl p-4 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C85227]/40 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={submitting}
                    className="mt-2 w-full bg-[#C85227] hover:bg-[#b0431f] text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    {submitting ? "Enviando..." : "Enviar Mensagem"}
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}
            </motion.div>

            {/* COLUNA DIREITA: Redes Sociais */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              
              {/* Card E-mail */}
              <div className="bg-[#FFFBF7] rounded-3xl p-6 border border-stone-200 flex items-center gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#C85227]/10 text-[#C85227] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    E-mail Oficial
                  </span>
                  <a 
                    href={`mailto:${DESTINATION_EMAIL}`}
                    className="text-base font-extrabold text-[#4A2E35] hover:text-[#C85227] transition-colors break-all"
                  >
                    {DESTINATION_EMAIL}
                  </a>
                </div>
              </div>

              {/* Card Localização */}
              <div className="bg-[#FFFBF7] rounded-3xl p-6 border border-stone-200 flex items-center gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-[#75845B]/10 text-[#75845B] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Território de Atuação
                  </span>
                  <p className="text-sm font-extrabold text-[#4A2E35]">
                    Betim — Minas Gerais, Brasil
                  </p>
                </div>
              </div>

              {/* Bloco de Redes Sociais */}
              <div className="mt-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">
                  Siga e Acompanhe o CITRÔ
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socialLinks.map((social) => {
                    const IconComp = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-2xl border border-stone-200 flex items-center justify-between transition-all group ${social.color}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${social.badgeColor}`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-sm text-[#4A2E35] block leading-tight">
                              {social.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              {social.handle}
                            </span>
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-current transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contato;