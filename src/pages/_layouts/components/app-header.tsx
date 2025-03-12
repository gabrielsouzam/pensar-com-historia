import { Link } from 'react-router-dom'

import appLogo from '@/assets/app-logo.svg'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-20 bg-brown-800 py-4 pl-10 pr-32">
      <nav className="flex flex-1 items-center justify-between">
        <Link to="">
          <img src={appLogo} alt="Imagem logo" />
        </Link>
        <Link
          className="rounded-lg p-2 transition-colors duration-300 hover:bg-brown-600"
          to="/sobre-nos"
        >
          Quem Somos
        </Link>
        <Link
          className="flex max-w-32 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="metodologia-web-quest"
        >
          Metodologia Web Quest
        </Link>
        <Link
          className="flex max-w-40 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="produzindo-web-quest"
        >
          Produzindo uma Web Quest
        </Link>
        <Link
          className="flex max-w-40 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="avaliando-web-quest"
        >
          Avaliando uma Web Quest
        </Link>
        <Link
          className="flex max-w-40 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="recomendacoes-web-quest"
        >
          Recomendações para Web Quest
        </Link>
        <Link
          className="rounded-lg p-2 transition-colors duration-300 hover:bg-brown-600"
          to="reds"
        >
          RED&apos;s
        </Link>
        <Link
          className="rounded-lg p-2 transition-colors duration-300 hover:bg-brown-600"
          to="area-docente"
        >
          Área docente
        </Link>
      </nav>
    </header>
  )
}
