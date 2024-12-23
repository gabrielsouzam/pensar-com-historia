import { Link } from 'react-router-dom'

import appLogo from '@/assets/app-logo.svg'

export function AppHeader() {
  return (
    <header className="bg-brown-500 flex items-center px-32 py-3 justify-between">
      <div className="flex items-center gap-2">
        <img src={appLogo} alt="Imagem logo" />
        <h1 className="text-lg">
          Pensar.com a <strong>História</strong>
        </h1>
      </div>

      <nav className="space-x-10">
        <Link to="/quem-somos">Quem somos</Link>
        <Link to="/educacional">Educacional</Link>
        <Link to="sertao-maranhanse">Sertão maranhese</Link>
        <Link to="repositorios">Respositórios</Link>
        <Link to="documentos-historicos">Documentos históricos</Link>
      </nav>
    </header>
  )
}
