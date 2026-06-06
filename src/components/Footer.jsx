import { Link } from 'react-router-dom'
import { site } from '../config/site'

const footerLinks = [
  { to: '/', label: 'ホーム' },
  { to: '/about', label: '私たちについて' },
  { to: '/services', label: 'サービス' },
  { to: '/portfolio', label: '目的地' },
  { to: '/contact', label: 'お問い合わせ' },
]

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vermillion text-sm font-bold">
                日
              </span>
              <span className="font-display text-lg font-semibold">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{site.tagline}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white/90">サイトマップ</h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline inline-block text-sm text-white/65 transition duration-300 hover:translate-x-1 hover:text-sakura-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white/90">お問い合わせ</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline inline-block transition duration-300 hover:translate-x-1 hover:text-sakura-300"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/-/g, '')}`} className="hover:text-sakura-300">
                  {site.phone}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wider text-white/90">法的情報</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>
                <Link to="/privacy" className="hover:text-sakura-300">
                  プライバシーポリシー
                </Link>
              </li>
              <li>{site.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/45">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
