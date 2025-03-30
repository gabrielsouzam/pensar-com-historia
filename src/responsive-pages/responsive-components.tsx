import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import appLogo from '@/assets/app-logo.svg'
import capesLogo from '@/assets/capes-logo.png'
import footerIcons from '@/assets/footer-icons.png'
import ifLogo from '@/assets/if-logo.png'
import ppghistLogo from '@/assets/ppghist-logo.png'
import uemaLogo from '@/assets/uema-logo.png'

export function AppHeaderResponsive() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex items-center justify-between bg-brown-800 px-6 py-4">
      {/* Logo */}
      <Link to="">
        <img src={appLogo} alt="Imagem logo" className="h-10" />
      </Link>

      {/* Ícone de Menu - Apenas no Mobile */}
      <button
        className="text-2xl text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <List />}
      </button>

      {/* Menu Lateral (Mobile) */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-64 transform bg-brown-900 shadow-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          className="absolute right-5 top-5 text-2xl text-white"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>

        <nav className="flex flex-col gap-4 p-6 text-white">
          <Link className="rounded-lg p-2 hover:bg-brown-700" to="/sobre-nos">
            Quem Somos
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-brown-700"
            to="metodologia-web-quest"
          >
            Metodologia WebQuest
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-brown-700"
            to="produzindo-web-quest"
          >
            Produzindo uma WebQuest
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-brown-700"
            to="avaliando-web-quest"
          >
            Avaliando uma WebQuest
          </Link>
          <Link
            className="rounded-lg p-2 hover:bg-brown-700"
            to="recomendacoes-web-quest"
          >
            Recomendações para WebQuest
          </Link>
          <Link className="rounded-lg p-2 hover:bg-brown-700" to="reds">
            RED&apos;s
          </Link>
          <Link className="rounded-lg p-2 hover:bg-brown-700" to="area-docente">
            Área docente
          </Link>
        </nav>
      </div>

      {/* Menu Desktop (Visível apenas em telas médias para cima) */}
      <nav className="hidden items-center gap-6 text-white md:flex">
        <Link className="rounded-lg p-2 hover:bg-brown-700" to="/sobre-nos">
          Quem Somos
        </Link>
        <Link
          className="rounded-lg p-2 hover:bg-brown-700"
          to="metodologia-web-quest"
        >
          Metodologia WebQuest
        </Link>
        <Link
          className="rounded-lg p-2 hover:bg-brown-700"
          to="produzindo-web-quest"
        >
          Produzindo uma WebQuest
        </Link>
        <Link
          className="rounded-lg p-2 hover:bg-brown-700"
          to="avaliando-web-quest"
        >
          Avaliando uma WebQuest
        </Link>
        <Link
          className="rounded-lg p-2 hover:bg-brown-700"
          to="recomendacoes-web-quest"
        >
          Recomendações para WebQuest
        </Link>
        <Link className="rounded-lg p-2 hover:bg-brown-700" to="reds">
          RED&apos;s
        </Link>
        <Link className="rounded-lg p-2 hover:bg-brown-700" to="area-docente">
          Área docente
        </Link>
      </nav>
    </header>
  )
}

