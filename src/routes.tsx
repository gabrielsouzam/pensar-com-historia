import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AboutUs } from './pages/app/about-us/about-us'
import { Educational } from './pages/app/educational/educational'
import { HistoricalDocuments } from './pages/app/historical-documents/historical-documents'
import { Home } from './pages/app/home/home'
import { MaranhaoHinterland } from './pages/app/maranhao-hiterland/maranhao-hiterland'
import { Repositories } from './pages/app/repositories/repositories'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/quem-somos', element: <AboutUs /> },
      { path: '/educacional', element: <Educational /> },
      { path: '/sertao-maranhanse', element: <MaranhaoHinterland /> },
      { path: '/repositorios', element: <Repositories /> },
      { path: '/documentos-historicos', element: <HistoricalDocuments /> },
    ],
  },
])
