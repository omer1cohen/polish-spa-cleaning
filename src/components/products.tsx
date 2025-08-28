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
      name: 'Multi-Color Scouring Sponges',
      category: 'Kitchen Essentials',
      description: 'Colorful, high-quality scouring sponges in vibrant colors. Perfect for kitchen cleaning with dual-sided functionality - soft sponge on one side, abrasive scouring surface on the other.',
      features: ['Dual-sided design', 'Color-coded for hygiene', 'Long-lasting durability', 'Non-scratch formula'],
      badge: 'Best Seller',
      icon: Shield,
      color: 'from-blue-600 to-cyan-500',
      image: '/images/products/product1.jpg'
    },
    {
      id: 2,
      name: 'Steel Wool Scrubbers',
      category: 'Heavy-Duty Cleaning',
      description: 'Premium steel wool scrubbers in silver and bronze grades. Ideal for tough cleaning jobs, grease removal, and surface preparation.',
      features: ['Fine grade steel wool', 'Rust-resistant', 'Professional quality', 'Multiple grade options'],
      badge: 'Pro Choice',
      icon: Sparkles,
      color: 'from-purple-600 to-pink-500',
      image: '/images/products/product2.jpg'
    },
    {
      id: 3,
      name: 'Metallic Scouring Pads',
      category: 'Industrial Grade',
      description: 'High-performance metallic scouring pads in green and red colors. Designed for heavy-duty cleaning applications and stubborn stain removal.',
      features: ['Extra-strong fibers', 'Colorfast technology', 'Industrial strength', 'Long-lasting performance'],
      badge: 'Professional',
      icon: Star,
      color: 'from-orange-600 to-red-500',
      image: '/images/products/product3.jpg'
    },
    {
      id: 4,
      name: 'Green & Silver Scrub Pads',
      category: 'Versatile Cleaning',
      description: 'Versatile green and silver scouring pads that combine gentle cleaning with effective scrubbing power. Perfect for both delicate and tough cleaning tasks.',
      features: ['Versatile dual-action', 'Gentle yet effective', 'Dishwasher safe', 'Multi-surface compatible'],
      badge: 'Versatile',
      icon: Award,
      color: 'from-green-600 to-emerald-500',
      image: '/images/products/product4.jpg'
    },
    {
      id: 5,
      name: 'Sunday Pastels Collection',
      category: 'Premium Home Care',
      description: 'Beautiful pastel-colored sponges in an elegant gift box. Perfect combination of functionality and aesthetics for modern homes.',
      features: ['8 colorful sponges', 'Gift-ready packaging', 'Premium quality foam', 'Modern aesthetic design'],
      badge: 'Premium',
      icon: Star,
      color: 'from-indigo-600 to-purple-500',
      image: '/images/products/pastels-sponges.png'
    },
    {
      id: 6,
      name: 'Metallic Triangular Pads',
      category: 'Specialty Cleaning',
      description: 'Unique triangular-shaped metallic scouring pads that reach into corners and tight spaces. Advanced steel fiber technology for superior cleaning power.',
      features: ['Triangular corner design', 'Advanced steel fibers', 'Corner accessibility', 'Professional grade'],
      badge: 'Innovative',
      icon: Shield,
      color: 'from-slate-600 to-gray-500',
      image: '/images/products/product6.png'
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
        {/* Clean Hero Product Image */}
        <motion.div
          className="relative mb-20 rounded-2xl overflow-hidden bg-white shadow-sm border border-border/20"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="relative h-64 lg:h-80">
            <img 
              src="/images/products/product1.jpg"
              alt="Multi-Color Scouring Sponges"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-center">
                <h3 className="text-2xl lg:text-4xl font-bold mb-3 text-fg">Premium Quality</h3>
                <p className="text-base lg:text-lg text-fg/70 max-w-2xl mx-auto">50+ Years of Innovation in Professional Cleaning</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clean Minimal Product Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group cursor-pointer"
              variants={cardHover}
              whileHover="hover"
              onClick={() => setSelectedProduct(index)}
            >
              {/* Clean White Card */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300">
                {/* Product Image */}
                <div className="relative aspect-[4/3] bg-surface">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Clean Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white text-caption font-medium text-primary rounded-lg shadow-sm border border-border/30">
                      {product.badge}
                    </span>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-fg mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-primary font-medium">{product.category}</p>
                  </div>
                  
                  <p className="text-sm text-fg-muted line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Feature List */}
                  <div className="space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-xs text-fg-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 ring-2 ring-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
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