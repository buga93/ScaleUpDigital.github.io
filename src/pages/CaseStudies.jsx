import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import CaseStudyCard from '../components/CaseStudyCard'
import SEO from '../components/SEO'

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'FitZone Gym',
      industry: 'Fitness & Wellness',
      challenge: 'Low website traffic and minimal online engagement.',
      strategy: 'Implemented SEO optimization and targeted social media campaigns.',
      results: 'Increased website traffic by 120% and generated 3x more leads in 3 months.'
    },
    {
      client: 'Urban Brew Café',
      industry: 'Food & Beverage',
      challenge: 'Limited local visibility and low customer retention.',
      strategy: 'Optimized Google Business profile and launched local paid ads.',
      results: 'Boosted local search visibility by 85% and increased repeat customers.'
    },
    {
      client: 'TechNova Solutions',
      industry: 'Technology',
      challenge: 'Low conversion rate on landing pages.',
      strategy: 'Redesigned landing pages and ran A/B tested paid ad campaigns.',
      results: 'Improved conversion rate by 60% and reduced cost per lead.'
    }
  ]

  return (
    <SEO
      title="Case Studies | ScaleUp Digital"
      description="View realistic demo case studies showcasing data-driven digital marketing results."
    >
      <PageWrapper>
        <section className="case-studies-page">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Case Studies
          </motion.h1>

          <motion.p
            className="case-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            Real results from real clients — examples are fictional and for demo purposes.
          </motion.p>

          <div className="case-grid">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <CaseStudyCard
                  client={cs.client}
                  industry={cs.industry}
                  challenge={cs.challenge}
                  strategy={cs.strategy}
                  results={cs.results}
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="case-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            *All case studies are fictional examples created for portfolio demonstration purposes.
          </motion.p>
        </section>
      </PageWrapper>
    </SEO>
  )
}

export default CaseStudies
