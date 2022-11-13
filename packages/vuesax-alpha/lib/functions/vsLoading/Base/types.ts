export type LoadingType =
  | "atom"
  | "ball"
  | "scale"
  | "waves"
  | "border"
  | "points"
  | "square"
  | "circles"
  | "corners"
  | "default"
  | "gradient"
  | "rectangle"
  | "square-rotate";

export interface LoadingData {
  type?      : LoadingType;
  text?      : string;
  scale?     : string | number;
  color?     : string;
  target?    : any;
  opacity?   : string;
  percent?   : string | number;
  progress?  : string | number;
  isVisible? : boolean;
  background?: string;
}

export interface LoadingParams extends LoadingData {
  hidden?: boolean;
}
