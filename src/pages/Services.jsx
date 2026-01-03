import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import ServiceCard from '../components/ServiceCard'
import SEO from '../components/SEO'

const Services = () => {
  const services = [
    {
      title: 'SEO Optimization',
      description: "Improve your website's visibility on search engines and attract high-quality organic traffic."
    },
    {
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across major social platforms.'
    },
    {
      title: 'Paid Advertising',
      description: 'Launch targeted ad campaigns that maximize ROI and drive conversions.'
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that educates, builds trust, and converts visitors into customers.'
    },
    {
      title: 'Website Optimization',
      description: 'Enhance website performance, usability, and conversions through data-driven improvements.'
    }
  ]

  return (
    <SEO
      title="Digital Marketing Services | ScaleUp Digital"
      description="Explore SEO, social media marketing, paid advertising, and content marketing services designed to scale your business."
    >
      <PageWrapper>
        <section className="services-page">
          <div className="services-page-header">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="services-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer growth-focused digital marketing services designed to help businesses scale efficiently.
            </motion.p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard title={service.title} description={service.description} />
              </motion.div>
            ))}
          </div>
        </section>
      </PageWrapper>
    </SEO>
  )
}

export default Services