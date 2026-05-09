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

### GitHub Pages 배포 (중요)

GitHub Pages에서 페이지가 하얗게(Blank) 나오는 경우, 다음 단계를 따라 배포하세요:

1. **상대 경로 설정**: `vite.config.ts`에서 `base: './'`를 추가했습니다. (완료)
2. **배포 명령 실행**: 터미널에서 `npm run deploy`를 입력하여 수동으로 배포하세요.
3. **권한 이슈 안내**: 만약 `Insufficient permissions to push workflow files` 에러가 발생하여 깃허브 동기화가 되지 않는다면, 이는 AI Studio 앱에 'Workflows' 수정 권한이 없기 때문입니다.
   - **해결책**: GitHub에서 [Google AI Studio App 설정](https://github.com/settings/apps/google-ai-studio)에 들어가 'Permissions & events'에서 'Workflows' 권한을 'Read and Write'로 변경해 주세요.
   - 권한 변경 전까지는 `.github/workflows/` 내부 파일을 AI Studio에서 수정할 수 없습니다.
4. **GitHub 설정**: GitHub 저장소의 **Settings > Pages** 메뉴에서 Source를 `Deploy from a branch`로 선택하고, Branch를 `gh-pages`로 설정하세요.

---
© 2026 AI Prompt Research Lab.
