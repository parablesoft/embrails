const defaultTheme = require('tailwindcss/defaultTheme')
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = {
  purge: {
    enabled: isProduction,
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    })
  ]
}
