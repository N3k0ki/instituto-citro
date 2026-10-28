import { useState, useEffect } from 'react'
import "../index.css"

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Início')

  // Lista de navegação oficial
  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Território', href: '/territorio' },
    { name: 'Atuação', href: '/atuacao' },
    { name: 'CITRÔ', href: '/citro' },
    // { name: 'Transparência', href: '/transparencia' },
    { name: 'Faça Parte', href: '/faca-parte' },
    { name: 'Patrocinadores', href: '/patrocinadores' },
  ]

  // Detecta automaticamente a página ativa com base no URL atual do browser
  useEffect(() => {
    const currentPath = window.location.pathname
    if (currentPath === '/contato') {
      setActiveLink('Contato')
    } else {
      const currentItem = navItems.find(item => item.href === currentPath)
      if (currentItem) {
        setActiveLink(currentItem.name)
      }
    }
  }, [])

  return (
    <header className="w-full bg-[#f8f9fa] border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO - Caminho corrigido para a raiz / logo_instituto.svg */}
          <a
            href="/"
            onClick={() => setActiveLink('Início')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo_instituto.svg"
              alt="Instituto Citrô"
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-black tracking-wider text-[#C85227] select-none">
              CITRÔ
            </span>
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`
                  relative
                  text-base
                  font-semibold
                  transition-colors
                  duration-200
                  py-2

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
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

            {/* ÚNICO BOTÃO DE CONTATO DESTACADO À DIREITA */}
            <a
              href="/contato"
              onClick={() => setActiveLink('Contato')}
              className={`
                ml-2
                font-medium
                px-6
                py-2.5
                rounded-xl
                shadow-sm
                transition-all
                duration-200
                hover:shadow
                hover:-translate-y-0.5
                ${
                  activeLink === 'Contato'
                    ? 'bg-[#b0431f] text-white'
                    : 'bg-[#C85227] hover:bg-[#b0431f] text-white'
                }
              `}
            >
              Contato
            </a>
          </nav>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              lg:hidden
              p-2
              text-[#5C3D2E]
              hover:text-[#C85227]
              focus:outline-none
            "
            aria-label="Abrir menu"
          >
            <span className="text-2xl font-bold">
              {mobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-200 py-4 animate-fadeIn">
            <div className="flex flex-col gap-1">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.name)
                    setMobileMenuOpen(false)
                  }}
                  className={`
                    px-4
                    py-3
                    rounded-lg
                    text-base
                    font-medium
                    transition-colors
                    ${
                      activeLink === item.name
                        ? 'bg-[#C85227]/10 text-[#C85227]'
                        : 'text-[#5C3D2E] hover:bg-slate-100'
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}

              {/* ÚNICO BOTÃO DE CONTATO NO MOBILE */}
              <a
                href="/contato"
                onClick={() => {
                  setActiveLink('Contato')
                  setMobileMenuOpen(false)
                }}
                className={`
                  mt-2
                  text-center
                  font-medium
                  px-4
                  py-3
                  rounded-xl
                  transition-colors
                  ${
                    activeLink === 'Contato'
                      ? 'bg-[#b0431f] text-white'
                      : 'bg-[#C85227] hover:bg-[#b0431f] text-white'
                  }
                `}
              >
                Contato
              </a>

            </div>
          </nav>
        )}

      </div>
    </header>
  )
}

export default NavBar