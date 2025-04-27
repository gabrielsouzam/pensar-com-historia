import { Helmet } from 'react-helmet-async'

import { StandardYouTubeVideo } from '../../@components/standard-youtube-video'
import { AvaliationCards } from '../components/avaliation-cards'
import { WebQuestTitle } from '../components/web-quest-title'

export function EvaluatingWebQuest() {
  return (
    <>
      <Helmet title="Avaliando WebQuest" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <WebQuestTitle title="Avaliando  uma " />

        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">A avaliação</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 space-y-4 text-justify text-2xl font-light">
            <p>
              Antes de disponibilizar sua WebQuest para os alunos, reserve um
              tempo para revisá-la e refiná-la! Uma boa WebQuest deve ser clara,
              objetiva e alinhada aos objetivos de aprendizagem. Para garantir
              sua qualidade, é essencial avaliar seus componentes, analisar os
              aspectos pedagógicos envolvidos e considerar critérios e
              recomendações que possam aprimorá-la.
            </p>
            <p>
              Abaixo, você encontrará sugestões para garantir que sua WebQuest
              atenda critérios pedagógicos e técnicos necessários para
              proporcionar uma experiência de aprendizagem eficaz.
            </p>
          </p>

          <AvaliationCards />

          <h2 className="mb-3 text-5xl font-light">
            Revisão e refinamento de uma{' '}
            <span className="italic">WebQuest</span> - vídeos
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />
          <p className="mb-16 text-justify text-2xl font-light">
            A revisão e o refinamento de uma WebQuest são etapas essenciais para
            garantir que a experiência de aprendizado seja clara, envolvente e
            eficaz. Ao revisar, é possível identificar erros, ajustar atividades
            para torná-las mais dinâmicas e verificar se os recursos e links
            estão atualizados e funcionais. Já o refinamento ajuda a melhorar a
            linguagem, a apresentação e a adequação das tarefas aos objetivos
            propostos, tornando o WebQuest mais atrativo e acessível para os
            alunos.
          </p>
          <p className="mb-16 text-justify text-2xl font-light">
            Para entender melhor esse processo e ver exemplos práticos, confira
            nossos vídeos de apoio a seguir!
          </p>

          <div className="grid grid-cols-2 gap-6 px-14">
            <StandardYouTubeVideo
              videoId="4CeSAhgfjKo"
              index={1}
              title="Dicas para Revisão e Refinamento de uma WebQuest (Parte I)"
            />
            <StandardYouTubeVideo
              videoId="aXNrfzzAZ1U"
              index={2}
              title="Dicas para Revisão e Refinamento de uma WebQuest (Parte II)"
            />
          </div>
        </div>
      </div>
    </>
  )
}
