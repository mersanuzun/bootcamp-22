const THEME_MAP = {
  primary: "red",
  secondary: "green",
};

export default {
  bind(el, options) {
    const { value: theme } = options;
    const color = THEME_MAP[theme] || "black";

    el.style.color = color;
  },
};
