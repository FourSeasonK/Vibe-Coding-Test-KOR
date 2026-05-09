/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    title: { ko: '보고서/기획서', en: 'Reports / Proposals' },
    icon: 'FileText',
    prompts: [
      { id: '001', role: '기획자', type: '구조화', content: { ko: '[신규 서비스 기획]에 대한 아이데이션 회의록 내용을 바탕으로, 경영진 보고용 \'원페이지 기획서(One-Page Proposal)\' 초안을 작성해주세요. 핵심 문제 정의, 해결 방안, 기대 효과, 소요 예산 항목을 포함하여 개조식으로 명료하게 정리해주세요.', en: 'Write a one-page proposal for executives based on meeting minutes for [New Service Planning]. Describe core problem, solution, expected outcomes, and budget.' }, tags: ['기획', '보고서'] },
      { id: '002', role: 'CEO/임원', type: '요약/정리', content: { ko: '첨부된 50페이지 분량의 [분기별 실적 보고서] PDF 파일 내용을 요약하여, 핵심 성과 지표(KPI) 달성 현황과 주요 이슈사항만 파악할 수 있도록 3분 브리핑용 스크립트로 변환해주세요.', en: 'Summarize the 50-page [Quarterly Performance Report] into a 3-minute briefing script focusing on KPI and key issues.' }, tags: ['요약', '임원보고'] },
      { id: '003', role: '기획자', type: '문서생성', content: { ko: '[ESG 경영 도입]을 위한 태스크포스(TF) 운영 계획서를 작성해주세요. 추진 배경, TF 조직 구성안(R&R 포함), 단계별 마일스톤(3개월 단위), 예상 리스크 및 대응 방안을 포함한 목차를 먼저 제안해주세요.', en: 'Draft a TF operation plan for [ESG Management Introduction] including background, organization, milestones, and risks.' }, tags: ['ESG', '계획서'] },
      { id: '004', role: '마케터', type: '개선/수정', content: { ko: '작성된 [마케팅 캠페인 결과 보고서] 초안입니다. 문체를 더욱 비즈니스 친화적이고 전문적인 톤앤매너로 수정해주시고, 수치적 성과가 돋보이도록 문장을 다듬어주세요.', en: 'Polish this [Marketing Report] draft to be more professional and emphasize numerical achievements.' }, tags: ['마케팅', '수정'] },
      { id: '005', role: '컨설턴트', type: '템플릿', content: { ko: '[제조업 디지털 전환(DX)] 컨설팅 착수 보고서 작성을 위한 표준 목차 템플릿을 생성해주세요. AS-IS 분석, TO-BE 모델 설계, 갭(Gap) 분석, 실행 로드맵이 반드시 포함되어야 합니다.', en: 'Create a template for a [Manufacturing DX] consulting kickoff report with AS-IS, TO-BE, Gap analysis, and roadmap.' }, tags: ['DX', '템플릿'] },
      { id: '006', role: '기획자', type: '분석', content: { ko: '[경쟁사 A사]의 최근 1년간 보도자료와 뉴스 기사를 바탕으로, 그들의 신사업 추진 전략을 분석하고 우리 회사가 벤치마킹할 수 있는 시사점 3가지를 도출해주세요.', en: 'Analyze [Competitor A]\'s new business strategy from their news and derive 3 benchmarking implications.' }, tags: ['경쟁사분석', '벤치마킹'] },
      { id: '007', role: 'PM', type: '문서생성', content: { ko: '프로젝트 지연이 예상되는 상황입니다. 클라이언트에게 보낼 [일정 변경 요청 공문] 초안을 작성해주세요. 지연 사유(기술적 이슈), 대안 제시, 변경된 마일스톤을 포함해주세요.', en: 'Draft a schedule change request for a client due to technical issues, proposing new milestones.' }, tags: ['PM', '공문'] },
      { id: '008', role: '기획자', type: '자동화설계', content: { ko: '매주 반복되는 [주간 업무 보고] 작성을 자동화하고 싶습니다. 팀원들이 입력해야 할 필수 데이터 필드 양식을 표 형태로 만들어주고, 이를 취합하는 효율적인 프로세스를 제안해주세요.', en: 'Design a system to automate [Weekly Reports], including input forms and a collection process.' }, tags: ['자동화', '주간보고'] },
      { id: '009', role: '임원', type: '변환', content: { ko: '이 [기술 중심의 개발 문서] 내용을 비전공자인 투자자들이 이해할 수 있도록 쉬운 비유를 사용한 [투자 유치용 사업 소개서] 서론 부분으로 변환해주세요.', en: 'Transform this [Technical Document] into an investor-friendly business summary using metaphors.' }, tags: ['투자유치', 'IR'] },
      { id: '010', role: '전략기획', type: '구조화', content: { ko: '[2024년 사업계획] 발표 자료를 준비 중입니다. SWOT 분석 결과를 바탕으로 SO, ST, WO, WT 전략을 매트릭스 형태로 정리하고, 각 전략별 우선순위를 매겨주세요.', en: 'Organize [2024 Business Plan] into a SWOT matrix (SO, ST, WO, WT) with ranked priorities.' }, tags: ['사업계획', 'SWOT'] }
    ]
  },
  {
    id: 'cat-2',
    title: { ko: '마케팅/콘텐츠', en: 'Marketing / Content' },
    icon: 'Megaphone',
    prompts: [
      { id: '011', role: '마케터', type: '문서생성', content: { ko: '[2030 직장인 여성]을 타켓으로 한 [건강기능식품] 인스타그램 카드뉴스 5장 분량의 기획안을 작성해주세요. 각 장별 카피와 추천 이미지 컨셉을 포함해주세요.', en: 'Draft an Instagram card news plan (5 pages) for [Health Foods] targeting [2030 Women].' }, tags: ['SNS', '카드뉴스'] },
      { id: '012', role: '작가', type: '문서생성', content: { ko: '[SaaS 협업 툴]의 신기능 출시를 알리는 블로그 포스팅 초안을 작성해주세요. SEO 최적화를 위해 주요 키워드를 자연스럽게 포함해주세요.', en: 'Write a blog post draft for [SaaS Tool] new features with SEO optimization.' }, tags: ['블로그', 'SEO'] },
      { id: '013', role: '마케터', type: '분석', content: { ko: '최근 유행하는 [숏폼 콘텐츠 트렌드]를 분석하여, 우리 브랜드가 틱톡/릴스에서 시도해볼 수 있는 챌린지 아이디어 3가지를 제안해주세요.', en: 'Analyze [Short-form Trends] and suggest 3 TikTok/Reels challenge ideas for our brand.' }, tags: ['틱톡', '릴스'] },
      { id: '014', role: '마케터', type: '개선/수정', content: { ko: '다음 [광고 카피] 5개를 분석하고, 클릭률(CTR)을 높일 수 있도록 심리적 트리거를 자극하는 버전으로 변형해주세요.', en: 'Refine these 5 [Ad Copies] using psychological triggers to improve CTR.' }, tags: ['카피라이팅', 'CTR'] },
      { id: '015', role: 'PR', type: '문서생성', content: { ko: '[신제품 런칭] 보도자료를 작성해주세요. 기자가 바로 사용할 수 있을 만큼 매력적인 헤드라인과 업계 최초 등의 키워드를 포함해주세요.', en: 'Draft a [New Product Launch] press release with a compelling headline.' }, tags: ['보도자료', 'PR'] },
      { id: '016', role: '기획자', type: '구조화', content: { ko: '유튜브 채널 [IT 기기 리뷰] 운영을 위한 한 달 치 콘텐츠 캘린더를 작성해주세요. 주제, 썸네일 텍스트, 업로드 일자를 포함해주세요.', en: 'Create a monthly content calendar for [IT Review] YouTube channel.' }, tags: ['유튜브', '캘린더'] },
      { id: '017', role: '마케터', type: '문서생성', content: { ko: '[충성 고객] 대상 감사 이메일 뉴스레터 본문을 작성해주세요. 개인화된 느낌을 주고 할인 쿠폰 사용을 유도하는 따뜻한 톤으로 작성해주세요.', en: 'Write a [Loyal Customer] appreciation email newsletter focusing on personalization.' }, tags: ['이메일', 'CRM'] },
      { id: '018', role: '마케터', type: '분석', content: { ko: '경쟁사 [B사]의 페이스북 광고를 분석하여 그들의 주된 소구점과 디자인 패턴을 유추하고 우리 브랜드의 차별화 포인트를 도출해주세요.', en: 'Analyze [Competitor B]\'s FB ads and find our differentiation points.' }, tags: ['광고분석', '차별화'] },
      { id: '019', role: '디자이너', type: '변환', content: { ko: '제품 상세페이지의 긴 설명글을 모바일 가독성이 좋게 짧은 문장과 이모지, 불렛포인트를 활용해 재구성해주세요.', en: 'Restructure product detail text for mobile using emojis and bullet points.' }, tags: ['상세페이지', '모바일'] },
      { id: '020', role: '마케터', type: '자동화설계', content: { ko: '고객 리뷰 데이터를 활용해 인사이트를 도출하는 프롬프트 체인을 설계해주세요. 긍부정 분류, 키워드 추출, 개선점 도출 순서입니다.', en: 'Design a prompt chain for review analysis: Sentiment-Keyword-Improvement.' }, tags: ['리뷰분석', '자동화'] }
    ]
  },
  {
    id: 'cat-3',
    title: { ko: '교육/강의자료', en: 'Education / Lectures' },
    icon: 'GraduationCap',
    prompts: [
      { id: '021', role: '강사', type: '구조화', content: { ko: '[신입사원 비즈니스 매너] 교육을 위한 4시간짜리 워크숍 커리큘럼을 짜주세요. 시간대별 모듈과 아이스브레이킹 활동을 포함해주세요.', en: 'Design a 4-hour [Business Etiquette] workshop for new hires.' }, tags: ['워크숍', '교육'] },
      { id: '022', role: '강사', type: '문서생성', content: { ko: '[생성형 AI 활용법] 강의의 PPT 슬라이드 구성을 위한 대본을 작성해주세요. 총 10장 분량으로 시각 자료 설명도 포함해주세요.', en: 'Write a 10-slide script for [Generative AI] lecture including visual aids.' }, tags: ['PPT', '강의'] },
      { id: '023', role: '강사', type: '문서생성', content: { ko: '[데이터 보안 기초]에 대한 객관식 퀴즈 10문제와 서술형 2문제를 출제해주세요. 정답과 상세 해설도 포함해주세요.', en: 'Create a 12-question quiz on [Data Security] with detailed explanations.' }, tags: ['퀴즈', '보안'] },
      { id: '024', role: '강사', type: '요약/정리', content: { ko: '복잡한 [금융 상품 약관]을 교육생용 한 장 요약 가이드로 재정리하고 어려운 용어는 각주로 풀이해주세요.', en: 'Summarize complex [Financial Terms] into a one-page student handout.' }, tags: ['요약', '교육자료'] },
      { id: '025', role: '교육담당', type: '템플릿', content: { ko: '사내 온라인 교육(LMS) 등록을 위한 [교육 과정 소개서] 표준 템플릿을 만들어주세요. 목표, 대상, 난이도 등을 포함합니다.', en: 'Create a standard template for [LMS Course Intro] including goals and target.' }, tags: ['LMS', '템플릿'] },
      { id: '026', role: '강사', type: '개선/수정', content: { ko: '이론 중심의 [리더십 강의] 스크립트에 현장에서 발생할 수 있는 딜레마 상황과 롤플레잉 시나리오를 추가해주세요.', en: 'Add real-world dilemmas and role-play to a theoretical [Leadership] script.' }, tags: ['롤플레잉', '리더십'] },
      { id: '027', role: '교육담당', type: '문서생성', content: { ko: '교육 만족도 설문조사 문항을 설계해주세요. 강의 내용, 강사 전달력, 현업 적용도 등을 측정하는 10개 문항입니다.', en: 'Design a 10-question education satisfaction survey.' }, tags: ['설문조사', '만족도'] },
      { id: '028', role: '강사', type: '변환', content: { ko: '유튜브 영상 [글쓰기 특강]의 구어체를 블로그용 연재 시리즈 5편 주제와 정제된 문어체 본문으로 변환해주세요.', en: 'Convert a [Writing Lecture] video script into a 5-part blog series.' }, tags: ['콘텐츠변환', '글쓰기'] },
      { id: '029', role: 'HR', type: '기획', content: { ko: 'MZ세대의 참여도를 높일 수 있는 [사내 멘토링 프로그램] 기획안을 역멘토링이나 커피챗 요소를 포함해 작성해주세요.', en: 'Draft a [Mentoring Program] including Reverse Mentoring for Gen Z.' }, tags: ['인사', '멘토링'] },
      { id: '030', role: '강사', type: '분석', content: { ko: '학습자 사전 설문 데이터를 바탕으로 페르소나 2가지를 정의하고 각 유형에 맞는 맞춤형 교수법을 제안해주세요.', en: 'Define 2 student personas and suggest tailored teaching methods.' }, tags: ['페르소나', '교육분석'] }
    ]
  },
  {
    id: 'cat-4',
    title: { ko: 'HR/인사', en: 'HR / Personnel' },
    icon: 'Users',
    prompts: [
      { id: '031', role: 'HR', type: '문서생성', content: { ko: '[시니어 개발자] 채용 공고(JD)를 우리 회사의 개발 문화와 성장 기회를 어필하는 채용 브랜딩 관점에서 작성해주세요.', en: 'Write a [Senior Developer] JD focusing on company culture and growth.' }, tags: ['채용', 'JD'] },
      { id: '032', role: 'HR', type: '문서생성', content: { ko: '[구조화된 면접 질문지]를 생성해주세요. 협업 태도를 검증하는 BEI 질문 5개와 평가 기준을 표로 만들어주세요.', en: 'Create a structured interview sheet with 5 BEI questions for teamwork.' }, tags: ['면접', 'BEI'] },
      { id: '033', role: 'HR', type: '문서생성', content: { ko: '[연말 성과급 지급 기준 안내] 전사 공지 이메일을 작성해주세요. 산정 방식과 일정을 정중하고 격려하는 어조로 설명해주세요.', en: 'Draft a company announcement for [Year-end Bonus] sharing calculation and schedule.' }, tags: ['성과급', '공지'] },
      { id: '034', role: 'HR', type: '분석', content: { ko: '퇴사자 면담 기록을 바탕으로 주된 퇴사 원인 3가지를 분류하고 해결을 위한 리텐션 전략을 제안해주세요.', en: 'Identify 3 exit reasons and suggest retention strategies.' }, tags: ['퇴사분석', '리텐션'] },
      { id: '035', role: 'HR', type: '문서생성', content: { ko: '신규 입사자용 [온보딩 가이드북] 목차와 첫 출근일 하루 일과표, 웰컴 키트 안내 문구를 작성해주세요.', en: 'Draft [Onboarding Guide] table of contents and day one schedule.' }, tags: ['온보딩', '신입'] },
      { id: '036', role: 'HR', type: '구조화', content: { ko: '직원 [다면 평가] 양식을 설계해주세요. 리더십, 협업 등 핵심 역량 문항을 관점별로 5개씩 만들어주세요.', en: 'Design a 360-degree feedback form with core competency items.' }, tags: ['평가', '다면평가'] },
      { id: '037', role: 'HR', type: '개선/수정', content: { ko: '딱딱한 [취업규칙]의 휴가 조항을 친근한 문체의 [사내 생활 가이드] 버전으로 재작성해주세요.', en: 'Rewrite stiff [Employment Rules] into a friendly [Office Life Guide].' }, tags: ['사규', '수정'] },
      { id: '038', role: 'HR', type: '문서생성', content: { ko: '저성과자 대상 [성과 향상 프로그램(PIP)] 운영 계획안을 법적 리스크를 최소화하여 작성해주세요.', en: 'Draft a [Performance Improvement Plan (PIP)] minimizing legal risks.' }, tags: ['성과관리', 'PIP'] },
      { id: '039', role: 'HR', type: '기획', content: { ko: '[하이브리드 워크] 제도 도입을 위한 효율적인 협업 그라운드 룰 10계명을 작성해주세요.', en: 'Create 10 Ground Rules for [Hybrid Work] collaboration.' }, tags: ['하이브리드', '원칙'] },
      { id: '040', role: 'HR', type: '문서생성', content: { ko: '정중한 [채용 불합격 통보 메일]을 작성해주세요. 지원자의 역량을 존중하며 향후 인재 풀 등록 제안을 포함해주세요.', en: 'Write a polite [Rejection Email] showing respect for the applicant.' }, tags: ['불합격통보', '매너'] }
    ]
  },
  {
    id: 'cat-5',
    title: { ko: '제안서/영업', en: 'Sales / Partner' },
    icon: 'Handshake',
    prompts: [
      { id: '041', role: '영업', type: '문서생성', content: { ko: '잠재 고객사 담당자용 [콜드 메일]을 작성해주세요. 물류 비용 절감 문제 해결을 짧고 강렬하게 제안해주세요.', en: 'Draft a [Cold Email] for a potential client proposing cost reduction.' }, tags: ['영업', '콜드메일'] },
      { id: '042', role: '영업', type: '구조화', content: { ko: '[공공기관 입찰 제안서]를 위한 스토리라인과 안정성을 강조하는 목차 구성을 정리해주세요.', en: 'Design a [Public Bid Proposal] storyline emphasizing stability.' }, tags: ['입찰', '제안서'] },
      { id: '043', role: '영업', type: '문서생성', content: { ko: '고객 미팅 후 회의 내용을 요약하고 다음 일정을 제안하는 [팔로우업 이메일]을 작성해주세요.', en: 'Write a [Follow-up Email] summarizing a meeting and next steps.' }, tags: ['미팅', '이메일'] },
      { id: '044', role: '영업', type: '개선/수정', content: { ko: '회사 소개서의 연혁 부분을 성과 위주로 임팩트 있게 재구성하고 신뢰감을 주는 문구로 다듬어주세요.', en: 'Restructure [Company History] to emphasize achievements and trust.' }, tags: ['소개서', '수정'] },
      { id: '045', role: '영업', type: '분석', content: { ko: '경쟁사 대비 우리 제품의 SWOT를 분석하고 이를 활용한 영업 소구 포인트 3가지를 도출해주세요.', en: 'Analyze product comparison and derive 3 key selling points.' }, tags: ['경쟁력', 'SWOT'] },
      { id: '046', role: '영업', type: '문서생성', content: { ko: '[파트너십 제안서] 서문을 작성해주세요. 양사 협력이 가져올 시너지 효과를 설득력 있게 제시해주세요.', en: 'Draft a [Partnership Proposal] intro focusing on synergy effects.' }, tags: ['제안서', '제휴'] },
      { id: '047', role: '영업', type: '자동화설계', content: { ko: '고객 문의 유형에 따라 자동으로 답변할 수 있는 [응대 스크립트 템플릿] 5가지를 작성해주세요.', en: 'Create 5 [Customer Response Templates] based on query types.' }, tags: ['CS', '자동화'] },
      { id: '048', role: '영업', type: '문서생성', content: { ko: '영업 사원용 [콜드 콜 스크립트]를 작성해주세요. 도입, 가치제안, 반론극복 단계별로 구성해주세요.', en: 'Write a [Cold Call Script] including handling objections.' }, tags: ['전화영업', '스크립트'] },
      { id: '049', role: '영업', type: '요약/정리', content: { ko: '고객사의 [RFP]를 분석해 필수 충족 요건과 차별화 포인트를 리스트업해주세요.', en: 'Analyze customer [RFP] and list mandatory requirements.' }, tags: ['RFP', '요약'] },
      { id: '050', role: '영업', type: '문서생성', content: { ko: '[서비스 재계약] 제안 메일을 작성해주세요. 지난 성과를 상기시키고 업그레이드 혜택을 강조해주세요.', en: 'Draft a [Renewal Proposal] highlighting past successes.' }, tags: ['재계약', '유지'] }
    ]
  },
  {
    id: 'cat-6',
    title: { ko: '분석/데이터', en: 'Analysis / Data' },
    icon: 'BarChart2',
    prompts: [
      { id: '051', role: '분석가', type: '분석', content: { ko: '첨부된 CSV 데이터를 분석하기 위한 Python Pandas 코드를 생성해주세요. 매출 추이와 지역별 분석을 포함합니다.', en: 'Generate Python Pandas code for sales trend and regional analysis.' }, tags: ['Python', '데이터'] },
      { id: '052', role: '기획자', type: '문서생성', content: { ko: '설문조사 결과 데이터를 바탕으로 고객 만족도 보고서의 시사점 및 제언 파트를 논리적으로 서술해주세요.', en: 'Draft [CS Report] implications based on survey data.' }, tags: ['설문분석', '보고서'] },
      { id: '053', role: '마케터', type: '구조화', content: { ko: 'GA4 데이터를 활용한 [월간 마케팅 대시보드] 핵심 지표 5가지를 선정하고 시각화 방법을 제안해주세요.', en: 'Select 5 GA4 metrics for a [Monthly Dashboard] and visualization.' }, tags: ['GA4', '대시보드'] },
      { id: '054', role: '분석가', type: '자동화설계', content: { ko: '엑셀 재고 관리 업무를 자동화하기 위한 VBA 매크로 코드를 작성해주세요.', en: 'Write VBA macro code to automate Excel inventory management.' }, tags: ['엑셀', 'VBA'] },
      { id: '055', role: '기획자', type: '분석', content: { ko: '시장 조사 데이터를 해석해 신규 서비스의 TAM-SAM-SOM 추정 논리와 매력도 3가지를 도출해주세요.', en: 'Estimate TAM-SAM-SOM and market attractors from survey data.' }, tags: ['시장분석', '추정'] },
      { id: '056', role: '분석가', type: '요약/정리', content: { ko: '복잡한 SQL 쿼리문을 주석과 함께 비개발자인 팀원도 알기 쉽게 설명해주세요.', en: 'Explain complex SQL queries to non-tech team members.' }, tags: ['SQL', '해설'] },
      { id: '057', role: 'CEO', type: '분석', content: { ko: '3개년 재무제표를 바탕으로 수익성, 안정성, 성장성 관점에서 재무 건전성 진단 보고서를 작성해주세요.', en: 'Assess [Financial Health] from profitability and growth view.' }, tags: ['재무제표', '진단'] },
      { id: '058', role: '마케터', type: '분석', content: { ko: 'A/B 테스트 결과에서 클릭률은 높지만 전환율이 낮은 원인을 가설로 세우고 다음 테스트를 제안해주세요.', en: 'Hypothesize why high CTR has low conversion in A/B test.' }, tags: ['AB테스트', '가설'] },
      { id: '059', role: '분석가', type: '문서생성', content: { ko: '데이터 리터러시 향상을 위한 사내 가이드북 서문을 데이터 기반 의사결정의 중요성을 담아 작성해주세요.', en: 'Write a manual intro for improving corp [Data Literacy].' }, tags: ['교육', '가이드'] },
      { id: '060', role: '기획자', type: '구조화', content: { ko: 'KPI 지표 정의서 양식을 만들어주세요. 산출 공식과 주기를 포함한 표 템플릿입니다.', en: 'Create a [KPI Dictionary] template with calculation formulas.' }, tags: ['KPI', '정의서'] }
    ]
  },
  {
    id: 'cat-7',
    title: { ko: '법무/계약', en: 'Legal / Contract' },
    icon: 'Gavel',
    prompts: [
      { id: '061', role: '법무', type: '문서생성', content: { ko: '[비밀유지계약서(NDA)] 표준 양식을 작성해주세요. 정의, 범위, 위반 시 책임 조항을 포함합니다.', en: 'Draft a standard [NDA] including definitions and liability.' }, tags: ['NDA', '계약서'] },
      { id: '062', role: '법무', type: '분석', content: { ko: '상대방이 보낸 용역 계약서 중 독소 조항을 검토하고 수탁사 입장에서 수정 제안 문구를 작성해주세요.', en: 'Review [Service Contract] for bad clauses and suggest edits.' }, tags: ['검토', '수정'] },
      { id: '063', role: '법무', type: '문서생성', content: { ko: '대금 지급 지연에 대한 [내용증명] 초안을 정중하지만 단호한 어조로 작성해주세요.', en: 'Draft a [Link Letter/Notice] for delayed payment.' }, tags: ['내용증명', '대금'] },
      { id: '064', role: '법무', type: '요약/정리', content: { ko: '개정된 [개인정보보호법] 주요 내용을 임직원용 준수 가이드로 요약 정리해주세요.', en: 'Summarize the new [Privacy Policy Law] for employees.' }, tags: ['법률요약', '가이드'] },
      { id: '065', role: 'HR', type: '문서생성', content: { ko: '근로계약서 특약 사항에 수습 기간 평가 및 본채용 거부 조건을 법적 문제 없이 기술해주세요.', en: 'Draft [Contract Special Clause] for probation evaluation.' }, tags: ['인사', '계약'] },
      { id: '066', role: '법무', type: '문서생성', content: { ko: '[MOU(양해각서)] 체결을 위한 협약서 초안을 역할과 비용 분담 위주로 작성해주세요.', en: 'Draft an [MOU] focused on roles and cost sharing.' }, tags: ['MOU', '협약서'] },
      { id: '067', role: '기획자', type: '문서생성', content: { ko: '웹사이트용 [이용약관] 및 [개인정보처리방침]의 필수 항목 목차를 리스트업해주세요.', en: 'List mandatory items for [Terms of Service] and [Privacy Policy].' }, tags: ['이용약관', '웹'] },
      { id: '068', role: '법무', type: '개선/수정', content: { ko: '[계약 해지 통보서] 문안의 해지 사유를 명확히 하고 법적 분쟁 가능성을 최소화하도록 다듬어주세요.', en: 'Polish [Termination Notice] to minimize legal risks.' }, tags: ['해지', '최적화'] },
      { id: '069', role: '임원', type: '문서생성', content: { ko: '주주총회 소집 공고문을 상법상 절차에 맞는 격식 있는 문체로 작성해주세요.', en: 'Draft a [Shareholder Meeting] notice in a formal tone.' }, tags: ['공고', '주총'] },
      { id: '070', role: '법무', type: '템플릿', content: { ko: '사내 [저작권 관리 가이드라인] 체크리스트와 직원 준수 수칙을 정리해주세요.', en: 'Create [Copyright Management] guidelines for employees.' }, tags: ['저작권', '가이들'] }
    ]
  },
  {
    id: 'cat-8',
    title: { ko: 'IT/개발', en: 'IT / Development' },
    icon: 'Code2',
    prompts: [
      { id: '071', role: '개발자', type: '문서생성', content: { ko: 'Python 코드에 대한 [API 문서(Swagger 스타일)] 기능 및 응답 예시 설명을 작성해주세요.', en: 'Write [API Swagger] docs for Python code including examples.' }, tags: ['API', '문서화'] },
      { id: '072', role: '개발자', type: '분석', content: { ko: '다음 에러 로그를 분석하여 원인을 추정하고 디버깅 가이드 3단계를 제시해주세요.', en: 'Analyze [Error Log] and suggest a 3-step debugging guide.' }, tags: ['에러', '로그'] },
      { id: '073', role: '기획자', type: '구조화', content: { ko: '[앱 개발 요구사항 정의서(PRD)] 작성용 템플릿과 유저 스토리 항목을 구성해주세요.', en: 'Design [PRD] template including User Stories.' }, tags: ['PRD', '기획'] },
      { id: '074', role: '개발자', type: '변환', content: { ko: '이 Java 코드를 Pythonic한 문법을 사용한 Python 코드로 변환해주세요.', en: 'Convert this Java code to idiomatic Python code.' }, tags: ['언어변환', '파이썬'] },
      { id: '075', role: '개발자', type: '문서생성', content: { ko: 'GitHub 리포지토리용 [README.md] 파일을 설치 및 사용법 위주로 작성해주세요.', en: 'Draft a professional [README.md] for a GitHub repo.' }, tags: ['GitHub', '마크다운'] },
      { id: '076', role: '개발자', type: '분석', content: { ko: '트래픽 급증 시 서버 다운 문제 해결을 위한 클라우드 아키텍처 개선안을 제안해주세요.', en: 'Suggest [Cloud Architecture] improvements for traffic spikes.' }, tags: ['클라우드', '서버'] },
      { id: '077', role: '기획자', type: '문서생성', content: { ko: '개발/디자인 협업을 위한 [디자인 시스템 가이드] 컬러/컴포넌트 목차를 잡아주세요.', en: 'Outline [Design System] for dev-design collaboration.' }, tags: ['디자인시스템', '협업'] },
      { id: '078', role: '개발자', type: '문서생성', content: { ko: '[SQL 쿼리 최적화] 체크리스트와 인덱스 활용 가이드라인을 작성해주세요.', en: 'Create [SQL Optimization] checklist for junior devs.' }, tags: ['DB', '최적화'] },
      { id: '079', role: '개발자', type: '문서생성', content: { ko: '로그인 기능에 대한 TDD 단위 테스트 케이스와 시나리오를 코드로 예시 들어주세요.', en: 'Draft TDD [Unit Test] cases for login function.' }, tags: ['TDD', '테스트'] },
      { id: '080', role: 'PM', type: '문서생성', content: { ko: '시스템 정기 점검 공지문을 중단 범위와 사유를 담아 정중하게 작성해주세요.', en: 'Draft a polite [System Maintenance] notice for users.' }, tags: ['공지', '점검'] }
    ]
  },
  {
    id: 'cat-9',
    title: { ko: '전략/경영', en: 'Strategy / Management' },
    icon: 'Globe',
    prompts: [
      { id: '081', role: 'CEO', type: '문서생성', content: { ko: '신년사(CEO Message)를 도약과 혁신의 키워드를 담아 감동적으로 작성해주세요.', en: 'Draft an inspiring [CEO New Year Message] for employees.' }, tags: ['신년사', '연설'] },
      { id: '082', role: '기획', type: '구조화', content: { ko: '3개년 중장기 전략 로드맵을 OGSM 프레임워크와 핵심 지표 위주로 표로 정리해주세요.', en: 'Draft a 3-year roadmap using [OGSM] framework.' }, tags: ['전략', '로드맵'] },
      { id: '083', role: 'CEO', type: '분석', content: { ko: 'M&A 인수 대상 기업의 초기 평가 보고서를 시너지와 리스크 관점에서 작성해주세요.', en: 'Draft initial [M&A Assessment] report for target company.' }, tags: ['M&A', '평가'] },
      { id: '084', role: '전략', type: '구조화', content: { ko: '[신규 사업 타당성 검토] 보고서 목차와 재무 모델링 분석 항목을 구성해주세요.', en: 'Outline [Feasibility Study] report for new business.' }, tags: ['타당성', '기획'] },
      { id: '085', role: 'CEO', type: '문서생성', content: { ko: '경영 위기 극복을 위한 전사 직원 대상 리더십 메시지를 신뢰와 협력 위주로 작성해주세요.', en: 'Draft a leadership message for [Crisis Management].' }, tags: ['위기관리', '리더십'] },
      { id: '086', role: '기획', type: '분석', content: { ko: '[포터의 5 Forces] 분석을 활용해 구독형 B2B SaaS 시장의 경쟁 강도를 진단해주세요.', en: 'Diagnose B2B SaaS market using [Porter\'s 5 Forces].' }, tags: ['시장분석', 'SaaS'] },
      { id: '087', role: '전략', type: '문서생성', content: { ko: '조직 내 변화관리 필요성을 설득하기 위한 코터의 8단계 모델 기반 보고서를 작성해주세요.', en: 'Draft [Change Management] report using Kotter\'s model.' }, tags: ['변화관리', '보고서'] },
      { id: '088', role: '기획', type: '자동화설계', content: { ko: '이사회용 [월간 경영 현황 보고서] 자동화 템플릿과 데이터 입력 구조를 설계해주세요.', en: 'Design automated [Monthly Management Report] template.' }, tags: ['보고서', '자동화'] },
      { id: '089', role: '임원', type: '요약/정리', content: { ko: '글로벌 산업 트렌드 리포트의 인사이트 Top 5를 한국 비즈니스 맥락으로 재해석해주세요.', en: 'Summarize Global Trend Reports into Korean context.' }, tags: ['트렌드', '인사이트'] },
      { id: '090', role: '전략', type: '템플릿', content: { ko: '전략 실행력을 높이기 위한 [전략-실행 연계 맵] 전사-부서-개인 목표 정렬 양식을 작성해주세요.', en: 'Create a [Strategy Execution Map] target alignment form.' }, tags: ['실행', '양식'] }
    ]
  },
  {
    id: 'cat-10',
    title: { ko: '공공/행정', en: 'Public / Admin' },
    icon: 'Building2',
    prompts: [
      { id: '091', role: '공무원', type: '문서생성', content: { ko: '[청년 창업 지원 사업] 공모 신청서 초안을 정부 양식에 맞는 격식체로 작성해주세요.', en: 'Draft [Government Project] application in a formal tone.' }, tags: ['공모', '지원사업'] },
      { id: '092', role: '공무원', type: '요약/정리', content: { ko: '정부 디지털 전환 정책 보도자료를 지자체 담당자용 핵심 요약 업무 메모로 정리해주세요.', en: 'Summarize Gov [Digital Policy] into a work memo.' }, tags: ['정책요약', '메모'] },
      { id: '093', role: '공무원', type: '문서생성', content: { ko: '어르신 대상 [복지 서비스 안내 리플렛] 문구를 쉬운 단어와 큰 글씨 위주로 작성해주세요.', en: 'Draft [Elderly Welfare] leaflet with simple language.' }, tags: ['복지', '리플렛'] },
      { id: '094', role: '행정', type: '구조화', content: { ko: '[스마트시티 마스터플랜] 수립을 위한 체계적인 보고서 목차와 로드맵을 구성해주세요.', en: 'Outline [Smart City Masterplan] report and roadmap.' }, tags: ['스마트시티', '도시'] },
      { id: '095', role: '행정', type: '개선/수정', content: { ko: '공공 홈페이지 [서비스 FAQ] 20개를 시민 중심의 친절한 문체로 재작성해주세요.', en: 'Rewrite [Gov FAQ] into user-friendly plain language.' }, tags: ['FAQ', '행정서비스'] },
      { id: '096', role: '공무원', type: '분석', content: { ko: '[국민 참여 예산제] 수집 의견을 클러스터링하여 핵심 니즈 분석 보고서를 작성해주세요.', en: 'Analyze [Public Budget Issues] cluster from citizen feedback.' }, tags: ['예산제', '분석'] },
      { id: '097', role: '행정', type: '문서생성', content: { ko: '[AI 민원 처리 시스템] 도입 타당성 검토 보고서를 보안 리스크를 포함하여 작성해주세요.', en: 'Draft [AI Civil Service] feasibility report with risk plan.' }, tags: ['AI행정', '타당성'] },
      { id: '098', role: '행정', type: '변환', content: { ko: '어려운 법령 조문 내용을 중학생 수준의 쉬운 행정 언어로 풀어 쓰고 예시를 추가해주세요.', en: 'Simplify [Law Articles] into plain plain language.' }, tags: ['행정언어', '순화'] },
      { id: '099', role: '행정', type: '자동화설계', content: { ko: '[반복 민원 자동 응답] 시나리오 플로우(전입신고, 등본 발급 등)를 설계해주세요.', en: 'Design [Automated Response] scenario for civil service.' }, tags: ['민원', '챗봇'] },
      { id: '100', role: '행정', type: '템플릿', content: { ko: '[정부 R&D 결과 보고서] 표준 템플릿을 과학기술정보통신부 양식 기준으로 만들어주세요.', en: 'Create standard [R&D Outcome Report] gov template.' }, tags: ['R&D', '최종보고'] }
    ]
  }
];

