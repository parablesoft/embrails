module.exports = {
  compile: {
    enabled: true,
    plugins: [        
      require('postcss-import'),  
      require('tailwindcss')('./tailwind.config.js'),
      require('postcss-preset-env')({ stage: 2 })
    ]
  }
}