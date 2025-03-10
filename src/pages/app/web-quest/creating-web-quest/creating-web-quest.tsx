import { Helmet } from 'react-helmet-async'

import webQuestImage from '@/assets/webquest-image.png'

import { DescriptionButton } from '../components/description-button'
import { WebQuestTitle } from '../components/web-quest-title'

export function CreatingWebQuest() {
  return (
    <>
      <Helmet title="Criando Web-quest" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <WebQuestTitle title="Produzindo uma" />

        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">A produção</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 space-y-4 text-justify text-2xl font-light">
            <p>
              Criar uma <span className="italic">WebQuest</span> envolve
              identificar um tema relevante e definir objetivos pedagógicos
              claros. O próximo passo é pesquisar e selecionar recursos
              confiáveis, planejar as atividades e elaborar um roteiro que guie
              os alunos. Por fim, a <span className="italic">WebQuest</span>{' '}
              pode ser apresentada em uma plataforma digital ou documento
              online, garantindo acessibilidade e organização.
            </p>
            <p>
              Antes de produzir uma <span className="italic">WebQuest</span>, é
              necessário ater-se a sua estrutura e aos seus componentes
              (Introdução, tarefa, processo, recursos, avaliação e conclusão)
              com suas descrições e finalidades, conforme observa-se a seguir:
            </p>
          </p>

          <div className="mb-48 flex items-center justify-between px-16">
            <div className="space-y-20">
              <DescriptionButton title="1. Introdução" align="left" />
              <DescriptionButton title="6. Conclusão" />
              <DescriptionButton title="5. Avaliação" align="left" />
            </div>
            <img
              className="h-[18rem] w-[18rem]"
              src={webQuestImage}
              alt="Image de web quest"
            />
            <div className="space-y-20">
              <DescriptionButton title="2. Tarefa" align="right" />
              <DescriptionButton title="3. Processo" />
              <DescriptionButton title="4. Recursos" align="right" />
            </div>
          </div>

          <h2 className="mb-3 text-5xl font-light">Vídeos complementares</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />
          <p className="mb-16 text-justify text-2xl font-light">
            Apresentaremos a seguir toda a estrutura de componentes de uma
            WebQuest em vídeos breves e explicativos que compõem uma verdadeira
            playlist de aprendizado.
          </p>
        </div>
      </div>
    </>
  )
}
