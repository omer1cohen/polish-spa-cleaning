import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Award,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Send
} from 'lucide-react'

// Animated Background Component
const AnimatedBackground = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="floating-orb w-96 h-96 bg-primary-500 top-10 -left-20" 
           style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-64 h-64 bg-accent-400 top-1/2 -right-10" 
           style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-48 h-48 bg-primary-300 bottom-20 left-1/3" 
           style={{ animationDelay: '4s' }} />
      
      {/* Animated Bubbles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * windowDimensions.width,
            y: windowDimensions.height + 100,
            scale: 0 
          }}
          animate={{ 
            y: -100,
            scale: [0, 1, 0],
            x: Math.random() * windowDimensions.width
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-50" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }} />
    </div>
  )
}

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="text-2xl font-display font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          Plasto<span className="text-accent-400">Polish</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Products', 'Innovation', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="glow-button px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-600 
                     text-white rounded-full font-medium hover:shadow-lg hover:shadow-accent-500/25 
                     transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Quote
        </motion.button>
      </div>
    </motion.nav>
  )
}

// Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -300])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoKey, setVideoKey] = useState(0)

  // Auto-refresh Plasto Polish video every 4 minutes to ensure continuous playback
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoKey(prev => prev + 1)
      setIsVideoLoaded(false)
      console.log('Auto-refreshing Plasto Polish video for continuous playback')
    }, 240000) // 4 minutes - slightly longer for better user experience

    return () => clearInterval(interval)
  }, [])

  // Log when video loads successfully
  useEffect(() => {
    if (isVideoLoaded) {
      console.log('✅ Plasto Polish video loaded and playing in background!')
    }
  }, [isVideoLoaded])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* YouTube Video Background - Simple and Direct */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: 'scale(1.1)', 
            filter: 'brightness(0.4) contrast(1.2)',
          }}
        >
          <iframe
            key={`youtube-bg-${videoKey}`}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WiBF2-xToIE?autoplay=1&mute=1&loop=1&playlist=WiBF2-xToIE&controls=0&showinfo=0&rel=0&fs=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&start=0&quality=hd1080&vq=hd1080&hd=1"
            title="פלסטו פוליש - מוצרי ניקיון איכותיים | Plasto Polish Quality Cleaning Products"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
            }}
            onLoad={() => {
              setIsVideoLoaded(true)
              console.log('YouTube video loaded successfully')
            }}
          />
        </div>
        
        {/* Fallback gradient background while video loads */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/50 text-center">
                <div className="animate-spin w-8 h-8 border-2 border-white/30 border-t-white/70 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">Loading video...</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-accent-900/20" />
      </div>

      {/* Subtle animated overlay elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles for extra ambiance */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: (typeof window !== 'undefined' ? window.innerHeight : 1080) + 100,
              scale: 0 
            }}
            animate={{ 
              y: -100,
              scale: [0, 1, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} />
      </div>
      
      <motion.div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto hero-content"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass text-accent-400 rounded-full text-sm font-medium mb-4">
            ✨ 50+ Years of Innovation
          </span>
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-8xl font-display font-black mb-6 gradient-text leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Future of
          <br />
          <span className="relative">
            Cleaning
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Experience revolutionary non-scratch scouring technology that transforms 
          household cleaning into an effortless, premium experience.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="glow-button group px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 
                       text-white rounded-full font-semibold text-lg hover:shadow-xl 
                       hover:shadow-accent-500/30 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            className="glass group px-8 py-4 text-white rounded-full font-semibold text-lg 
                       hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="w-5 h-5" />
            Learn More
          </motion.button>
        </motion.div>
        
        {/* Video Control Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            onClick={() => {
              setVideoKey(prev => prev + 1)
              setIsVideoLoaded(false)
              console.log('🔄 Manual Plasto Polish video refresh initiated')
            }}
            className="glass w-10 h-10 rounded-full flex items-center justify-center
                       text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="רענון סרטון פלסטו פוליש | Refresh Plasto Polish Video"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </motion.button>
          
          {/* Video Status Indicator */}
          <div className="glass px-3 py-2 rounded-full flex items-center gap-2 text-white/70 text-xs">
            <div className={`w-2 h-2 rounded-full ${isVideoLoaded ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-spin'}`} />
            {isVideoLoaded ? 'פעיל | Active' : 'טוען | Loading'}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
      
    </section>
  )
}

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Non-Scratch Technology",
      description: "Advanced fiber composition ensures delicate surface protection while delivering powerful cleaning performance."
    },
    {
      icon: Zap,
      title: "2-in-1 Innovation",
      description: "Revolutionary dual-action design combining gentle scrubbing and absorption in one premium product."
    },
    {
      icon: Award,
      title: "50+ Years Expertise",
      description: "Trusted by leading global companies and millions of households worldwide for consistent quality."
    }
  ]

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
            Why Choose Plasto-Polish?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the cutting-edge technology that makes our cleaning solutions 
            the preferred choice for discerning customers worldwide.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-dark p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl 
                                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Products Showcase
