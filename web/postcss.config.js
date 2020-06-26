const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // add extra paths here for components/controllers which include tailwind classes
      './app/index.html',
      './app/src/**/*.hbs'
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  compile: {
    enabled: true,
    plugins: [        
      require('postcss-import'),  
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-preset-env')({ stage: 2 }),           
      ...isProduction ? [purgeCSS] : []
    ]
  }
}