# UI Testing

React + TypeScript + Vite 기반의 UI 컴포넌트 라이브러리입니다.

## 🎨 주요 기능

- ⚡️ **Vite** - 빠른 빌드와 HMR
- ⚛️ **React 19** - 최신 React 기능 지원
- 🎭 **Vanilla Extract** - 타입 안전한 CSS-in-JS
- 📚 **Storybook** - 컴포넌트 개발 및 문서화
- 🧪 **Vitest + Playwright** - 브라우저 기반 컴포넌트 테스트
- 🌓 **테마 시스템** - Light/Dark 테마 지원

## 📦 설치

```bash
npm install
```

## 🚀 개발

### Storybook 실행

컴포넌트를 개발하고 테스트하려면:

```bash
npm run storybook
```

Storybook이 [http://localhost:6006](http://localhost:6006)에서 실행됩니다.

### 개발 서버

```bash
npm run dev
```

### 라이브러리 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다:
- `dist/ui-testing.es.js` - ESM 번들
- `dist/ui-testing.umd.js` - UMD 번들
- `dist/index.d.ts` - TypeScript 타입 정의
- `dist/style.css` - 컴포넌트 스타일

## 📂 프로젝트 구조

```
src/
├── config/              # 테마 및 디자인 토큰
│   ├── color.ts        # 컬러 팔레트 (HSL)
│   ├── typography.ts   # 타이포그래피 설정
│   └── theme.css.ts    # Vanilla Extract 테마
├── components/          # UI 컴포넌트
│   └── Button/
│       ├── Button.tsx
│       ├── Button.css.ts
│       ├── Button.stories.ts
│       └── index.ts
└── index.ts            # 라이브러리 엔트리 포인트
```

## 🎨 테마 시스템

### 컬러 팔레트

각 컬러는 100~900 단계로 구성됩니다:

- **neutral** - 회색 계열
- **emerald** - 브랜드 컬러
- **green** - 성공 상태
- **red** - 에러 상태

### 테마 사용

```typescript
import { lightTheme, darkTheme } from './config/theme.css';

// Light 테마 적용
document.body.className = lightTheme;

// Dark 테마 적용
document.body.className = darkTheme;
```

## 🧩 컴포넌트

### Button

```tsx
import { Button } from 'ui-testing';

<Button variant="primary" size="medium" label="Click me" />
```

**Variants:**
- `primary` - 기본 브랜드 컬러
- `secondary` - 보조 스타일
- `success` - 성공 상태
- `error` - 에러 상태

**Sizes:**
- `small` - 작은 사이즈
- `medium` - 중간 사이즈 (기본값)
- `large` - 큰 사이즈

## 🧪 테스트

```bash
npm run test
```

Vitest + Playwright를 사용한 브라우저 기반 컴포넌트 테스트를 실행합니다.

## 📝 린트

```bash
npm run lint
```

ESLint를 사용하여 코드 품질을 검사합니다.

## 🛠️ 기술 스택

- **Build Tool**: Vite 7.x
- **Framework**: React 19.x
- **Language**: TypeScript 5.x
- **Styling**: Vanilla Extract
- **Testing**: Vitest + Playwright
- **Documentation**: Storybook 9.x

## 📄 라이선스

MIT

## 🤝 기여

이슈 및 풀 리퀘스트를 환영합니다!
