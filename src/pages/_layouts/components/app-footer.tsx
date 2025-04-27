import capesLogo from '@/assets/capes-logo.png'
import footerIcons from '@/assets/footer-icons.png'
import ifLogo from '@/assets/if-logo.png'
import ppghistLogo from '@/assets/ppghist-logo.png'
import uemaLogo from '@/assets/uema-logo.png'

export function AppFooter() {
  return (
    <footer className="w-full bg-white px-32 py-12">
      <div className="mb-16 w-full">
        <hr className="w-full border-t-2 border-zinc-200" />
      </div>

      <div className="mb-16 flex items-center justify-between text-zinc-900">
        <img src={uemaLogo} alt="Logo da Universidade Federal do Maranhão" />
        <img
          className="h-[9.5rem] w-[19rem]"
          src={ppghistLogo}
          alt="Programa de pós graduação em História - UEMA"
        />
        <img src={ifLogo} alt="Logo do IF do maranhão" />
        <img src={capesLogo} alt="Logo do Capes" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-zinc-900">
          <span className="text-red-800 underline">pensar.com a História</span>{' '}
          &copy; {new Date().getFullYear()} de{' '}
          <a
            className="text-red-800 underline"
            href="http://lattes.cnpq.br/2660971989902220"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antonio Moura
          </a>{' '}
          está licenciado sob{' '}
          <a
            className="text-red-800 underline"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
        </span>
        <img src={footerIcons} alt="Ícones" />
      </div>
    </footer>
  )
}
