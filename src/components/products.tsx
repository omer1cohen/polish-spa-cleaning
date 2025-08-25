import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Award, Shield, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
import { Section } from './ui/section'
import { fadeUp, stagger, viewport, cardHover } from '../lib/motion'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Magic Scouring Pads',
      category: 'Non-Scratch Technology',
      description: 'Revolutionary melamine foam pads that effortlessly remove stains without scratching delicate surfaces like glass, ceramic, and stainless steel.',
      features: ['Zero-scratch guarantee', 'Chemical-free cleaning', 'Works with water only', 'Removes 99% of stains'],
      badge: 'Best Seller',
      icon: Shield,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 2,
      name: 'Premium Microfiber Collection',
      category: 'Professional Grade',
      description: 'Ultra-fine microfiber cloths designed for streak-free cleaning and polishing of all surfaces.',
      features: ['Lint-free finish', '10x more absorbent', 'Machine washable 500+ times', 'Anti-bacterial treatment'],
      badge: 'Pro Choice',
      icon: Sparkles,
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 3,
      name: 'Industrial Strength Cleaners',
      category: 'Heavy-Duty Solutions',
      description: 'Professional-grade cleaning compounds formulated for the toughest industrial and commercial applications.',
      features: ['Cuts through grease & grime', 'Fast 30-second action', 'Safe for food surfaces', 'Concentrated formula'],
      badge: 'Professional',
      icon: Star,
      color: 'from-orange-600 to-red-500'
    },
    {
      id: 4,
      name: 'Eco-Smart Clean Series',
      category: 'Sustainable Technology',
      description: 'Environmentally responsible cleaning products that deliver professional results while protecting our planet.',
      features: ['100% biodegradable', 'Plant-based ingredients', 'Recycled packaging', 'Carbon-neutral production'],
      badge: 'Eco-Certified',
      icon: Award,
      color: 'from-green-600 to-emerald-500'
    },
    {
      id: 5,
      name: 'Master Clean Kit',
      category: 'Complete Solution',
      description: 'The ultimate cleaning arsenal with everything needed for professional-level household maintenance.',
      features: ['15-piece professional kit', '50% cost savings', 'Lifetime warranty', 'Expert training included'],
      badge: 'Value Master',
      icon: Star,
      color: 'from-indigo-600 to-purple-500'
    }
  ]

  return (
    <Section
      id="products"
      eyebrow="Our Product Range"
      title="Professional Cleaning Solutions"
      description="Discover our comprehensive range of innovative cleaning products, each designed with 50+ years of expertise and cutting-edge technology."
    >
      <div className="max-w-7xl mx-auto">
        {/* 3D Product Gallery */}
        <motion.div
          className="relative h-[600px] mb-20 perspective-1000"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl" />
          
          {/* 3D Product Cards */}
          <div className="relative h-full flex items-center justify-center">
            {products.map((product, index) => {
              const isCenter = index === selectedProduct
              const isLeft = index < selectedProduct
              const isRight = index > selectedProduct
              
              // Calculate 3D positioning
              const translateX = isCenter ? 0 : isLeft ? -120 - (selectedProduct - index) * 60 : 120 + (index - selectedProduct) * 60
              const translateZ = isCenter ? 0 : -200 - Math.abs(selectedProduct - index) * 100
              const rotateY = isCenter ? 0 : isLeft ? 45 : -45
              const scale = isCenter ? 1 : 0.8 - Math.abs(selectedProduct - index) * 0.1
              const opacity = isCenter ? 1 : 0.6 - Math.abs(selectedProduct - index) * 0.2

              return (
                <motion.div
                  key={product.id}
                  className="absolute cursor-pointer"
                  initial={false}
                  animate={{
                    x: translateX,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => setSelectedProduct(index)}
                  whileHover={{ scale: scale * 1.05 }}
                >
                  <div className="relative w-80 h-96 group">
                    {/* Product Card */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl shadow-2xl overflow-hidden`}>
                      {/* Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-bg/90 backdrop-blur-sm text-caption font-semibold text-primary rounded-full">
                          {product.badge}
                        </span>
                      </div>
                      
                      {/* Product Image Area */}
                      <div className="h-2/3 flex items-center justify-center p-8 relative overflow-hidden">
                        {/* Product Display */}
                        <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center relative overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-lg rotate-12" />
                            <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-lg -rotate-12" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
                          </div>
                          
                          <div className="text-center text-white relative z-10">
                            <div className="w-24 h-24 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                              <product.icon className="w-12 h-12 text-white" />
                            </div>
                            <p className="text-xl font-bold mb-2">{product.name}</p>
                            <p className="text-sm opacity-90 font-medium">{product.category}</p>
                            
                            {/* Product highlight */}
                            <div className="mt-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full inline-block">
                              <span className="text-xs font-semibold">{product.features[0]}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                      
                      {/* Product Info */}
                      <div className="h-1/3 p-6 bg-bg/90 backdrop-blur-sm">
                        <h3 className="text-lg font-bold text-fg mb-2 line-clamp-1">{product.name}</h3>
                        <p className="text-caption text-fg/70 mb-2">{product.category}</p>
                        {isCenter && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <p className="text-body text-fg/80 text-sm line-clamp-2 mb-3">
                              {product.description}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedProduct(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedProduct
                    ? 'bg-primary shadow-lg shadow-primary/50'
                    : 'bg-fg/30 hover:bg-fg/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Selected Product Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Product Info */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-caption font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  {products[selectedProduct].badge}
                </span>
                <h3 className="text-h1 font-bold mb-4">{products[selectedProduct].name}</h3>
                <p className="text-h3 text-accent font-semibold mb-6">
                  {products[selectedProduct].category}
                </p>
                <p className="text-body text-fg/80 leading-relaxed mb-8">
                  {products[selectedProduct].description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {products[selectedProduct].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-body text-fg/90">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  View Specifications
                </Button>
              </div>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card variant="elevated" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-bg" />
                  </div>
                  <h4 className="text-h3 font-bold mb-2">4.9/5</h4>
                  <p className="text-body text-fg/70">Customer Rating</p>
                </CardContent>
              </Card>

              <Card variant="elevated" className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-bg" />
                  </div>
                  <h4 className="text-h3 font-bold mb-2">50+</h4>
                  <p className="text-body text-fg/70">Years Experience</p>
                </CardContent>
              </Card>

              <Card variant="elevated" className="text-center col-span-2">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-bg" />
                  </div>
                  <h4 className="text-h3 font-bold mb-2">100%</h4>
                  <p className="text-body text-fg/70">Quality Guarantee</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}

export default Products