function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50/60 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

export default PageHeader
