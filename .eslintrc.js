module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module'
  },

  env: {
    browser: false
  },

  extends: ['standard'],

  plugins: ['babel'],

  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow no-undef, there are just too many for now...
    'no-undef': 'off'
  }
}
