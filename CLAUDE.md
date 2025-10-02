# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite project configured for UI component testing using Storybook with Vitest integration. The setup enables both visual component development and automated browser testing.

## Development Commands

### Core Development
- `npm run dev` - Start Vite dev server for the main app
- `npm run build` - Type check and build for production
- `npm run preview` - Preview production build locally

### Storybook
- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build static Storybook

### Testing & Quality
- `npm run lint` - Run ESLint
- `vitest` - Run tests (Vitest with browser testing via Playwright)

## Testing Architecture

The project uses a specialized Vitest + Storybook + Playwright integration for UI testing:

1. **Test Configuration**: Tests are configured in [vite.config.ts](vite.config.ts) using the `@storybook/addon-vitest` plugin
2. **Browser Testing**: Tests run in Chromium via Playwright in headless mode
3. **Story-based Tests**: Tests are written using Storybook stories as the foundation
4. **Test Setup**: [.storybook/vitest.setup.ts](.storybook/vitest.setup.ts) applies Storybook project annotations including a11y addon

### Running Tests
- Tests are executed against stories defined in `src/**/*.stories.*`
- The test project is named `'storybook'` in the Vitest config
- Browser instances run with `headless: true` by default

## Key Dependencies

- **Build Tool**: Vite 7.x with SWC for Fast Refresh
- **Testing**: Vitest 3.x with browser mode, Playwright, and coverage via @vitest/coverage-v8
- **Storybook**: 9.1.x with React-Vite framework
- **Storybook Addons**: a11y, docs, onboarding, vitest integration
- **React**: 19.1.x

## Project Structure

- `src/stories/` - Storybook component examples and stories
- `.storybook/` - Storybook configuration and setup files
- Story files pattern: `src/**/*.stories.@(js|jsx|mjs|ts|tsx)`

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Build tooling configuration
- `tsconfig.json` - Root config that references the above

## ESLint Configuration

Uses flat config format with:
- TypeScript ESLint
- React Hooks plugin
- React Refresh plugin
- Storybook plugin
- Ignores `dist/` directory
