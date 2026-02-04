/**
 * Typography foundation tokens (Figma node: 3459:1422).
 * 프로젝트 전체에서 사용되는 typography 토큰.
 * - 한글/영문 분기: 추후 영문 typography는 다른 값을 사용할 수 있도록 셋팅.
 * - 모바일/데스크톱 분기: 미디어쿼리로 분기된 CSS 변수 사용.
 *
 * Figma 노드 3459:1422에서 실제 값을 가져온 경우,
 * globals.css의 --typography-* 변수 값을 해당 값으로 교체할 것.
 */

/** CSS 변수 이름. globals.css의 --typography-* 와 1:1 매칭 */
export const TYPOGRAPHY_CSS_VARS = {
  // 한글 (기본)
  fontFamilyKo: "var(--typography-font-family-ko)",
  // 영문 (추후 다른 값 사용 가능)
  fontFamilyEn: "var(--typography-font-family-en)",
  // 공통 스케일 (모바일/데스크톱 분기)
  fontSizeXs: "var(--typography-font-size-xs)",
  fontSizeSm: "var(--typography-font-size-sm)",
  fontSizeBase: "var(--typography-font-size-base)",
  fontSizeMd: "var(--typography-font-size-md)",
  fontSizeLg: "var(--typography-font-size-lg)",
  fontSizeXl: "var(--typography-font-size-xl)",
  fontSize2xl: "var(--typography-font-size-2xl)",
  fontSize3xl: "var(--typography-font-size-3xl)",
  lineHeightTight: "var(--typography-line-height-tight)",
  lineHeightNormal: "var(--typography-line-height-normal)",
  lineHeightRelaxed: "var(--typography-line-height-relaxed)",
  lineHeightLoose: "var(--typography-line-height-loose)",
  fontWeightNormal: "var(--typography-font-weight-normal)",
  fontWeightMedium: "var(--typography-font-weight-medium)",
  fontWeightSemibold: "var(--typography-font-weight-semibold)",
  fontWeightBold: "var(--typography-font-weight-bold)",
} as const;

/** TS에서 스타일 객체 등으로 쓸 때 사용할 값 (CSS 변수 참조) */
export const TYPOGRAPHY = TYPOGRAPHY_CSS_VARS;

/** CSS 변수 키만 (빌드/검증용) */
export type TypographyTokenKey = keyof typeof TYPOGRAPHY_CSS_VARS;

/** 뷰포트 분기 타입 */
export type TypographyViewport = "mobile" | "desktop";

/** 언어 분기 타입 (추후 영문 typography 확장용) */
export type TypographyLocale = "ko" | "en";
