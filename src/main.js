import './style.css'
import { setupProductInteractions } from './counter.js'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <div class="logo">
          <span class="logo-icon">3</span>
          <span class="logo-text">Polish Clean</span>
        </div>
      </div>
      <div class="nav-menu">
        <a href="#products" class="nav-link">Products</a>
        <a href="#solutions" class="nav-link">Solutions</a>
        <a href="#innovation" class="nav-link">Innovation</a>
        <a href="#about" class="nav-link">About Us</a>
        <a href="#contact" class="nav-link">Contact</a>
        <button class="nav-cta">Get Quote</button>
      </div>
    </div>
  </nav>

  <header class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-breadcrumb">
          <span>Home</span> / <span>Industrial Cleaning Solutions</span>
        </div>
        <h1 class="hero-title">Advanced Polish Cleaning Technologies</h1>
        <p class="hero-subtitle">Professional-grade cleaning solutions engineered for industrial and commercial applications. Trusted by leading manufacturers across Poland and Europe.</p>
        <div class="hero-cta-group">
          <button class="cta-primary">Explore Products</button>
          <button class="cta-secondary">Download Catalog</button>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">50+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Industrial Clients</div>
          </div>
          <div class="stat">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Effectiveness Rate</div>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-placeholder">
          <div class="tech-grid">
            <div class="tech-item active"></div>
            <div class="tech-item"></div>
            <div class="tech-item active"></div>
            <div class="tech-item"></div>
            <div class="tech-item active"></div>
            <div class="tech-item"></div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="products" class="products">
    <div class="section-container">
      <div class="section-header">
        <h2>Professional Cleaning Solutions</h2>
        <p>Engineered for performance, designed for results</p>
      </div>
      
      <div class="product-categories">
        <button class="category-tab active" data-category="industrial">Industrial Grade</button>
        <button class="category-tab" data-category="commercial">Commercial</button>
        <button class="category-tab" data-category="specialized">Specialized</button>
      </div>

      <div class="product-grid">
        <div class="product-card" data-product="degreaser" data-category="industrial">
          <div class="product-image">
            <div class="product-badge">INDUSTRIAL</div>
            <div class="product-icon">🧪</div>
          </div>
          <div class="product-info">
            <h3>HD-7000 Heavy Duty Degreaser</h3>
            <p>Advanced enzyme-based formula for industrial equipment cleaning. Removes grease, oil, and carbon deposits.</p>
            <div class="product-specs">
              <div class="spec">
                <span class="spec-label">Effectiveness:</span>
                <span class="spec-value">99.8%</span>
              </div>
              <div class="spec">
                <span class="spec-label">pH Level:</span>
                <span class="spec-value">12.5</span>
              </div>
              <div class="spec">
                <span class="spec-label">Volume:</span>
                <span class="spec-value">5L, 20L, 200L</span>
              </div>
            </div>
            <div class="product-actions">
              <button class="btn-primary">Request Sample</button>
              <button class="btn-secondary">Technical Sheet</button>
            </div>
          </div>
        </div>

        <div class="product-card" data-product="sanitizer" data-category="commercial">
          <div class="product-image">
            <div class="product-badge">COMMERCIAL</div>
            <div class="product-icon">🛡️</div>
          </div>
          <div class="product-info">
            <h3>CS-2000 Multi-Surface Sanitizer</h3>
            <p>Broad-spectrum antimicrobial solution for commercial spaces. EPA approved for food contact surfaces.</p>
            <div class="product-specs">
              <div class="spec">
                <span class="spec-label">Kill Rate:</span>
                <span class="spec-value">99.99%</span>
              </div>
              <div class="spec">
                <span class="spec-label">Contact Time:</span>
                <span class="spec-value">30 seconds</span>
              </div>
              <div class="spec">
                <span class="spec-label">Certification:</span>
                <span class="spec-value">EPA, FDA</span>
              </div>
            </div>
            <div class="product-actions">
              <button class="btn-primary">Request Sample</button>
              <button class="btn-secondary">Technical Sheet</button>
            </div>
          </div>
        </div>

        <div class="product-card" data-product="solvent" data-category="specialized">
          <div class="product-image">
            <div class="product-badge">SPECIALIZED</div>
            <div class="product-icon">⚗️</div>
          </div>
          <div class="product-info">
            <h3>SP-500 Precision Solvent Cleaner</h3>
            <p>Low-residue solvent for precision components. Ideal for electronics and optical equipment cleaning.</p>
            <div class="product-specs">
              <div class="spec">
                <span class="spec-label">Purity:</span>
                <span class="spec-value">99.95%</span>
              </div>
              <div class="spec">
                <span class="spec-label">Evaporation:</span>
                <span class="spec-value">&lt;15 seconds</span>
              </div>
              <div class="spec">
                <span class="spec-label">Residue:</span>
                <span class="spec-value">&lt;0.001%</span>
              </div>
            </div>
            <div class="product-actions">
              <button class="btn-primary">Request Sample</button>
              <button class="btn-secondary">Technical Sheet</button>
            </div>
          </div>
        </div>

        <div class="product-card" data-product="foam" data-category="industrial">
          <div class="product-image">
            <div class="product-badge">INDUSTRIAL</div>
            <div class="product-icon">🫧</div>
          </div>
          <div class="product-info">
            <h3>FC-3000 Foam Cleaner Pro</h3>
            <p>High-expansion foam for vertical surface cleaning. Extended contact time for superior cleaning power.</p>
            <div class="product-specs">
              <div class="spec">
                <span class="spec-label">Expansion:</span>
                <span class="spec-value">40:1 ratio</span>
              </div>
              <div class="spec">
                <span class="spec-label">Cling Time:</span>
                <span class="spec-value">10+ minutes</span>
              </div>
              <div class="spec">
                <span class="spec-label">Coverage:</span>
                <span class="spec-value">250 m²/L</span>
              </div>
            </div>
            <div class="product-actions">
              <button class="btn-primary">Request Sample</button>
              <button class="btn-secondary">Technical Sheet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="innovation" class="innovation">
    <div class="section-container">
      <div class="innovation-content">
        <div class="innovation-text">
          <div class="section-tag">INNOVATION</div>
          <h2>Science-Driven Solutions</h2>
          <p>Our R&D team combines 50+ years of chemical expertise with cutting-edge technology to develop cleaning solutions that meet the most demanding industrial requirements.</p>
          <div class="innovation-features">
            <div class="feature-item">
              <div class="feature-icon">🔬</div>
              <div class="feature-text">
                <h4>Advanced Formulation</h4>
                <p>Proprietary enzyme technology for superior cleaning performance</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🌍</div>
              <div class="feature-text">
                <h4>Environmental Responsibility</h4>
                <p>Biodegradable formulas that meet strict environmental standards</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📊</div>
              <div class="feature-text">
                <h4>Data-Driven Results</h4>
                <p>Comprehensive testing ensures consistent, measurable outcomes</p>
              </div>
            </div>
          </div>
        </div>
        <div class="innovation-visual">
          <div class="data-visualization">
            <div class="chart-container">
              <div class="chart-title">Cleaning Effectiveness</div>
              <div class="chart-bars">
                <div class="bar" style="height: 95%"><span>95%</span></div>
                <div class="bar" style="height: 88%"><span>88%</span></div>
                <div class="bar" style="height: 76%"><span>76%</span></div>
                <div class="bar" style="height: 65%"><span>65%</span></div>
              </div>
              <div class="chart-labels">
                <span>Our Solution</span>
                <span>Competitor A</span>
                <span>Competitor B</span>
                <span>Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="section-container">
      <div class="cta-content">
        <h2>Ready to Transform Your Cleaning Operations?</h2>
        <p>Contact our technical specialists for a customized solution assessment</p>
        <div class="cta-actions">
          <button class="btn-cta-primary">Request Consultation</button>
          <button class="btn-cta-secondary">Download Product Guide</button>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Products</h3>
          <ul>
            <li><a href="#">Industrial Cleaners</a></li>
            <li><a href="#">Commercial Solutions</a></li>
            <li><a href="#">Specialized Formulas</a></li>
            <li><a href="#">Custom Development</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Technical Documentation</a></li>
            <li><a href="#">Safety Data Sheets</a></li>
            <li><a href="#">Training Resources</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Polish Clean</a></li>
            <li><a href="#">Manufacturing</a></li>
            <li><a href="#">Quality Assurance</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <div class="contact-info">
            <p>Polish Clean Technologies</p>
            <p>ul. Przemysłowa 15, 00-001 Warszawa</p>
            <p>+48 22 123 45 67</p>
            <p>info@polishclean.pl</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-legal">
          <p>&copy; 2024 Polish Clean Technologies. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Safety Information</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
`

setupProductInteractions()
