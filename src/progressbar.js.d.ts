declare module "progressbar.js" {
  export interface TextProperties {
    style: React.CSSProperties;
  }
  export interface CircleStepProperties {
    path: HTMLElement;
    text: TextProperties;
    setText: (text?: string) => void;
    value: () => number;
    trail: HTMLElement;
  }
  export interface CircleStepStateProperties {
    offset?: number;
  }
  export interface ProgressParams {
    strokeWidth?: number;
    easing?: string;
    duration?: number;
    color?: string;
    trailColor?: string;
    trailWidth?: number;
    svgStyle?: AnyValue;
    step?: (state: CircleStepStateProperties, circle: CircleStepProperties) => void;
  }
  export type ProgressAnimate = (num: number) => void;
  export class Circle {
    text: TextProperties;
    animate: ProgressAnimate;
    destroy: () => void;
    path: HTMLElement;
    trail: HTMLElement;
    constructor(element: Element, p: Partial<ProgressParams>);
  }
  export class Line {
    text: TextProperties;
    animate: ProgressAnimate;
    destroy: () => void;
    path: HTMLElement;
    trail: HTMLElement;
    svgStyle: AnyValue;
    constructor(element: Element, p: Partial<ProgressParams>);
  }
}
