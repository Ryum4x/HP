import { Link } from 'react-router-dom'
import { heroImage } from '../../data/japanSpots'

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <img
        src={heroImage}
        alt="朝日に照らされた富士山と湖面の反射"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <p className="animate-fade-up text-sm font-semibold tracking-[0.3em] text-sakura-300">
          日本を旅する
        </p>
        <h1 className="animate-fade-up animation-delay-100 mt-4 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          古の道と、ネオンの地平が
          <br className="hidden sm:block" />
          出会う場所
        </h1>
        <p className="animate-fade-up animation-delay-200 mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          寺社、山々、都市を巡る厳選ジャーニー。
          秘湯の里から、夜の東京まで。
        </p>

        <div className="animate-fade-up animation-delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/portfolio"
            className="btn-primary inline-flex items-center justify-center rounded-full bg-vermillion px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-vermillion/30 hover:bg-vermillion-dark"
          >
            目的地を見る
          </Link>
          <Link
            to="/contact"
            className="btn-ghost inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/25"
          >
            旅を計画する
          </Link>
        </div>

        <dl className="animate-fade-up animation-delay-400 mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {[
            { label: '目的地', value: '47都道府県' },
            { label: '隠れた名所', value: '130ヶ所以上' },
            { label: 'ベストシーズン', value: '通年' },
            { label: '旅行者', value: '1万人以上をガイド' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="hover-lift cursor-default rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md hover:border-white/40 hover:bg-white/20"
            >
              <dt className="text-xs font-medium text-white/60">{stat.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-white sm:text-base">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default HeroSection
