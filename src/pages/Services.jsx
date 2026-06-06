import PageHeader from '../components/PageHeader'
import PageMeta from '../components/PageMeta'

const services = [
  {
    title: 'オーダーメイド旅程',
    description: '日程・予算・興味に合わせた完全カスタムの旅行プランを作成します。',
    items: ['個人旅行', 'カップル', '家族旅行'],
  },
  {
    title: 'テーマ別ツアー',
    description: '食、文化、自然、鉄道など、テーマに沿った厳選ルートをご提案。',
    items: ['グルメ旅', '寺社巡り', '温泉', '鉄道'],
  },
  {
    title: '現地サポート',
    description: '到着から出発まで、日本語・英語対応のサポートで安心の旅を。',
    items: ['空港送迎', 'レストラン予約', '緊急対応'],
  },
  {
    title: '季節限定プラン',
    description: '桜、紅葉、花火、雪祭りなど、ベストシーズンに合わせた特別コース。',
    items: ['花見', '紅葉', '夏祭り', 'スキー'],
  },
]

function Services() {
  return (
    <>
      <PageMeta
        title="サービス"
        description="オーダーメイド旅程、テーマ別ツアー、現地サポートなど、あなたに合った旅のスタイルをご提案。"
        path="/services"
      />
      <PageHeader
        eyebrow="サービス"
        title="あなたに合った旅のスタイル"
        description="初めての日本から、リピーターの方まで。目的に合わせた柔軟なプランをご用意しています。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group hover-lift flex cursor-default flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-vermillion/30"
            >
              <h2 className="text-xl font-semibold text-slate-900 transition duration-300 group-hover:text-vermillion">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 transition duration-300 group-hover:bg-vermillion group-hover:text-white group-hover:shadow-md"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
