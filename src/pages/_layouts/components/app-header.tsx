import { Link } from 'react-router-dom'

import appLogo from '@/assets/app-logo.svg'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-20 bg-brown-800 py-4 pl-10 pr-32">
      <img src={appLogo} alt="Imagem logo" />

      <nav className="flex items-center space-x-12">
        <Link to="">Quem Somos</Link>
        <Link className="flex max-w-32 text-center" to="metodologia-web-quest">
          Metodologia Web Quest
        </Link>
        <Link className="flex max-w-40 text-center" to="produzindo-web-quest">
          Produzindo uma Web Quest
        </Link>
        <Link className="flex max-w-40 text-center" to="avaliando-web-quest">
          Avaliando uma Web Quest
        </Link>
        <Link
          className="flex max-w-40 text-center"
          to="recomendacoes-web-quest"
        >
          Recomendações para Web Quest
        </Link>
        <Link to="reds">RED&apos;s</Link>
        <Link to="area-docente">Área docente</Link>
      </nav>
    </header>
  )
}
