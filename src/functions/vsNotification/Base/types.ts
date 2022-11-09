import type { Component } from "vue";

export type PositionType =
  | "top-right"
  | "top-center"
  | "top-left"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left";

export interface NotificationData {
  content?          : Component;
  title?            : string;
  text?             : string;
  color?            : string | null;
  border?           : string | null;
  icon?             : Component | string | null;
  flat?             : boolean;
  sticky?           : boolean;
  square?           : boolean;
  onClick?          : Function;
  onClickClose?     : Function;
  clickClose?       : boolean;
  buttonClose?      : boolean;
  onDestroy?        : Function;
  width?            : "100%" | "auto";
  loading?          : boolean;
  notPadding?       : boolean;
  classNotification?: string;
  isVisible?        : boolean;
  progress?         : number | string;
  duration?         : number | string;
  intervalProgress? : any;
  countProgress?    : number;
}

export interface NotificationParams extends NotificationData {
  position?    : PositionType;
  progressAuto?: boolean;
}
