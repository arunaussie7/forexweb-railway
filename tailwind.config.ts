keyframes: {
  'accordion-down': {
    from: {
      height: '0'
    },
    to: {
      height: 'var(--radix-accordion-content-height)'
    }
  },
  'accordion-up': {
    from: {
      height: 'var(--radix-accordion-content-height)'
    },
    to: {
      height: '0'
    }
  },
  'fade-up': {
    from: { opacity: '0', transform: 'translateY(30px)' },
    to: { opacity: '1', transform: 'translateY(0)' }
  },
  'fade-down': {
    from: { opacity: '0', transform: 'translateY(-30px)' },
    to: { opacity: '1', transform: 'translateY(0)' }
  },
  'pulse-light': {
    '0%, 100%': { opacity: '0.6' },
    '50%': { opacity: '0.2' }
  },
  'ticker-rtl': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-100%)' }
  },
  'ticker-ltr': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' }
  }
},
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-up': 'fade-up 0.7s ease-out forwards',
  'fade-down': 'fade-down 0.7s ease-out forwards',
  'pulse-light': 'pulse-light 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'ticker-rtl': 'ticker-rtl 40s linear infinite',
  'ticker-ltr': 'ticker-ltr 40s linear infinite'
}, 