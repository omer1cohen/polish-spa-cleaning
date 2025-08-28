import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Star, Award } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Section } from './ui/section'
import { fadeUp, stagger, viewport } from '../lib/motion'

const Features = () => {
  const partners = [
    {
      name: 'KIMBERLI CLARK',
      description: 'Global leader in personal care and hygiene products',
      logo: 'KIMBERLY CLARK',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: '3M',
      description: 'Innovation company applying science to improve lives',
      logo: '3M',
      color: 'from-red-600 to-red-700'
    },
    {
      name: 'CONDOR',
      description: 'Professional cleaning equipment and supplies',
      logo: 'CONDOR',
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'HAGGIS',
      description: 'Premium industrial cleaning solutions',
      logo: 'HAGGIS',
      color: 'from-orange-600 to-orange-700'
    },
    {
      name: 'INVENTEL (WOLMART)',
      description: 'Advanced retail and distribution solutions',
      logo: 'INVENTEL',
      sublogo: 'WOLMART',
      color: 'from-purple-600 to-purple-700'
    }
  ]

  return (
    <Section
      id="about"
      eyebrow="Trusted Manufacturing Partner"
      title="Our Private Label"
      description="We proudly manufacture premium cleaning products for industry-leading brands worldwide, delivering excellence through 50+ years of innovation."
    >
      {/* Large Standing Rectangular Logo Sections */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-16"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {partners.map((partner, index) => (
          <motion.div 
            key={partner.name} 
            variants={fadeUp} 
            custom={index}
            className="group"
          >
            {/* Large Standing Rectangle */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
              {/* Large Logo Section */}
              <div className={`h-64 bg-gradient-to-br ${partner.color} flex flex-col items-center justify-center relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 2px, transparent 2px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Main Logo */}
                <div className="relative z-10 text-center">
                  <div className="text-white font-black text-3xl xl:text-2xl tracking-wider mb-2 drop-shadow-lg">
                    {partner.logo}
                  </div>
                  {partner.sublogo && (
                    <div className="text-white/90 font-bold text-lg tracking-wide drop-shadow-md">
                      {partner.sublogo}
                    </div>
                  )}
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Info Section */}
              <div className="bg-white p-6 border-t-4 border-primary/20">
                <h3 className="text-lg font-bold text-fg mb-2 text-center">{partner.name}</h3>
                <p className="text-sm text-fg-muted text-center leading-relaxed mb-4">
                  {partner.description}
                </p>
                
                {/* Trust Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border/30">
                    <Star className="w-4 h-4 fill-current text-accent" />
                    <span className="text-xs font-medium text-fg-muted">Trusted Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Trust Section */}
      <motion.div
        className="text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <div className="bg-surface/30 rounded-2xl p-8 border border-border/30">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-h2 font-bold text-fg">Manufacturing Excellence</h3>
          </div>
          <p className="text-lg text-fg-muted max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art manufacturing facilities and rigorous quality control processes 
            ensure that every product meets the highest international standards, trusted by 
            leading brands across multiple industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-fg-muted">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-fg-muted">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-fg-muted">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default Features