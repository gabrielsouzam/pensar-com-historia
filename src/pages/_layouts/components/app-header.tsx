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
          className="flex max-w-32 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="metodologia-web-quest"
        >
          Metodologia WebQuest
        </Link>
        <Link
          className="flex max-w-40 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="produzindo-web-quest"
        >
          Produzindo uma WebQuest
        </Link>
        <Link
          className="flex max-w-40 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="avaliando-web-quest"
        >
          Avaliando uma WebQuest
        </Link>
        <Link
          className="flex max-w-40 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="recomendacoes-web-quest"
        >
          Recomendações para WebQuest
        </Link>
        <Link
          className="rounded-lg p-2 transition-colors duration-300 hover:bg-brown-600"
          to="reds"
        >
          RED&apos;s
        </Link>
        <Link
          className="flex max-w-32 rounded-lg text-center transition-colors duration-300 hover:bg-brown-600"
          to="material-apoio"
        >
          Materiais de Apoio
        </Link>
        <Link
          className="rounded-lg p-2 transition-colors duration-300 hover:bg-brown-600"
          to="sobre-nos"
        >
          Quem Somos
        </Link>
      </nav>
    </header>
  )
}
