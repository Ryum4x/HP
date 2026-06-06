import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'ホーム', end: true },
  { to: '/about', label: '私たちについて' },
  { to: '/services', label: 'サービス' },
  { to: '/portfolio', label: '目的地' },
  { to: '/contact', label: 'お問い合わせ' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) => {
    const base =
      'link-underline rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.35,0.64,1)] hover:scale-105'

    if (transparent && !menuOpen) {
      return [
        base,
        isActive
          ? 'bg-white/20 text-white shadow-sm'
          : 'text-white/80 hover:bg-white/15 hover:text-white',
      ].join(' ')
    }

    return [
      base,
      isActive
        ? 'bg-brand-50 text-brand-700 shadow-sm'
        : 'text-stone-600 hover:bg-stone-100 hover:text-ink hover:shadow-sm',
    ].join(' ')
  }

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent && !menuOpen
          ? 'border-transparent bg-transparent'
          : 'border-b border-stone-200/80 bg-white/90 backdrop-blur-md shadow-sm',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2.5 transition duration-300 hover:scale-105"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vermillion text-sm font-bold text-white transition duration-300 group-hover:shadow-lg group-hover:shadow-vermillion/50 group-hover:scale-110">
            日
          </span>
          <span
            className={[
              'font-display text-lg font-semibold tracking-tight',
              transparent && !menuOpen ? 'text-white' : 'text-ink',
            ].join(' ')}
          >
            日本紀行
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className={[
              'btn-primary inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold',
              transparent
                ? 'bg-white text-ink shadow-md hover:bg-cream'
                : 'bg-vermillion text-white hover:bg-vermillion-dark',
            ].join(' ')}
          >
            旅を計画する
          </Link>
        </div>

        <button
          type="button"
          className={[
            'inline-flex items-center justify-center rounded-lg p-2 transition duration-300 hover:scale-110 md:hidden',
            transparent && !menuOpen
              ? 'text-white hover:bg-white/10'
              : 'text-stone-600 hover:bg-stone-100',
          ].join(' ')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-stone-200 bg-white px-4 py-4 md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                className="btn-primary block rounded-full bg-vermillion px-3 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                旅を計画する
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
