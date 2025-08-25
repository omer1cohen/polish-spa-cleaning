import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, RotateCcw, Play } from 'lucide-react'
import { Button } from './ui/button'
import { heroTitle, heroSubtitle, brandUnderline, arrowNudge } from '../lib/motion'

const Hero = () => {
  const [videoKey, setVideoKey] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Auto-refresh video every 4 minutes for continuous playback
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoKey(prev => prev + 1)
      setIsVideoLoaded(false)
    }, 240000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: 'scale(1.1)', 
            filter: 'brightness(0.3) contrast(1.3)',
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
              height: '56.25vw',
            }}
            onLoad={() => setIsVideoLoaded(true)}
          />
        </div>
        
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/40 to-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          variants={heroSubtitle}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-caption font-semibold text-accent uppercase tracking-wide">
            <Sparkles className="w-4 h-4" />
            50+ Years of Innovation
          </span>
        </motion.div>
        
        {/* Main Title */}
        <motion.h1
          variants={heroTitle}
          initial="hidden"
          animate="show"
          className="text-display-1 md:text-8xl font-black mb-8 leading-none"
        >
          <span className="gradient-text">The Future of</span>
          <br />
          <span className="relative brand-underline">
            Cleaning
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-80"
              variants={brandUnderline}
              initial="hidden"
              animate="show"
              style={{ transformOrigin: 'left' }}
            />
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          variants={heroSubtitle}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-fg/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
        >
          Experience revolutionary non-scratch technology that transforms 
          household cleaning into an effortless, premium experience.
        </motion.p>
        
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            variants={arrowNudge}
            initial="rest"
            whileHover="hover"
          >
            <Button size="lg" className="text-lg px-8">
              Explore Products
              <motion.div variants={arrowNudge}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-5 h-5" />
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 flex gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="glass w-12 h-12 p-0"
          onClick={() => {
            setVideoKey(prev => prev + 1)
            setIsVideoLoaded(false)
          }}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {/* Loading indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-caption text-fg/60">Loading video...</p>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-fg/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-fg/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero