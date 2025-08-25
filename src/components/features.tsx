import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Award, CheckCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Section } from './ui/section'
import { fadeUp, stagger, viewport } from '../lib/motion'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Non-Scratch Technology',
      description: 'Advanced melamine foam that cleans without damaging delicate surfaces.',
      benefits: ['Safe on all surfaces', 'No abrasive chemicals', 'Professional grade']
    },
    {
      icon: Zap,
      title: 'Superior Cleaning Power',
      description: 'Revolutionary scouring technology that removes the toughest stains effortlessly.',
      benefits: ['99.9% stain removal', 'Fast-acting formula', 'Long-lasting results']
    },
    {
      icon: Award,
      title: '50+ Years Experience',
      description: 'Decades of innovation in professional cleaning solutions and expertise.',
      benefits: ['Trusted by professionals', 'Quality guaranteed', 'Israeli innovation']
    }
  ]

  return (
    <Section
      id="about"
      eyebrow="Why Choose Plasto-Polish"
      title="Advanced Cleaning Technology"
      description="Experience the difference that five decades of innovation makes in professional cleaning solutions."
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {features.map((feature, index) => (
          <motion.div key={feature.title} variants={fadeUp} custom={index}>
            <Card 
              variant="elevated"
              className="h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              <CardHeader className="text-center pb-6">
                {/* Icon Ring */}
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-brand-sm group-hover:shadow-brand-md transition-shadow duration-300">
                  <feature.icon className="w-8 h-8 text-bg" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-body text-fg/80">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="mt-6 pt-6 border-t border-border/10">
                  <div className="flex justify-between text-caption text-fg/60 mb-2">
                    <span>Effectiveness</span>
                    <span>99%</span>
                  </div>
                  <div className="h-2 bg-surface/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '99%' }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                      viewport={viewport}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Features