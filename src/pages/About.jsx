import PageHeader from '../components/PageHeader'
import PageMeta from '../components/PageMeta'

const values = [
  {
    title: 'シンプルに、深く',
    description: '情報を整理し、旅の本質が伝わる体験を。迷わず、心に残る旅へ。',
  },
  {
    title: '細部へのこだわり',
    description: '移動、宿、食、時間配分まで。一つひとつ丁寧に設計します。',
  },
  {
    title: '伴走するパートナー',
    description: '旅前から旅後まで、寄り添いながら一緒にプランを育てていきます。',
  },
]

function About() {
  return (
    <>
      <PageMeta
        title="私たちについて"
        description="日本紀行は、日本の魅力を深く味わえる旅をデザインする旅行チームです。"
        path="/about"
      />
      <PageHeader
        eyebrow="私たちについて"
        title="小さなチームで、大きなおもてなし"
        description="日本紀行は、日本の魅力を深く味わえる旅をデザインする旅行チームです。定番の名所と、知る人ぞ知る場所をバランスよく。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">私たちの想い</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              「日本を、もっと自分らしく旅したい」——そんな声から生まれました。
              ガイドブックの定番ルートだけでなく、季節や興味に合わせた
              オーダーメイドの旅程を提案しています。
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              初めての日本旅から、何度目かのリピーターの方まで。
              旅のペースや予算に合わせて、無理のないプランを一緒に作り上げます。
            </p>
          </div>

          <div className="hover-lift rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:border-vermillion/20">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-medium text-slate-500">手がけた旅</dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">500+</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">経験年数</dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">8年</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">満足度</dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">98%</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">返信時間</dt>
                <dd className="mt-1 text-3xl font-bold text-slate-900">24時間以内</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">大切にしていること</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="hover-lift cursor-default rounded-2xl border border-slate-200 p-6 hover:border-vermillion/30"
              >
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
