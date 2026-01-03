import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SEO from '../components/SEO'

export default function About() {
  const values = [
    { title: 'Data-Driven', description: 'Every decision backed by analytics and measurable results.' },
    { title: 'Transparency', description: 'Clear communication and honest reporting throughout our partnership.' },
    { title: 'Innovation', description: 'Staying ahead of trends to give your brand a competitive edge.' },
    { title: 'Partnership', description: 'Your success is our success. We grow together.' }
  ]

  return (
    <SEO
      title="About Us | ScaleUp Digital"
      description="Learn about ScaleUp Digital, a fictional demo agency focused on growth-driven digital marketing strategies."
    >
      <PageWrapper>
        <section className="about-page">
          <div className="about-header">
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              About ScaleUp Digital
            </motion.h1>
            <motion.p className="about-intro" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }}>
              We're a digital marketing agency focused on helping businesses scale through data-driven strategies and authentic partnerships.
            </motion.p>
          </div>

          <motion.div className="about-section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <h2>What We Do</h2>
            <p>
              We create growth-focused marketing strategies: SEO, paid advertising, social media, and content that convert. We blend technical skill with creative thinking to drive measurable business outcomes.
            </p>
          </motion.div>

          <motion.div className="about-section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }}>
            <h2>Who We Help</h2>
            <p>We work with startups, SMBs, and scaling brands that want a trusted marketing partner and measurable growth.</p>
            <ul className="help-list">
              <li>Want to grow online presence and reach</li>
              <li>Need a trusted digital marketing partner</li>
              <li>Value transparency and measurable results</li>
              <li>Are ready to invest in sustainable growth</li>
            </ul>
          </motion.div>

          <motion.div className="about-values" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.36 }}>
            <h2>Our Values</h2>
            <div className="values-grid">
              {values.map((v, i) => (
                <motion.div key={i} className="value-card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + i * 0.06 }}>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
            <h2>Our Approach</h2>
            <div className="approach-steps">
              <div className="step">
                <span className="step-number">1</span>
                <h3>Discovery</h3>
                <p>We understand your business, goals, and audience.</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <h3>Strategy</h3>
                <p>We develop a customized plan based on data and insights.</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <h3>Execution</h3>
                <p>We implement proven tactics across channels.</p>
              </div>
              <div className="step">
                <span className="step-number">4</span>
                <h3>Optimization</h3>
                <p>We monitor, test, and refine for continuous improvement.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </PageWrapper>
    </SEO>
  )
}