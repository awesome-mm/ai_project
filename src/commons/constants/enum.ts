/**
 * 프로젝트에서 사용하는 감정(emotion) enum 및 화면 표시용 메타 데이터.
 * 화면에서는 label, imageM/imageS, color 토큰을 사용하여 렌더링한다.
 */

/** 감정 종류 */
export enum Emotion {
  Happy = "Happy",
  Sad = "Sad",
  Angry = "Angry",
  Surprise = "Surprise",
  Etc = "Etc",
}

/** 감정별 화면 표시 정보 (라벨, 이미지 파일명, 색상 토큰) */
export interface EmotionDisplay {
  /** 화면에 보여질 텍스트 */
  label: string;
  /** 중형 이미지 파일명 (예: emotion-happy-m.png) */
  imageM: string;
  /** 소형 이미지 파일명 (예: emotion-happy-s.png) */
  imageS: string;
  /** 화면 표시 색상 토큰 (예: red60 → CSS 변수 또는 color 상수와 매핑 가능) */
  colorToken: string;
}

/** 감정별 표시 데이터 매핑 */
export const EMOTION_DISPLAY: Record<Emotion, EmotionDisplay> = {
  [Emotion.Happy]: {
    label: "행복해요",
    imageM: "emotion-happy-m.png",
    imageS: "emotion-happy-s.png",
    colorToken: "red60",
  },
  [Emotion.Sad]: {
    label: "슬퍼요",
    imageM: "emotion-sad-m.png",
    imageS: "emotion-sad-s.png",
    colorToken: "blue60",
  },
  [Emotion.Angry]: {
    label: "화나요",
    imageM: "emotion-angry-m.png",
    imageS: "emotion-angry-s.png",
    colorToken: "gray60",
  },
  [Emotion.Surprise]: {
    label: "놀랐어요",
    imageM: "emotion-surprise-m.png",
    imageS: "emotion-surprise-s.png",
    colorToken: "yellow60",
  },
  [Emotion.Etc]: {
    label: "기타",
    imageM: "emotion-etc-m.png",
    imageS: "emotion-etc-s.png",
    colorToken: "green60",
  },
};

/** 모든 감정 목록 (순회용) */
export const EMOTION_LIST: Emotion[] = [
  Emotion.Happy,
  Emotion.Sad,
  Emotion.Angry,
  Emotion.Surprise,
  Emotion.Etc,
];
