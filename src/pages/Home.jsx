import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import ServiceCard from '../components/ServiceCard'
import SEO from '../components/SEO'
import StructuredData from '../components/StructuredData'

export default function Home() {
  const services = [
    { title: 'SEO Optimization', description: 'Improve search visibility and organic traffic.' },
    { title: 'Social Media Marketing', description: 'Build brand awareness and engagement.' },
    { title: 'Paid Advertising', description: 'Maximize ROI with targeted ad campaigns.' },
    { title: 'Content Marketing', description: 'Create content that converts visitors into customers.' },
    { title: 'Website Optimization', description: 'Enhance user experience and conversion rates.' }
  ]

  const reasons = [
    'Results-focused strategies',
    'Transparent reporting',
    'Experienced marketing specialists',
    'Customized growth plans'
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ScaleUp Digital',
    url: 'https://scaleupdigital.com',
    logo: 'https://scaleupdigital.com/logo.png',
    description: 'Data-driven digital marketing agency',
    sameAs: [
      'https://twitter.com/scaleupdigital',
      'https://linkedin.com/company/scaleupdigital'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'hello@scaleupdigital.com'
    }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.08 } }
  }

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  }

  return (
    <SEO
      title="Home"
      description="ScaleUp Digital helps brands grow online through SEO, paid advertising, and social media strategies that deliver measurable results."
      url="https://scaleupdigital.com"
    >
      <StructuredData schema={schemaData} />
      <PageWrapper>
        <section className="hero">
          <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
            <motion.h1 className="hero-headline" variants={item}>
              Scale your business with data-driven digital marketing
            </motion.h1>
            <motion.p className="hero-subtext" variants={item}>
              ScaleUp Digital helps brands grow online through SEO, paid advertising, and social media strategies that deliver measurable results.
            </motion.p>
            <motion.div className="hero-buttons" variants={item}>
              <button className="btn btn-primary">Get a Free Consultation</button>
              <button className="btn btn-secondary">View Our Services</button>
            </motion.div>
          </motion.div>
        </section>

        <section className="services">
          <div className="services-container">
            <motion.h2 className="services-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              Our Services
            </motion.h2>

            <div className="services-grid">
              {services.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}>
                  <ServiceCard title={s.title} description={s.description} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="why-container">
            <motion.h2 className="why-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              Why Choose Us
            </motion.h2>

            <div className="reasons-grid">
              {reasons.map((r, i) => (
                <motion.div key={i} className="reason-item" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}>
                  <div className="reason-icon">✓</div>
                  <p>{r}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2>Ready to grow your business?</h2>
            <p>Let's scale your success.</p>
            <button className="btn btn-primary">Get Started Today</button>
          </motion.div>
        </section>
      </PageWrapper>
    </SEO>
  )
}