module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen',
  modulePaths: ['src'],
  moduleNameMapper: {
    '^@utils(.*)$': '<rootDir>/src/utils/$1',
    '^@definitions(.*)$': '<rootDir>/src/definitions/index.ts',
    '^@constants(.*)$': '<rootDir>/src/constants/$1',
    '^@redux(.*)$': '<rootDir>/src/redux/$1',
    '^@ducks(.*)$': '<rootDir>/src/redux/ducks/$1',
    '^./__mocks__(.*)$': '<rootDir>/src/__mocks__/$1',
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@containers(.*)$': '<rootDir>/src/containers/$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks/$1',
    '^@test/(.*)$': '<rootDir>/src/test/$1',
    '\\.(jpg|jpeg|png|gif|webp|svg||mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/imageMock.ts',
    '\\.(css|less|scss|sss|styl)$': 'jest-css-modules',
    '^@images(.*)$': '<rootDir>/src/assets/images/$1',
  },
  setupFilesAfterEnv: ['./src/test/setupTests.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
};
