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

Clean build cache & output dir with `npm run clean`

Run the main script with `npm start`

Build output goes to `target` with no bundling, etc.

## Irritations

tsc is slow, even with the `incremental` flag enabled
