import { setColor } from "./index";

export type VuesaxOptions = {
  colors?: VuesaxColors;
}

export type VuesaxColors = {
  [P in VuesaxColorOptions]?: string;
}

export type VuesaxColorOptions = typeof vuesaxColorOptions[number];

const vuesaxColorOptions = [ 
  "primary",
  "success",
  "danger",
  "warn",
  "dark",
] as const;

const defineColors = (colors: VuesaxColors) => {
  const options = Object.keys(colors) as (keyof VuesaxColors)[];
  options.forEach((item) => {
    if (document.body) {
      setColor(item, colors[item]!, document.body);
    }
  });
};

export const defineVuesaxOptions = (options: VuesaxOptions) => {
  if (options.colors) {
    defineColors(options.colors);
  }
};
