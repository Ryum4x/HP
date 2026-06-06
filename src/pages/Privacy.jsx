import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PageMeta from '../components/PageMeta'
import { site } from '../config/site'

function Privacy() {
  return (
    <>
      <PageMeta
        title="プライバシーポリシー"
        description={`${site.name}のプライバシーポリシー。個人情報の取り扱いについてご説明します。`}
        path="/privacy"
      />
      <PageHeader
        eyebrow="Legal"
        title="プライバシーポリシー"
        description="お客様の個人情報を適切に保護し、安心してご利用いただくための方針です。"
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-stone max-w-none space-y-8 text-sm leading-relaxed text-stone-700">
          <p>
            {site.name}（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
            以下のとおりプライバシーポリシーを定め、適切な管理・保護に努めます。
          </p>

          <div>
            <h2 className="text-lg font-semibold text-ink">1. 収集する情報</h2>
            <p className="mt-2">
              お問い合わせフォーム等を通じて、氏名、メールアドレス、お問い合わせ内容などを
              ご提供いただく場合があります。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">2. 利用目的</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>お問い合わせへの回答・ご連絡</li>
              <li>旅行プランのご提案およびサービス提供</li>
              <li>サービス改善のための分析（個人を特定しない形式）</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">3. 第三者への提供</h2>
            <p className="mt-2">
              法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">4. お問い合わせ</h2>
            <p className="mt-2">
              個人情報の取り扱いに関するお問い合わせは、
              <a href={`mailto:${site.email}`} className="text-vermillion hover:underline">
                {site.email}
              </a>
              までご連絡ください。
            </p>
          </div>

          <p className="text-xs text-stone-500">制定日：2026年6月6日</p>
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="text-sm font-medium text-vermillion hover:underline"
          >
            お問い合わせはこちら →
          </Link>
        </div>
      </section>
    </>
  )
}

export default Privacy
