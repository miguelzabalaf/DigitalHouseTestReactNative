module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-reanimated|react-native-redash|react-native-ui-lib|react-native-size-matters)/)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFiles: ['./jest.config.js'],
  testMatch: ['**/*.test.(js|ts|tsx)'],
  fakeTimers: {
    legacyFakeTimers: true,
  },
};
