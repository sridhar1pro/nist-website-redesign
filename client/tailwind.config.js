/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official NIST Color Palette
        nistBlue: {
          light: '#003366',
          DEFAULT: '#002147', // Deep Navy for Headers/Footers
          dark: '#001a38',
        },
        nistGold: {
          light: '#ffc86b',
          DEFAULT: '#fbb03b', // Vibrant Gold for Buttons/Links
          dark: '#e59a1f',
        },
        nistGray: {
          50: '#f8f9fa',
          100: '#e9ecef',
          600: '#6c757d',
          900: '#212529',
        }
      },
      fontFamily: {
        // University websites often use 'Inter' or 'Merriweather' for an academic feel
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        // Custom shadow for "floating" card effects common in modern UI
        'nist-card': '0 4px 20px -2px rgba(0, 33, 71, 0.1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}