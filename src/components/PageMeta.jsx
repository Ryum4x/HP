import { useEffect } from 'react'
import { site } from '../config/site'

function setMetaTag(attr, key, content) {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function PageMeta({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — 日本を旅する`
  const desc = description || site.description
  const url = `${site.url}${path}`
  const ogImage = image ? (image.startsWith('http') ? image : `${site.url}${image}`) : `${site.url}/images/destinations/fujisan.jpg`

  useEffect(() => {
    document.title = fullTitle
    setMetaTag('name', 'description', desc)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', desc)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', ogImage)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:locale', 'ja_JP')
    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', desc)
  }, [fullTitle, desc, url, ogImage])

  return null
}

export default PageMeta
