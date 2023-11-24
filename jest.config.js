module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['regenerator-runtime/runtime', './setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
}
