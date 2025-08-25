import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Section } from './ui/section'
import { fadeUp, stagger, viewport } from '../lib/motion'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'), // spam protection
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Contact form submitted:', data)
    reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@plasto-polish.com',
      href: 'mailto:info@plasto-polish.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+972-3-123-4567',
      href: 'tel:+97231234567'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Tel Aviv, Israel',
      href: '#'
    }
  ]

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Ready to Experience Premium Cleaning?"
      description="Contact us for personalized solutions and expert consultation on our professional cleaning products."
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {/* Contact Information */}
        <motion.div variants={fadeUp} className="space-y-8">
          <div>
            <h3 className="text-h2 font-semibold mb-6">Let's Connect</h3>
            <p className="text-body text-fg/70 mb-8 leading-relaxed">
              Our team of cleaning experts is ready to help you find the perfect solution 
              for your needs. Reach out today and discover why professionals choose Plasto-Polish.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                variants={fadeUp}
                custom={index}
                className="flex items-center gap-4 p-4 glass-dark rounded-brand hover:bg-surface/40 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <info.icon className="w-6 h-6 text-bg" />
                </div>
                <div>
                  <p className="text-caption font-semibold text-fg/60 uppercase tracking-wide">
                    {info.title}
                  </p>
                  <p className="text-body font-medium text-fg">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div 
            variants={fadeUp}
            custom={3}
            className="p-6 glass-dark rounded-brand"
          >
            <h4 className="text-h3 font-semibold mb-4">Why Choose Us?</h4>
            <div className="space-y-3">
              {['50+ years of expertise', 'Professional-grade products', 'Israeli innovation'].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-body text-fg/80">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeUp}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot field (hidden) */}
            <input
              type="text"
              {...register('honeypot')}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-body font-medium text-fg mb-2">
                Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className="w-full px-4 py-3 glass-dark rounded-brand border-0 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg text-fg placeholder-fg/50 transition-all duration-200"
                placeholder="Your full name"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-caption text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-body font-medium text-fg mb-2">
                Email *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 glass-dark rounded-brand border-0 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg text-fg placeholder-fg/50 transition-all duration-200"
                placeholder="your.email@company.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-2 text-caption text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-body font-medium text-fg mb-2">
                Company
              </label>
              <input
                {...register('company')}
                type="text"
                id="company"
                className="w-full px-4 py-3 glass-dark rounded-brand border-0 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg text-fg placeholder-fg/50 transition-all duration-200"
                placeholder="Your company name"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-body font-medium text-fg mb-2">
                Phone *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 glass-dark rounded-brand border-0 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg text-fg placeholder-fg/50 transition-all duration-200"
                placeholder="+972-3-123-4567"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-2 text-caption text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-body font-medium text-fg mb-2">
                Message *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-3 glass-dark rounded-brand border-0 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg text-fg placeholder-fg/50 transition-all duration-200 resize-none"
                placeholder="Tell us about your cleaning needs..."
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-caption text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Privacy Notice */}
            <p className="text-caption text-fg/60">
              By submitting this form, you agree to our privacy policy. 
              We'll never share your information with third parties.
            </p>

            {/* Submit Button */}
            <Button
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </Button>

            {/* Success Message */}
            {isSubmitSuccessful && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 glass bg-green-500/10 border border-green-500/20 rounded-brand flex items-center gap-3 text-green-400"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-body">Thank you! We'll get back to you within 24 hours.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default ContactForm