/**
 * Color foundation tokens (Figma node: 3459:1130).
 * 프로젝트 전체에서 사용되는 color 토큰.
 * 다크모드 대응: CSS 변수(--color-*)를 사용하면 테마별 값이 자동 적용됨.
 *
 * Figma 노드 3459:1130에서 실제 색상값을 가져온 경우,
 * globals.css의 :root 및 @media (prefers-color-scheme: dark) 블록 내 hex 값을 해당 값으로 교체할 것.
 */

/** CSS 변수 이름. globals.css의 --color-* 와 1:1 매칭 */
export const COLOR_CSS_VARS = {
  background: "var(--color-background)",
  foreground: "var(--color-foreground)",
  primary: "var(--color-primary)",
  primaryForeground: "var(--color-primary-foreground)",
  secondary: "var(--color-secondary)",
  secondaryForeground: "var(--color-secondary-foreground)",
  muted: "var(--color-muted)",
  mutedForeground: "var(--color-muted-foreground)",
  accent: "var(--color-accent)",
  accentForeground: "var(--color-accent-foreground)",
  border: "var(--color-border)",
  input: "var(--color-input)",
  ring: "var(--color-ring)",
  /** 감정(emotion) 표시용 색상 토큰 */
  red60: "var(--color-red60)",
  blue60: "var(--color-blue60)",
  gray60: "var(--color-gray60)",
  yellow60: "var(--color-yellow60)",
  green60: "var(--color-green60)",
} as const;

/** TS에서 스타일 객체 등으로 쓸 때 사용할 값 (CSS 변수 참조) */
export const COLOR = COLOR_CSS_VARS;

/** CSS 변수 키만 (빌드/검증용) */
export type ColorTokenKey = keyof typeof COLOR_CSS_VARS;

/** 감정(emotion) 표시용 색상 토큰 키 - enum.ts EMOTION_DISPLAY.colorToken과 일치 */
export type EmotionColorKey = "red60" | "blue60" | "gray60" | "yellow60" | "green60";
