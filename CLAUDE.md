# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a UI component library built with React + TypeScript + Vite. The project uses Storybook for component development and documentation, with Vitest integration for testing.

## Work Documentation

When working on this project, maintain daily worklogs in the `worklog/` directory using markdown format:

### Worklog Structure
- Create a new file for each work day: `worklog/YYYY-MM-DD.md`
- **Write all worklog content in Korean (한국어)**
- Use the following markdown template:

```markdown
# Work Log - YYYY-MM-DD

## [작업 제목]

### 완료
- 완료된 작업 목록
- 각 작업은 명확하고 구체적으로 작성
- 관련된 파일 경로나 컴포넌트 이름 포함

### 진행 중
- 현재 진행 중인 작업
- 지금 작업하고 있는 내용

### 할 일
- 예정된 작업
- 향후 개선 사항
- 해결해야 할 이슈
```

### When to Update Worklog
- At the start of a work session: Create/update today's worklog file with planned tasks
- During work: Update completed items and current progress in today's file
- At the end of a session: Summarize what was done and what's next
- When making significant changes: Document the changes and rationale
- Each day gets its own file in `worklog/YYYY-MM-DD.md` format
- **All worklog entries must be written in Korean (한국어로 작성)**

## Development Commands

### Library Build
- `npm run build` - Build the library (ES & UMD formats) using [vite.config.lib.ts](vite.config.lib.ts)
- Output is generated in `dist/` directory with TypeScript declarations

### Development
- `npm run dev` - Start Vite dev server
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

This is a UI library with component-based folder organization:

```
src/
├── index.ts                    # Main library entry point
└── components/
    ├── index.ts               # Components barrel export
    ├── Button/
    │   ├── index.ts          # Component export
    │   ├── Button.tsx        # Component implementation
    │   ├── Button.stories.ts # Storybook stories
    │   └── button.css        # Component styles
    ├── Header/
    │   ├── index.ts
    │   ├── Header.tsx
    │   ├── Header.stories.ts
    │   └── header.css
    └── Page/
        ├── index.ts
        ├── Page.tsx
        ├── Page.stories.ts
        └── page.css
```

### Key Directories
- `src/components/` - All UI components, each in its own folder
- `.storybook/` - Storybook configuration and setup files
- `dist/` - Build output (gitignored)

### File Patterns
- Component files: `src/components/[ComponentName]/[ComponentName].tsx`
- Story files: `src/components/[ComponentName]/[ComponentName].stories.ts`
- Each component folder has its own `index.ts` for exports

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Build tooling configuration
- `tsconfig.json` - Root config that references the above

## Library Configuration

### Package Exports
The library is configured in [package.json](package.json) to export:
- **ESM**: `./dist/ui-testing.es.js`
- **UMD**: `./dist/ui-testing.umd.js`
- **Types**: `./dist/index.d.ts`
- **Styles**: `./dist/style.css` (imported via `ui-testing/styles`)

### Build Configuration
- Uses [vite.config.lib.ts](vite.config.lib.ts) for library mode
- Includes `vite-plugin-dts` for TypeScript declaration generation
- Excludes stories and tests from the build
- React and React-DOM are marked as peer dependencies and externalized

## ESLint Configuration

Uses flat config format with:
- TypeScript ESLint
- React Hooks plugin
- React Refresh plugin
- Storybook plugin
- Ignores `dist/` directory
