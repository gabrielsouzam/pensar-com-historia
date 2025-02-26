import { Outlet } from 'react-router-dom'

import { AppFooter } from './components/app-footer'
import { AppHeader } from './components/app-header'

export function AppLayout() {
  return (
    <div className="text-zinc-200">
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}
