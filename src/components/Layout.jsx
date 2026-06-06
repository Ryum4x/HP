import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className="flex min-h-svh flex-col bg-cream text-ink">
      <Header />
      <main className={`flex-1 ${isHome ? '' : 'pt-[72px]'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
