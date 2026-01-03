import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, children, meta = {}, image = null, url = null }) {
  const siteName = 'ScaleUp Digital'
  const fullTitle = title ? `${title} — ${siteName}` : siteName
  const desc = description || 'ScaleUp Digital — data-driven digital marketing services that drive measurable growth.'
  const ogImage = image || 'https://scaleupdigital.com/og-image.png'
  const canonicalUrl = url || 'https://scaleupdigital.com'

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <meta name="theme-color" content="#2563EB" />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Additional Meta */}
        {Object.entries(meta).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
      </Helmet>
      {children}
    </>
  )
}