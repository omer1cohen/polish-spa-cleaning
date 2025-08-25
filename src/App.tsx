import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/navigation'
import Hero from './components/hero'
import Features from './components/features'
import Products from './components/products'
import ContactForm from './components/contact-form'
import { fadeUp } from './lib/motion'

// Footer Component
const Footer = () => {
  return (
    <footer className="section bg-bg border-t border-border/10">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-h3 font-black gradient-text mb-4">Plasto-Polish</h3>
            <p className="text-body text-fg/70 mb-6 leading-relaxed max-w-md">
              50+ years of innovation in professional cleaning solutions. 
              Trusted by professionals worldwide for premium, non-scratch cleaning technology.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-fg/60 hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body font-semibold text-fg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-body text-fg/70 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-body font-semibold text-fg mb-4">Contact</h4>
            <div className="space-y-3 text-body text-fg/70">
              <p>Tel Aviv, Israel</p>
              <p>+972-3-123-4567</p>
              <p>info@plasto-polish.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="pt-8 border-t border-border/10 text-center"
        >
          <p className="text-caption text-fg/60">
            © 2024 Plasto-Polish. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navigation />
      <main id="main" role="main">
        <Hero />
        <Features />
        <Products />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App