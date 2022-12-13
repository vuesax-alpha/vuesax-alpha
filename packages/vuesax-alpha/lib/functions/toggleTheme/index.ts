const setTheme = (forceTheme?: "dark" | "light") => {
  document.body.classList.add("vs-remove-transition");
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  let isThemeDark = media.matches;

  if (localStorage.vsTheme) {
    isThemeDark = localStorage.vsTheme == "dark";
  } else if (forceTheme) {
    isThemeDark = forceTheme == 'dark';
  }

  const theme = isThemeDark ? "dark" : "light";

  document.body.setAttribute("vs-theme", theme);

  localStorage.vsTheme = theme;

  setTimeout(() => {
    document.body.classList.remove("vs-remove-transition");
  }, 100);

  return theme;
};

const toggleTheme = (forceTheme?: "dark" | "light") => {
  document.body.classList.add("vs-remove-transition");
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  let isThemeDark = media.matches;

  if (localStorage.vsTheme) {
    isThemeDark = localStorage.vsTheme == "dark";
  } else if (forceTheme) {
    isThemeDark = forceTheme != 'dark';
  }
  const nextTheme = !isThemeDark ? "dark" : "light";

  document.body.setAttribute("vs-theme", nextTheme);
  localStorage.vsTheme = nextTheme;
  setTimeout(() => {
    document.body.classList.remove("vs-remove-transition");
  }, 100);

  return nextTheme;
};

export { toggleTheme, setTheme };
