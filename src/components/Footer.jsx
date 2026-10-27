import { useState } from 'react';
import logoInstituto from '../assets/logo_instituto.svg'; 
import "../index.css";

function Footer() {
  const [activeLink, setActiveLink] = useState('');

  const footerLinks = [
    { name: 'Missão', href: '/missao' },
    { name: 'Visão', href: '/visao' },
    { name: 'Valores', href: '/valores' },
    { name: 'Território', href: '/territorio' },
    { name: 'Atuação', href: '/atuacao' },
    { name: 'Programas', href: '/programas' },
    { name: 'CITRÔ', href: '/citro' },
    { name: 'Transparência', href: '/transparencia' },
    { name: 'Faça parte', href: '/faca-parte' },
    { name: 'Patrocinadores', href: '/patrocinadores' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <footer className="w-full bg-[#f8f9fa] pt-10 sm:pt-12 pb-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOPO DO FOOTER - LOGO E INFORMAÇÕES */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* LOGO + NOME DO INSTITUTO */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src={logoInstituto}
              alt="Logo Instituto Citrô"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain shrink-0"
            />
            
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#C85227] select-none">
                CITRÔ
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#5C3D2E] leading-snug">
                Centro de Iniciativas Territoriais, Redes e Oportunidades
              </span>
            </div>
          </div>
          
          {/* LOCALIZAÇÃO / ENDEREÇO */}
          <p className="text-xs sm:text-sm font-semibold text-[#5C3D2E] md:text-right">
            Citrolândia • Colônia Santa Isabel • Betim/MG
          </p>
        </div>

        {/* LINHA DIVISÓRIA */}
        <hr className="my-6 sm:my-8 border-[#5C3D2E]/20" />

        {/* LINKS (ÂNCORAS) */}
        <nav className="flex flex-wrap items-center justify-center lg:justify-end gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
          {footerLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveLink(item.name)}
              className={`
                relative
                text-xs sm:text-sm
                font-bold
                transition-colors
                duration-200

                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-full
                after:h-[2px]
                after:bg-[#C85227]

                after:origin-center
                after:scale-x-0
                after:transition-transform
                after:duration-300
                after:ease-out

                hover:text-[#C85227]
                hover:after:scale-x-100

                ${
                  activeLink === item.name
                    ? 'text-[#C85227] after:scale-x-100'
                    : 'text-[#5C3D2E]'
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* DIREITOS AUTORAIS */}
        <div className="mt-8 sm:mt-12 text-center border-t border-slate-200/60 pt-6">
          <p className="text-[11px] sm:text-xs font-medium text-[#5C3D2E]/80 leading-relaxed">
            © 2026 CITRÔ. Todos os direitos reservados. | Criado por AmorimSystems
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;