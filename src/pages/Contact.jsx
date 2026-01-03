import { motion } from 'framer-motion'
import { useState } from 'react'
import PageWrapper from '../components/PageWrapper'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <SEO
      title="Contact ScaleUp Digital"
      description="Get in touch with ScaleUp Digital to discuss growth-focused digital marketing solutions."
    >
      <PageWrapper>
        <section className="contact-page">
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get In Touch</h1>
            <p>Have a question or ready to scale your business? We'd love to hear from you.</p>
          </motion.div>

          <div className="contact-container">
            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Send us a Message</h2>
              {submitted && <div className="success-message">✓ Thank you! We'll get back to you soon.</div>}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2>Other Ways to Connect</h2>

              <div className="info-block">
                <h3>Email</h3>
                <p><a href="mailto:hello@scaleupdigital.com">hello@scaleupdigital.com</a></p>
              </div>

              <div className="info-block">
                <h3>Response Time</h3>
                <p>We typically respond within 24 hours on business days.</p>
              </div>

              <div className="info-block">
                <h3>What to Include</h3>
                <ul className="info-list">
                  <li>Your business type</li>
                  <li>Current marketing challenges</li>
                  <li>Goals for the next 6-12 months</li>
                  <li>Budget range (optional)</li>
                </ul>
              </div>

              <div className="info-block">
                <h3>Demo Notice</h3>
                <p className="demo-notice">This is a fictional demo agency created for portfolio purposes. No personal information is collected or stored.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
    </SEO>
  )
}

export default Contact