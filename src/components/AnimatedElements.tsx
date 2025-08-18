import React from 'react'
import { motion } from 'framer-motion'

// Floating Particles Component
export const FloatingParticles: React.FC<{ count?: number }> = ({ count = 15 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1080,
          }}
          animate={{
            y: -100,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

// Ripple Effect Component
export const RippleEffect: React.FC<{ trigger?: boolean }> = ({ trigger = false }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {trigger && (
        <>
          <motion.div
            className="absolute inset-0 border-2 border-primary-400/50 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-accent-400/50 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />
        </>
      )}
    </div>
  )
}

// Morphing Blob Component
export const MorphingBlob: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
        borderRadius: ["50%", "40%", "50%", "60%", "50%"]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}

// Text Reveal Animation
export const TextReveal: React.FC<{ 
  children: React.ReactNode
  delay?: number 
  className?: string 
}> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

// Staggered List Animation
export const StaggeredList: React.FC<{ 
  children: React.ReactNode[]
  className?: string 
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Magnetic Button Effect
export const MagneticButton: React.FC<{
  children: React.ReactNode
  className?: string
  onClick?: () => void
}> = ({ children, className = "", onClick }) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMousePosition({ x: x * 0.3, y: y * 0.3 })
  }

  return (
    <motion.button
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0, y: 0 })
      }}
      onClick={onClick}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.button>
  )
}

// Scroll Progress Indicator
export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0)

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight
      const scrollCurrent = window.scrollY
      setScrollProgress(scrollCurrent / scrollTotal)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 z-50 origin-left"
      style={{ scaleX: scrollProgress }}
    />
  )
}

// 3D Card Effect
export const Card3D: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = React.useState(0)
  const [rotateY, setRotateY] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = (y - centerY) / 10
    const rotateYValue = (centerX - x) / 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  )
}

// Loading Spinner
export const LoadingSpinner: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}