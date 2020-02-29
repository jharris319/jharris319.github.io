// Set the theme (either light or dark, controlled by a bool `light` flag).
const themeButton = document.getElementById('theme-button');
function setTheme({ light = true }) {
  if (light) {
    document.body.setAttribute('data-theme', 'light');
    themeButton.innerText = '☽';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeButton.innerText = '☼';
  }
}

// Toggle the theme when the user clicks the button.
const THEME_STORAGE_KEY = 'jharr.is_theme';
function toggleTheme() {
  const light = document.body.getAttribute('data-theme') !== 'light';
  setTheme({ light });

  // Remember.
  localStorage.setItem(THEME_STORAGE_KEY, document.body.getAttribute('data-theme'));
}
themeButton.onclick = toggleTheme;

// Default to the user's theme, or their stored preference.
const stored = localStorage.getItem(THEME_STORAGE_KEY);
const defaultIsLight = !(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
setTheme({ light: stored ? stored === 'light' : defaultIsLight });