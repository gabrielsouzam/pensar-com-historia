import { Helmet } from 'react-helmet-async'

import { RecomendationCards } from '../components/recomendation-cards'
import { WebQuestTitle } from '../components/web-quest-title'

export function WebQuestRecommendations() {
  return (
    <>
      <Helmet title="Avaliando Web-quest" />
      <div className="flex h-full w-full flex-col bg-brown-50 pb-40">
        <WebQuestTitle title="Recomendações ao implementar uma " />

        <div className="h-full px-32 pt-10 text-brown-800">
          <h2 className="mb-3 text-5xl font-light">A implementação</h2>
          <hr className="mb-10 border-t-2 border-brown-800" />

          <p className="mb-16 space-y-4 text-justify text-2xl font-light">
            Para implementar uma <span className="italic">WebQuest</span> de
            maneira eficaz, é fundamental considerar aspectos essenciais como
            planejamento, engajamento dos alunos e a adaptação às suas
            necessidades, além de garantir acessibilidade e monitoramento
            constante para otimizar os resultados educacionais. Elencamos 7
            tópicos de recomendações:
          </p>

          <RecomendationCards />
        </div>
      </div>
    </>
  )
}
