export function AboutUs() {
  return (
    <main>
      <section>
        <div className="relative">
          <img
            src="/src/assets/map.png"
            alt="Imagem de fundo com uma casa no sertão"
            className="w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#453526] to-[#A27E5C1A] opacity-100"></div>

          <div className="absolute inset-0 flex flex-row items-center justify-center px-36 text-white">
            <aside className="mr-36 text-start">
              <h1 className="mb-10 max-w-[700px] text-6xl font-light leading-[87px]">
                Seja bem-vindo ao pensar.com a{' '}
                <span className="font-medium">História!</span>
              </h1>
              <p className="text-3xl font-light italic">
                Conheça <span className="font-semibold">a nossa</span> história
              </p>
            </aside>

            <article>
              <img
                src="/src/assets/app-logo.svg"
                alt="Logo do site"
                className="mb-8 h-52 w-52"
              />
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="relative flex justify-end">
          <img
            src="/src/assets/second_background.png"
            alt="Imagem de fundo com a vista do alto de uma cidade"
            className="h-auto w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#453526] to-[#A27E5C1A] opacity-100"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#453526] to-[#A27E5C1A] opacity-100"></div>

          <div className="absolute inset-0 flex flex-row items-center justify-center px-36 text-white">
            <article>
              <img
                src="/src/assets/app-logo.svg"
                alt="Logo do site"
                className="mb-8 h-52 w-52"
              />
            </article>

            <aside className="ml-32 max-w-[700px] text-start">
              <h1 className="mb-10 max-w-[700px] text-4xl font-normal leading-[87px]">
                Quem somos?
              </h1>
              <p className="mb-5 text-justify text-xl font-light">
                O <span className="font-medium">pensar.com</span> do subtítulo
                não é propriamente um endereço da web, mas um estímulo à
                necessidade de unirmos o digital com o presencial no espaço
                escolar, pensar.com o Ensino de História, aqui em especial a
                formação do sertão maranhense, é ter a possibilidade de
                conectar-se, refletir, criar, interagir, de incorporar
                pedagogicamente o uso da internet à sala de aula e aprender na
                cibercultura.
              </p>
              <p className="mb-5 text-justify text-xl font-light">
                Neste espaço, os professores irão encontrar orientações práticas
                sobre o uso da metodologia WebQuest, dicas sobre o uso de
                recursos educativos digitais, documentos históricos e atividades
                didáticas sobre a História e a formação do sertão maranhense, a
                serem investigados com auxílio da pesquisa realizada na internet
                por meio da metodologia WebQuest.
              </p>
              <p className="text-justify text-xl font-light">
                Agora você será o investigador e nos ajudará a pensar.com as
                trilhas históricas do sertão maranhense!
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