const ProductsShowcase = () => {
  const products = [
    {
      name: "Premium Scouring Pads",
      description: "Ultra-soft microfiber technology for delicate surfaces",
      features: ["Non-scratch", "Dual-layer", "Long-lasting"],
      image: "🧽"
    },
    {
      name: "Magic Erasers",
      description: "Revolutionary melamine foam for tough stain removal",
      features: ["Chemical-free", "Multi-surface", "Eco-friendly"],
      image: "✨"
    },
    {
      name: "Cleaning Cloths",
      description: "Advanced absorption technology for streak-free cleaning",
      features: ["Lint-free", "Quick-dry", "Reusable"],
      image: "🧹"
    }
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Our Product Range
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Innovative cleaning solutions designed for the modern home and commercial spaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="glass group rounded-3xl p-8 hover:shadow-2xl hover:shadow-primary-500/20 
                         transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-6xl mb-6 text-center">{product.image}</div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {product.name}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-400" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                className="w-full glow-button py-3 bg-gradient-to-r from-primary-500 to-primary-600 
                           text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/30 
                           transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-white/70">
              Ready to experience the future of cleaning? Contact our team today.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full glass border-white/20 rounded-xl px-4 py-3 text-white 
                               placeholder-white/50 focus:border-accent-400 focus:ring-2 
                               focus:ring-accent-400/20 transition-all duration-300"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-white font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full glass border-white/20 rounded-xl px-4 py-3 text-white 
                               placeholder-white/50 focus:border-accent-400 focus:ring-2 
                               focus:ring-accent-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-white font-medium">Company</label>
                <input
                  type="text"
                  className="w-full glass border-white/20 rounded-xl px-4 py-3 text-white 
                             placeholder-white/50 focus:border-accent-400 focus:ring-2 
                             focus:ring-accent-400/20 transition-all duration-300"
                  placeholder="Your company (optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-white font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full glass border-white/20 rounded-xl px-4 py-3 text-white 
                             placeholder-white/50 focus:border-accent-400 focus:ring-2 
                             focus:ring-accent-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your cleaning needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full glow-button py-4 bg-gradient-to-r from-accent-500 to-accent-600 
                           text-white rounded-xl font-semibold text-lg hover:shadow-xl 
                           hover:shadow-accent-500/30 transition-all duration-300 flex items-center 
                           justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
  ]

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <div className="text-3xl font-display font-bold text-white mb-4">
              Plasto<span className="text-accent-400">Polish</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Leading the future of cleaning technology with innovative, non-scratch solutions 
              trusted by professionals worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center 
                             text-white hover:text-accent-400 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4" />
                <span>+972-3-9368830</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4" />
                <span>sales@plasto-polish.co.il</span>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>P.O.Box 10383<br />Petach-Tikva, 49003, Israel</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Products', 'Innovation', 'About Us', 'Contact', 'Support'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block text-white/70 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-white/10 pt-8 text-center text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Plasto-Polish Ltd. All rights reserved. Designed for the future.</p>
        </motion.div>
      </div>
    </footer>
  )
}

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductsShowcase />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App