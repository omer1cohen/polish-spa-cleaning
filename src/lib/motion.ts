// Modern motion patterns with respect for reduced motion
export const easing = [0.22, 0.8, 0.36, 1] as const

// Fade up animation for sections
export const fadeUp = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  show: (i = 0) => ({ 
    y: 0, 
    opacity: 1, 
    transition: { 
      delay: i * 0.04,
      duration: 0.4, 
      ease: easing 
    }
  })
}

// Stagger container for child animations
export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
}

// Card hover lift animation
export const cardHover = {
  rest: { 
    y: 0, 
    scale: 1 
  },
  hover: { 
    y: -4, 
    scale: 1.02,
    transition: { 
      duration: 0.2, 
      ease: easing 
    } 
  }
}

// Hero entrance animations
export const heroTitle = {
  hidden: { 
    y: 30, 
    opacity: 0 
  },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      delay: 0.2, 
      ease: easing 
    }
  }
}

export const heroSubtitle = {
  hidden: { 
    y: 20, 
    opacity: 0 
  },
  show: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      delay: 0.4, 
      ease: easing 
    }
  }
}

// Brand underline animation
export const brandUnderline = {
  hidden: { 
    scaleX: 0 
  },
  show: { 
    scaleX: 1,
    transition: { 
      duration: 0.8, 
      delay: 0.8, 
      ease: easing 
    }
  }
}

// Button arrow nudge
export const arrowNudge = {
  rest: { x: 0 },
  hover: { 
    x: 4,
    transition: { 
      duration: 0.2, 
      ease: easing 
    }
  }
}

// Viewport settings for intersection observer
export const viewport = {
  once: true,
  margin: '-10% 0px'
}