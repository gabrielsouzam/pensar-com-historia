import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AboutUs } from './pages/app/about-us/about-us'
import { Educational } from './pages/app/educational/educational'
import { HistoricalDocuments } from './pages/app/historical-documents/historical-documents'
import { MaranhaoHinterland } from './pages/app/maranhao-hiterland/maranhao-hiterland'
import { REDs } from './pages/app/reds/reds'
import { Repositories } from './pages/app/repositories/repositories'
import { TeacherArea } from './pages/app/teacher-area/teacher-area'
import { CreatingWebQuest } from './pages/app/web-quest/creating-web-quest/creating-web-quest'
import { EvaluatingWebQuest } from './pages/app/web-quest/evaluation-web-quest/evaluation-web-quest'
import { WebQuestMethodology } from './pages/app/web-quest/web-quest-methodology/web-quest-methodology'
import { WebQuestRecommendations } from './pages/app/web-quest/web-quest-recommendations/web-quest-recommendations'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <AboutUs /> },
      { path: '/educacional', element: <Educational /> },
      { path: '/sertao-maranhanse', element: <MaranhaoHinterland /> },
      { path: '/repositorios', element: <Repositories /> },
      { path: '/documentos-historicos', element: <HistoricalDocuments /> },
      { path: '/metodologia-web-quest', element: <WebQuestMethodology /> },
      { path: '/produzindo-web-quest', element: <CreatingWebQuest /> },
      { path: '/avaliando-web-quest', element: <EvaluatingWebQuest /> },
      {
        path: '/recomendacoes-web-quest',
        element: <WebQuestRecommendations />,
      },
      { path: '/reds', element: <REDs /> },
      { path: '/area-docente', element: <TeacherArea /> },
    ],
  },
])
