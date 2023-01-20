/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')
const colors = require('tailwindcss/colors')

module.exports = {

  theme: {
    extend: {
      spacing: {
        '50px': '50px',
        '40px': '40px',
        '16px': '16px',
      },
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        dark: {
          100: '#161925',
          80: '#454751',
          60: '#73757c',
          20: '#d0d1d3',
          10: '#e8e8e9'
        },
        yellowMetal: '#6D6F3E',
        whiteBlack: '#FFFEF8',
        grey: '#8E8E8E',
      }
    },
    screens: {
      'us': '370px',
      'sm': '680px',
      'md': '768px',
      'md-1': '767px',
      'lg': '1024px',
      'lg-1': '1023px',
      'xl': '1366px',
      'xl-1': '1365px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
    important: true,
    fontFamily: {
      'Harmonia Sans Pro Cyr': ['Harmonia Sans Pro Cyr', 'sans-serif',],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1486px',
          paddingInline: '30px',
          '@screen sm': {
            paddingInline: '30px',
          },
        }
      })
    }
  ],
  content: [
    path.resolve(__dirname, '**/*.{js,vue}'),
    path.resolve(__dirname, '../shopify/**/*.liquid')
  ]
}