export function HomeResponsive() {
  return (
    <>
      <Helmet title="Home" />
      <main>
        {/* Seção 1 */}
        <section>
          <div className="relative">
            <img
              src="/src/assets/map.png"
              alt="Imagem de fundo com uma casa no sertão"
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#453526] to-[#A27E5C1A] opacity-100"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white md:flex-row md:px-36">
              <aside className="mb-6 text-center md:mr-36 md:text-start">
                <h1 className="mb-6 max-w-[700px] text-4xl font-light leading-tight md:text-6xl md:leading-[87px]">
                  Seja bem-vindo ao pensar.com a{' '}
                  <span className="font-medium">História!</span>
                </h1>
                <p className="text-lg font-light italic md:text-3xl">
                  Conheça <span className="font-semibold">a nossa</span>{' '}
                  história
                </p>
              </aside>

              {/* Esconde a logo no mobile */}
              <article className="hidden md:block">
                <img
                  src="/src/assets/app-logo.svg"
                  alt="Logo do site"
                  className="mb-8 h-52 w-52"
                />
              </article>
            </div>
          </div>
        </section>

        {/* Seção 2 */}
        <section>
          <div className="relative flex justify-center md:justify-end">
            <img
              src="/src/assets/second_background.png"
              alt="Imagem de fundo com a vista do alto de uma cidade"
              className="h-auto w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#453526] to-[#A27E5C1A] opacity-100"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#453526] to-[#A27E5C1A] opacity-100"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white md:flex-row md:px-36">
              {/* Esconde a logo no mobile */}
              <article className="hidden md:block">
                <img
                  src="/src/assets/app-logo.svg"
                  alt="Logo do site"
                  className="mb-8 h-52 w-52"
                />
              </article>

              <aside className="ml-0 max-w-[700px] text-center md:ml-32 md:text-start">
                <h1 className="mb-6 text-3xl font-normal leading-tight md:text-4xl md:leading-[87px]">
                  Quem somos?
                </h1>
                <p className="mb-5 text-justify text-lg font-light md:text-xl">
                  O <span className="font-medium">pensar.com</span> do subtítulo
                  não é propriamente um endereço da web, mas um estímulo à
                  necessidade de unirmos o digital com o presencial no espaço
                  escolar, pensar.com o Ensino de História, aqui em especial a
                  formação do sertão maranhense, é ter a possibilidade de
                  conectar-se, refletir, criar, interagir, de incorporar
                  pedagogicamente o uso da internet à sala de aula e aprender na
                  cibercultura.
                </p>
                <p className="mb-5 text-justify text-lg font-light md:text-xl">
                  Neste espaço, os professores irão encontrar orientações
                  práticas sobre o uso da metodologia WebQuest, dicas sobre o
                  uso de recursos educativos digitais, documentos históricos e
                  atividades didáticas sobre a História e a formação do sertão
                  maranhense, a serem investigados com auxílio da pesquisa
                  realizada na internet por meio da metodologia WebQuest.
                </p>
                <p className="text-justify text-lg font-light md:text-xl">
                  Agora você será o investigador e nos ajudará a pensar.com as
                  trilhas históricas do sertão maranhense!
                </p>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export function AppFooterResponsive() {
  return (
    <footer className="w-full bg-white px-4 py-12 md:px-32">
      {/* Linha separadora */}
      <div className="mb-8 w-full">
        <hr className="w-full border-t-2 border-zinc-200" />
      </div>

      {/* Logos das instituições */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-zinc-900 md:justify-between">
        <img className="w-20 md:w-auto" src={uemaLogo} alt="Logo da UEMA" />
        <img
          className="w-20 md:w-auto"
          src={ppghistLogo}
          alt="Programa de Pós-graduação em História - UEMA"
        />
        <img className="w-20 md:w-auto" src={ifLogo} alt="Logo do IFMA" />
        <img className="w-20 md:w-auto" src={capesLogo} alt="Logo da Capes" />
      </div>

      {/* Texto e ícones */}
      <div className="flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        <span className="text-sm text-zinc-900 md:text-base">
          <a className="text-red-800 underline" href="">
            pensar.com a História
          </a>{' '}
          &copy; {new Date().getFullYear()} de{' '}
          <a
            className="text-red-800 underline"
            href="http://lattes.cnpq.br/2660971989902220"
          >
            Antonio Moura
          </a>{' '}
          está licenciado sob{' '}
          <a
            className="text-red-800 underline"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          >
            CC BY-NC-SA 4.0
          </a>
        </span>

        <img
          className="mt-4 w-24 md:mt-0 md:w-auto"
          src={footerIcons}
          alt="Ícones"
        />
      </div>
    </footer>
  )
}
