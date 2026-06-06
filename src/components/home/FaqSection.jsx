import { Link } from 'react-router-dom'

const faqs = [
  {
    q: '料金はどのくらいかかりますか？',
    a: '旅程の内容・日数・人数によって異なります。まずは無料でご相談ください。概算をお伝えします。',
  },
  {
    q: '英語でのサポートはありますか？',
    a: 'はい。英語でのメール・チャット対応が可能です。現地サポートも英語対応プランをご用意しています。',
  },
  {
    q: '急な日程変更はできますか？',
    a: '可能な範囲で柔軟に対応いたします。変更内容によって追加料金が発生する場合があります。',
  },
  {
    q: '一人旅でも利用できますか？',
    a: 'もちろんです。ソロ旅行者向けのプランも多数ご用意しています。安心してご相談ください。',
  },
]

function FaqSection() {
  return (
    <section className="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-vermillion">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">よくあるご質問</h2>
        </div>

        <dl className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <dt className="font-semibold text-ink">{faq.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-stone-600">{faq.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-sm text-stone-600">
          その他のご質問は{' '}
          <Link to="/contact" className="font-medium text-vermillion hover:underline">
            お問い合わせフォーム
          </Link>
          からどうぞ。
        </p>
      </div>
    </section>
  )
}

export default FaqSection
