export function setupProductInteractions() {
  let requestCount = 0
  
  // Category filtering
  const categoryTabs = document.querySelectorAll('.category-tab')
  const productCards = document.querySelectorAll('.product-card')
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'))
      // Add active class to clicked tab
      tab.classList.add('active')
      
      const selectedCategory = tab.dataset.category
      
      // Filter products
      productCards.forEach(card => {
        const cardCategory = card.dataset.category
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'block'
          card.style.animation = 'fadeIn 0.5s ease-in'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })

  // Request sample buttons
  const requestButtons = document.querySelectorAll('.btn-primary')
  requestButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      
      const productCard = button.closest('.product-card')
      const productName = productCard.querySelector('h3').textContent
      
      requestCount++
      
      button.textContent = 'Sample Requested'
      button.style.backgroundColor = '#00aa44'
      
      setTimeout(() => {
        button.textContent = 'Request Sample'
        button.style.backgroundColor = ''
      }, 2000)
      
      // Add visual feedback
      productCard.style.borderColor = '#00aa44'
      setTimeout(() => {
        productCard.style.borderColor = ''
      }, 2000)
      
      console.log(`Sample requested for ${productName}`)
    })
  })

  // Technical sheet buttons
  const techButtons = document.querySelectorAll('.btn-secondary')
  techButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      
      const productCard = button.closest('.product-card')
      const productName = productCard.querySelector('h3').textContent
      
      button.textContent = 'Downloading...'
      
      setTimeout(() => {
        button.textContent = 'Technical Sheet'
        alert(`Technical sheet for ${productName} would be downloaded in a real application.`)
      }, 1000)
    })
  })

  // CTA buttons
  const primaryCTA = document.querySelector('.cta-primary')
  if (primaryCTA) {
    primaryCTA.addEventListener('click', () => {
      document.querySelector('#products').scrollIntoView({ 
        behavior: 'smooth' 
      })
    })
  }

  const downloadCatalog = document.querySelector('.cta-secondary')
  if (downloadCatalog) {
    downloadCatalog.addEventListener('click', () => {
      alert('Product catalog download would be initiated in a real application.')
    })
  }

  // Navigation links
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth' 
          })
        }
      }
    })
  })

  // Quote button
  const quoteButton = document.querySelector('.nav-cta')
  if (quoteButton) {
    quoteButton.addEventListener('click', () => {
      alert('Quote request form would open in a real application.')
    })
  }

  // Chart animation
  const bars = document.querySelectorAll('.bar')
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((bar, index) => {
          setTimeout(() => {
            bar.style.transform = 'scaleY(1)'
            bar.style.opacity = '1'
          }, index * 200)
        })
      }
    })
  }, observerOptions)
  
  const chartContainer = document.querySelector('.chart-container')
  if (chartContainer) {
    // Initialize bars as hidden
    bars.forEach(bar => {
      bar.style.transform = 'scaleY(0)'
      bar.style.opacity = '0'
      bar.style.transformOrigin = 'bottom'
      bar.style.transition = 'all 0.6s ease'
    })
    
    observer.observe(chartContainer)
  }

  // CTA section buttons
  const ctaConsultation = document.querySelector('.btn-cta-primary')
  if (ctaConsultation) {
    ctaConsultation.addEventListener('click', () => {
      alert('Consultation request form would open in a real application.')
    })
  }

  const ctaGuide = document.querySelector('.btn-cta-secondary')
  if (ctaGuide) {
    ctaGuide.addEventListener('click', () => {
      alert('Product guide download would be initiated in a real application.')
    })
  }

  // Add CSS for fade-in animation
  const style = document.createElement('style')
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `
  document.head.appendChild(style)
}
