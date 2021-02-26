module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  setupFilesAfterEnv: ['./tests/jest.setup.ts'],
};
