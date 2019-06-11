module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/enzyme.config.js'],
}
