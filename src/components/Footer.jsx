import { Link } from 'react-router-dom'

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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vermillion text-sm font-bold">
                日
              </span>
              <span className="font-display text-lg font-semibold">日本紀行</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              霊峰と竹林、ネオンに彩られた都市の夜まで。
              厳選された日本旅の体験をお届けします。
            </p>
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
                  href="mailto:hello@nihonkiko.jp"
                  className="link-underline inline-block transition duration-300 hover:translate-x-1 hover:text-sakura-300"
                >
                  hello@nihonkiko.jp
                </a>
              </li>
              <li>東京 · 京都 · 大阪</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/45">
          &copy; {new Date().getFullYear()} 日本紀行
        </div>
      </div>
    </footer>
  )
}

export default Footer
