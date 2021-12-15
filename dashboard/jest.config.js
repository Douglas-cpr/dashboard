module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '<rootDir>/src/**/*.spec.js'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
