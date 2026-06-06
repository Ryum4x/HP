import { useState } from 'react'
import PageHeader from '../components/PageHeader'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="お問い合わせ"
        title="旅のご相談はこちら"
        description="ご希望の日程や行きたい場所をお聞かせください。通常1営業日以内にご返信いたします。"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">連絡先</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              メールでのお問い合わせは{' '}
              <a href="mailto:hello@nihonkiko.jp" className="font-medium text-brand-600 hover:underline">
                hello@nihonkiko.jp
              </a>
              まで
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-900">所在地</dt>
                <dd className="mt-1 text-slate-600">東京都渋谷区 1-2-3</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">営業時間</dt>
                <dd className="mt-1 text-slate-600">月〜金 9:00〜18:00</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <h2 className="text-lg font-semibold text-emerald-900">送信完了しました</h2>
                <p className="mt-2 text-sm text-emerald-700">
                  デモ用フォームのため、実際には送信されていません。
                  本番環境では Formspree などと連携できます。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      お名前
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      メールアドレス
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      placeholder="taro@example.com"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                    件名
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    placeholder="関西5日間の旅について"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    placeholder="行きたい場所、日程、人数などをお書きください..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 sm:w-auto"
                >
                  送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
