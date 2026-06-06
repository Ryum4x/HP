const stats = [
  { label: '旅行プラン実績', value: '500+' },
  { label: 'お客様満足度', value: '98%' },
  { label: '平均返信時間', value: '24h以内' },
]

const testimonials = [
  {
    quote: '初めての日本旅でしたが、日程と移動が完璧に組まれていて、家族全員が大満足でした。',
    name: '田中様',
    trip: '関西5日間コース',
  },
  {
    quote: '桜の時期に合わせたプランを提案してもらえたのが良かったです。次もお願いしたいです。',
    name: 'Lee様',
    trip: '東京・京都 花見旅',
  },
  {
    quote: '英語でのサポートがあり、安心して任せられました。細かいリクエストにも対応いただけました。',
    name: 'Sarah様',
    trip: 'オーダーメイド旅程',
  },
]

function TrustSection() {
  return (
    <section className="border-y border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-vermillion">信頼の実績</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            多くの旅行者に選ばれています
          </h2>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-stone-200 bg-cream px-6 py-8 text-center"
            >
              <dd className="font-display text-4xl font-bold text-vermillion">{stat.value}</dd>
              <dt className="mt-2 text-sm font-medium text-stone-600">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="hover-lift rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-stone-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 border-t border-stone-100 pt-4">
                <cite className="not-italic">
                  <span className="text-sm font-semibold text-ink">{item.name}</span>
                  <span className="mt-0.5 block text-xs text-stone-500">{item.trip}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
