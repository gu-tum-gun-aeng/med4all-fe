module.exports = {
  transform: {
    '^.+\\.svelte$': ['svelte-jester', { 
      "preprocess": "./config/preprocess.jest.config.js" 
    }],
    '^.+\\.js$': 'babel-jest',
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ]
}