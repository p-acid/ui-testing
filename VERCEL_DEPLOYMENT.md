# Vercel Deployment Guide

이 문서는 Storybook을 Vercel에 배포하는 방법을 설명합니다.

## 배포 설정

프로젝트에는 다음과 같은 Vercel 배포 설정이 포함되어 있습니다:

- **설정 파일**: [vercel.json](vercel.json)
- **빌드 명령어**: `npm run build-storybook`
- **출력 디렉토리**: `storybook-static`

## Vercel CLI를 통한 배포

### 1. Vercel CLI 설치

```bash
npm install -g vercel
```

### 2. 프로젝트 배포

```bash
# 첫 배포 시 (프로젝트 설정)
vercel

# 프로덕션 배포
vercel --prod
```

## Vercel Dashboard를 통한 배포

### 1. GitHub 연동
1. [Vercel Dashboard](https://vercel.com)에 로그인
2. "Add New Project" 클릭
3. GitHub 리포지토리 선택

### 2. 프로젝트 설정
- **Framework Preset**: Other (또는 None)
- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static`
- **Install Command**: `npm install`

### 3. 환경 변수 (필요시)
현재 프로젝트는 특별한 환경 변수가 필요하지 않습니다.

## 자동 배포

GitHub에 push하면 자동으로 배포됩니다:
- `main` 브랜치 → 프로덕션 배포
- 다른 브랜치 → 프리뷰 배포

## 주의사항

### Node.js 버전
Vercel은 기본적으로 최신 LTS 버전을 사용합니다. 특정 버전이 필요한 경우 `package.json`에 추가:

```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 빌드 최적화
- Storybook 빌드는 정적 파일을 생성합니다
- 빌드 시간 단축을 위해 불필요한 애드온은 제거하는 것을 권장합니다

### 메모리 제한
대규모 Storybook의 경우 빌드 시 메모리 부족이 발생할 수 있습니다. 이 경우:

```json
// package.json
{
  "scripts": {
    "build-storybook": "NODE_OPTIONS='--max-old-space-size=4096' storybook build"
  }
}
```

## 배포 확인

배포 후 다음을 확인하세요:
- ✅ Storybook UI가 정상적으로 로드되는지
- ✅ 모든 컴포넌트 스토리가 표시되는지
- ✅ 인터랙션이 정상 작동하는지
- ✅ A11y 애드온이 작동하는지

## 트러블슈팅

### 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build-storybook

# 빌드 결과물 확인
ls -la storybook-static
```

### 404 오류
`vercel.json`의 `outputDirectory` 설정이 올바른지 확인하세요.

### 의존성 오류
`package-lock.json` 또는 `npm-shrinkwrap.json`이 최신 상태인지 확인하세요.

## 참고 링크
- [Vercel Documentation](https://vercel.com/docs)
- [Storybook Deployment Guide](https://storybook.js.org/docs/react/sharing/publish-storybook)
