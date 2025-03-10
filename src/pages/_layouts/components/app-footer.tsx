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

      <div className="mb-16 flex items-center justify-between">
        <img src={uemaLogo} alt="Logo da Universidade Federal do Maranhão" />
        <img
          src={ppghistLogo}
          alt="Programa de pós graduação em História - UEMA"
        />
        <img src={ifLogo} alt="Logo do IF do maranhão" />
        <img src={capesLogo} alt="Logo do Capes" />
      </div>

      <div className="flex items-center justify-between">
        <span>
          <a className="text-brown-600" href="">
            pensar.com a História
          </a>{' '}
          &copy; {new Date().getFullYear()} de{' '}
          <a
            className="text-brown-600"
            href="http://lattes.cnpq.br/2660971989902220"
          >
            Antonio Moura
          </a>{' '}
          está licenciado sob{' '}
          <a
            className="text-brown-600"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          >
            CC BY-NC-SA 4.0
          </a>
        </span>
        <img src={footerIcons} alt="Ícones" />
      </div>
    </footer>
  )
}
