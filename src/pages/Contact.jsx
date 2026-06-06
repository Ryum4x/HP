import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import PageMeta from '../components/PageMeta'
import { site } from '../config/site'

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error | unconfigured
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (!site.formspreeId) {
      setStatus('unconfigured')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await response.json().catch(() => ({}))
        setErrorMessage(data.error || '送信に失敗しました。時間をおいて再度お試しください。')
        setStatus('error')
      }
    } catch {
      setErrorMessage('通信エラーが発生しました。ネットワークをご確認ください。')
      setStatus('error')
    }
  }

  return (
    <>
      <PageMeta
        title="お問い合わせ"
        description="旅行プランのご相談・お見積りはこちら。通常1営業日以内にご返信いたします。"
        path="/contact"
      />
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
              <a href={`mailto:${site.email}`} className="font-medium text-brand-600 hover:underline">
                {site.email}
              </a>
              まで
            </p>

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-900">電話</dt>
                <dd className="mt-1 text-slate-600">
                  <a href={`tel:${site.phone.replace(/-/g, '')}`} className="hover:text-vermillion">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">所在地</dt>
                <dd className="mt-1 text-slate-600">{site.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-900">営業時間</dt>
                <dd className="mt-1 text-slate-600">{site.businessHours}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <h2 className="text-lg font-semibold text-emerald-900">送信完了しました</h2>
                <p className="mt-2 text-sm text-emerald-700">
                  お問い合わせありがとうございます。1営業日以内にご連絡いたします。
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm font-medium text-emerald-800 underline"
                >
                  新しいお問い合わせを送る
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                {status === 'unconfigured' && (
                  <p className="mb-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    フォーム送信の設定（Formspree ID）が未設定です。管理者にご連絡ください。
                  </p>
                )}
                {status === 'error' && (
                  <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMessage}</p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      お名前 <span className="text-vermillion">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      メールアドレス <span className="text-vermillion">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
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
                    メッセージ <span className="text-vermillion">*</span>
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

                <div className="mt-5">
                  <label className="flex items-start gap-3 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      name="privacy"
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-vermillion focus:ring-brand-500"
                    />
                    <span>
                      <Link to="/privacy" className="text-vermillion hover:underline">
                        プライバシーポリシー
                      </Link>
                      に同意する <span className="text-vermillion">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'sending' ? '送信中...' : '送信する'}
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
