import { Helmet } from 'react-helmet-async'

import webQuestImage from '@/assets/webquest-image.png'

import { DescriptionButton } from '../components/description-button'
import { WebQuestTitle } from '../components/web-quest-title'
import { YouTubeVideo } from '../components/youtube-video'

export function CreatingWebQuest() {
  const webquestDescriptions = {
    1: 'Na introdução é apresentado o assunto de maneira a situar e motivar os discentes, ou seja, é a porta de entrada para o contexto a ser investigado. ',
    2: 'A tarefa é o que os discentes devem fazer. Deve ser exequível, desafiadora e interessante, resultando em um produto ao final da sua execução. É importante que a tarefa não tenha respostas pré-definidas.',
    3: 'No processo, é essencial detalhar o passo a passo que os discentes devem seguir para executar e concluir a tarefa. Nessa etapa, fornecem-se orientações para facilitar a compreensão do que deve ser realizado.',
    4: 'Os recursos são materiais (Links, hiperlinks, vídeos, textos em pdf, mapas etc.) disponibilizados para que os alunos possam utilizar. Os recursos devem ajudar no processamento das informações, em vez de focar apenas em pesquisar.',
    5: 'Nessa etapa deve ser apresentado aos discentes os critérios de avaliação da tarefa após o término da WebQuest.',
    6: 'Na conclusão deve ser apontado o desfecho da investigação. É o momento de recapitular o que foi aprendido, destacar os resultados alcançados e encorajar os discentes para que possam realizar pesquisas futuras. ',
  }

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
              <DescriptionButton
                title="1. Introdução"
                align="left"
                description={webquestDescriptions[1]}
              />
              <DescriptionButton
                title="6. Conclusão"
                description={webquestDescriptions[6]}
              />
              <DescriptionButton
                title="5. Avaliação"
                align="left"
                description={webquestDescriptions[5]}
              />
            </div>

            <img
              className="h-[18rem] w-[18rem]"
              src={webQuestImage}
              alt="Imagem de WebQuest"
            />

            <div className="space-y-20">
              <DescriptionButton
                title="2. Tarefa"
                align="right"
                description={webquestDescriptions[2]}
              />
              <DescriptionButton
                title="3. Processo"
                description={webquestDescriptions[3]}
              />
              <DescriptionButton
                title="4. Recursos"
                align="right"
                description={webquestDescriptions[4]}
              />
            </div>
          </div>

          <h2 className="mb-3 text-5xl font-light">Vídeos complementares</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />
          <p className="mb-16 text-justify text-2xl font-light">
            Apresentaremos a seguir toda a estrutura de componentes de uma
            WebQuest em vídeos breves e explicativos que compõem uma verdadeira
            playlist de aprendizado.
          </p>

          <div className="mb-16 space-y-24">
            <YouTubeVideo videoId="Xzv0s27IZc8" />
            <YouTubeVideo videoId="btVlU-tCJio" />
            <YouTubeVideo videoId="pInmH3pF6Sg" />
            <YouTubeVideo videoId="OLpQ0xEHp24" />
            <YouTubeVideo videoId="eKw3HasYb00" />
            <YouTubeVideo videoId="Yc6v0N1ki74" />
          </div>
        </div>
      </div>
    </>
  )
}
