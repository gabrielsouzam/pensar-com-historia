import { Link } from 'react-router-dom'

import appLogo from '@/assets/app-logo.svg'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between bg-brown-500 px-32 py-3">
      <div className="flex items-center gap-2">
        <img src={appLogo} alt="Imagem logo" />
        <h1 className="text-lg">
          Pensar.com a <strong>História</strong>
        </h1>
      </div>

      <nav className="space-x-10">
        <Link to="/quem-somos">Quem Somos</Link>
        <Link to="/educacional">Educacional</Link>
        <Link to="sertao-maranhanse">Sertão Maranhense</Link>
        <Link to="repositorios">Respositórios</Link>
        <Link to="documentos-historicos">Documentos Históricos</Link>
      </nav>
    </header>
  )
}
