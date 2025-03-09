import { Helmet } from 'react-helmet-async'

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
        </div>
      </div>
    </>
  )
}
