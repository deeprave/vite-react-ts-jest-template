# Vite template

## Description

This template provides a working configuration (as at July 2022, unfortunately subject to change!)
that provides:

- A basic React app, using [vite](https://vitejs.dev/)
- Using [typescript](https://www.typescriptlang.org/)
- With the capability of testing with [jest](https://jestjs.io/)
  and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- Support for scss styles

This process for using these technologies is not well documented, nor even particularly stable due to Vite using of ES
modules and Jest
not supporting Vite directly (yet).

## Issues

`vite-jest` supposed to provide a jest plugin, however I was unable to get this to work, and instead had to set a few
more things in jest configuration to get this to work seamlessly.
