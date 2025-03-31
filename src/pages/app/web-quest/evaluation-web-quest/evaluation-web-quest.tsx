import { Helmet } from 'react-helmet-async'

import { StandardYouTubeVideo } from '../../@components/standard-youtube-video'
import { AvaliationCards } from '../components/avaliation-cards'
import { WebQuestTitle } from '../components/web-quest-title'

export function EvaluatingWebQuest() {
  return (
    <>
      <Helmet title="Avaliando Web-quest" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <WebQuestTitle title="Avaliando  uma " />

        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">A avaliação</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 space-y-4 text-justify text-2xl font-light">
            Para avaliar uma{' '}
            <span className="font-normal italic text-brown-800">WebQuest</span>,
            deve-se levar em consideração componentes, aspectos atrelados a
            estes componentes e critérios e recomendações pertinentes sobre
            esses aspectos. Abaixo você encontrará sugestões sobre
          </p>

          <AvaliationCards />

          <h2 className="mb-3 text-5xl font-light">
            Revisão e refinamento de um <span className="italic">WebQuest</span>{' '}
            - vídeos
          </h2>
          <hr className="mb-10 border-t-2 border-brown-800" />
          <p className="mb-16 text-justify text-2xl font-light">
            A revisão e o refinamento de um WebQuest são etapas essenciais para
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
              title="Dicas para Revisão e Refinamento de um WebQuest (Parte I)"
            />
            <StandardYouTubeVideo
              videoId="aXNrfzzAZ1U"
              index={2}
              title="Dicas para Revisão e Refinamento de um WebQuest (Parte II)"
            />
          </div>
        </div>
      </div>
    </>
  )
}
