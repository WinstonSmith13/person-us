module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-strongly-recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
  }
}
