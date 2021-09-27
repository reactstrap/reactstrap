export interface CSSModule {
  [className: string]: string;
}

export type setGlobalCssModule = (cssModule: CSSModule) => void;
