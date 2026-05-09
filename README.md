# AIARA Space: AI 문서 작업 100선

비즈니스 현장에서 즉시 활용 가능한 100가지 최적화된 프롬프트 라이브러리와 Gemini AI 기반의 프롬프트 최적화 도구를 제공하는 웹 애플리케이션입니다.

## 🚀 주요 기능

- **100선 프롬프트 라이브러리**: 보고서, 마케팅, HR, IT 등 10개 카테고리별 전문 프롬프트 제공
- **AI 프롬프트 개선기**: 사용자의 단순한 아이디어를 전문적인 프롬프트로 변환 (Gemini 3 Flash Preview 활용)
- **다국어 지원**: 한국어 및 영어 인터페이스/콘텐츠 전환 가능
- **세련된 UI/UX**: 다크 테마 기반의 모던한 대시보드 디자인 및 애니메이션 적용
- **원클릭 복사**: 모든 프롬프트를 즉시 클립보드에 복사하여 활용 가능

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4, Lucide React (Icons), Motion (Animations)
- **AI Integration**: @google/genai (Gemini API)
- **Development**: tsx, tsc

## 📦 설치 및 실행

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **환경 변수 설정 (중요)**
   AI Studio의 **Settings > Secrets** 메뉴에서 `GEMINI_API_KEY` (ID: `Gemini API Key_0509`)를 등록해야 퍼블리싱된 앱에서 AI 프롬프트 개선 기능이 작동합니다.

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```

4. **빌드**
   ```bash
   npm run build
   ```

## 📂 프로젝트 구조

- `src/App.tsx`: 메인 대시보드 및 로직
- `src/constants.ts`: 100가지 프롬프트 데이터셋
- `src/services/geminiService.ts`: AI 프롬프트 최적화 API 연동
- `src/types.ts`: TypeScript 인터페이스 정의
- `src/index.css`: 글로벌 스타일 및 테마 정의

---
© 2026 AI Prompt Research Lab.
