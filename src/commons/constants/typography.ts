/**
 * Typography foundation tokens (Figma node: 3459:1422).
 * 프로젝트 전체에서 사용되는 typography 토큰.
 * - 한글(KO) 기본값 사용. 추후 영문(EN)은 다른 CSS 변수 세트로 분기 가능.
 * - 모바일/데스크톱 미디어쿼리로 분기된 CSS 변수 사용.
 */

/** 타이포그래피 구분: 모바일 / 데스크톱 (globals.css 미디어쿼리와 일치) */
export const TYPOGRAPHY_BREAKPOINT = {
  mobile: "mobile",
  desktop: "desktop",
} as const;

/** 현재 뷰포트 기준 토큰 접근 시 사용할 키 (미디어쿼리는 CSS에서 처리) */
export type TypographyBreakpoint = (typeof TYPOGRAPHY_BREAKPOINT)[keyof typeof TYPOGRAPHY_BREAKPOINT];

/** 로케일: 한글 기본, 영문은 추후 별도 값 사용 */
export const TYPOGRAPHY_LOCALE = {
  ko: "ko",
  en: "en",
} as const;

export type TypographyLocale = (typeof TYPOGRAPHY_LOCALE)[keyof typeof TYPOGRAPHY_LOCALE];

/**
 * CSS 변수 기반 타이포그래피 토큰.
 * globals.css의 --font-*, --text-* 와 1:1 매칭 (모바일/데스크톱은 CSS 미디어쿼리로 분기).
 * 영문 typography 적용 시 :root[lang="en"] 또는 .typography-en 에서 변수 오버라이드.
 */
export const TYPOGRAPHY_CSS_VARS = {
  /* 제목 계열 */
  titleLarge: "var(--text-title-large)",
  titleMedium: "var(--text-title-medium)",
  titleSmall: "var(--text-title-small)",
  /* 본문 계열 */
  bodyLarge: "var(--text-body-large)",
  bodyMedium: "var(--text-body-medium)",
  bodySmall: "var(--text-body-small)",
  /* 캡션/라벨 */
  caption: "var(--text-caption)",
  label: "var(--text-label)",
} as const;

/** TS에서 스타일 객체 등으로 쓸 때 사용할 값 (CSS 변수 참조) */
export const TYPOGRAPHY = TYPOGRAPHY_CSS_VARS;

/** 타이포그래피 토큰 키 (빌드/검증용) */
export type TypographyTokenKey = keyof typeof TYPOGRAPHY_CSS_VARS;
