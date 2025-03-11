import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Helmet } from 'react-helmet-async'

import redsImage from '@/assets/reds-image.png'

import { PageTitle } from '../@components/page-title'
import { DescriptionButton } from '../web-quest/components/description-button'
import { RedsDescriptionButton } from './components/reds-description-button'

export function REDs() {
  return (
    <>
      <Helmet title="Criando Web-quest" />

      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <PageTitle title="Recursos Educacionais digitais" />
        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">O que são?</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 text-justify text-2xl font-light">
            <p>
              Os Recursos Educacionais Digitais (REDs) são materiais e
              ferramentas disponibilizados em formato digital que possuem
              finalidades pedagógicas. Os REDs podem ser encontrados em formatos
              de textos, vídeos, jogos, imagens, slides, infográficos e muitos
              outros formatos.
            </p>
            <p>
              Alguns REDs podem ser acessados de forma gratuita e outros não. No
              entanto, existem materiais de domínio público ou com licenças
              abertas que possibilitam o acesso e a utilização.
            </p>
            <p>
              Além disso, a adoção dos recursos educativos digitais pode
              contribuir na implementação de novas práticas pedagógicas e
              interdisciplinares em sala de aula.
            </p>
          </p>

          <h2 className="mb-3 text-5xl font-light">
            Vantagens de usar RED&apos;S
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <RedsDescriptionButton title="Desenvolvimento de competências digitais" />

          <div className="mb-24 mt-10 flex justify-center gap-32">
            <div className="space-y-4">
              <RedsDescriptionButton title="Flexibilidade para Aprender" />
              <RedsDescriptionButton
                title="Aprendizagem Colaborativa"
                align="left"
              />
            </div>

            <img src={redsImage} alt="Sigla RED's" />

            <div className="space-y-4">
              <RedsDescriptionButton title="Aprendizagem Personalizada" />
              <RedsDescriptionButton
                title="Acesso a uma Variedade de Recursos"
                align="right"
              />
            </div>
          </div>

          <h2 className="mb-3 text-5xl font-light">
            RED&apos;s para Dinamizar uma{' '}
            <span className="italic">WebQuest</span>
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 space-y-4 text-2xl font-light">
            <p>
              Caro professor e professora, aqui, vocês encontrão uma variedade
              de recursos educativos digitais (RED&apos;s) que irão transformar
              a maneira como você conduz suas WebQuests.
            </p>
            <p>
              Estes recursos foram cuidadosamente selecionados e organizados em
              quatro seções ({' '}
              <span className="font-normal text-brown-800">
                Apresentação de Conteúdos; Interação e Escrita Colaborativa;
                Criação e Edição de Vídeos Digitais; Avaliação da Aprendizagem
              </span>
              ) para facilitar a sua busca e maximizar a eficácia das suas
              aulas. Eles são interativos, envolventes e podem enriquecer
              bastante a experiência de uso das suas WebQuests em sala de aula,
              a comunicação entre os estudantes, bem como proporcionar uma
              melhor colaboração e respostas para as tarefas solicitadas aos
              discentes.
            </p>
            <p>
              Explore, descubra e utilize estes recursos para enriquecer as suas
              WebQuests e proporcionar aos seus alunos uma rica experiência de
              aprendizagem.
            </p>
            <p>
              Não perca tempo! Acesse os recursos agora mesmo e descubra um
              mundo de possibilidades para suas WebQuests. Estamos ansiosos para
              ver como você vai utilizar estes recursos para inspirar e educar a
              próxima geração de aprendizes!
            </p>
          </p>

          <div className="flex items-center justify-between gap-24">
            <button
              type="button"
              className={
                'flex h-14 w-14 items-center justify-center rounded-full border-4 border-brown-400/90 border-opacity-50 bg-brown-700'
              }
            >
              <CaretLeft size={32} className="text-brown-50" weight="bold" />
            </button>

            <div className="flex flex-1 flex-col items-center gap-10">
              <div className="flex w-full justify-between gap-10">
                <DescriptionButton title="MindMeister" description="" />
                <DescriptionButton title="Canva" description="" />
              </div>

              <div className="mb-2 w-[18rem]">
                <h2 className="text-center text-3xl font-semibold">
                  Apresentação de Conteúdos
                </h2>
              </div>

              <DescriptionButton title="Genially" description="" />
            </div>

            <button
              type="button"
              className={
                'flex h-14 w-14 items-center justify-center rounded-full border-4 border-brown-400/90 border-opacity-50 bg-brown-700'
              }
            >
              <CaretRight size={32} className="text-brown-50" weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
