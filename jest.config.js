const nextJest = require('next/jest.js')
const createJestConfig = nextJest({
  dir: './',
})
/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['./src/**/*.{js,jsx}'],
}

module.exports = createJestConfig(config)
