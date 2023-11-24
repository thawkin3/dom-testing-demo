module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['./setupTests.js'],
}
