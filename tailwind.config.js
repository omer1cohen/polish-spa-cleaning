/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design token colors
        bg: 'rgb(var(--pp-bg) / <alpha-value>)',
        fg: 'rgb(var(--pp-fg) / <alpha-value>)',
        'fg-muted': 'rgb(var(--pp-fg-muted) / <alpha-value>)',
        primary: 'rgb(var(--pp-primary) / <alpha-value>)',
        accent: 'rgb(var(--pp-accent) / <alpha-value>)',
        surface: 'rgb(var(--pp-surface) / <alpha-value>)',
        border: 'rgb(var(--pp-border) / <alpha-value>)',
      },
      fontFamily: {
        'sans': ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': 'var(--pp-text-display-1)',
        'h1': 'var(--pp-text-h1)',
        'h2': 'var(--pp-text-h2)',
        'h3': 'var(--pp-text-h3)',
        'body': 'var(--pp-text-body)',
        'caption': 'var(--pp-text-caption)',
      },
      borderRadius: {
        'brand': 'var(--pp-radius)',
      },
      boxShadow: {
        'brand': 'var(--pp-shadow)',
        'brand-sm': 'var(--pp-shadow-sm)',
        'brand-md': 'var(--pp-shadow-md)',
      },
      container: {
        center: true,
        screens: {
          '2xl': '80rem',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
        'ripple': 'ripple 2s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(56, 189, 248, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}