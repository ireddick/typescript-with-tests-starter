# TypeScript with tests starter

This is a starter for when I want to play around with writing TypeScript with tests.

## Features

- Jest for tests
- Type checks before running tests
- Uses tsc directly for simplicity
- Sourcemaps for navigation to failures
- Incremental compilation to help with tsc slowness

## Usage

Run tests with `npm test`

Start with `npm start`

Clean build cache & output with `npm clean`

Build output goes to `target` with no bundling, etc.

## Irritations

tsc is slow, even with the `incremental` flag enabled
