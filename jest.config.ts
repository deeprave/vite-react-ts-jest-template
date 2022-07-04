export default {
  globals: {
    "ts-jest": {
      tsconfig: {
        target: "es2019",
      },
    },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    // Resolve .css and similar files to identity-obj-proxy instead.
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    // Resolve .jpg and similar files to __mocks__/file-mock.js
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/src/__mocks__/file-mock.ts`,
  },
  testEnvironment: 'jsdom',
}
