// Set the theme (either light or dark, controlled by a bool `light` flag)
const themeButton = document.getElementById('theme-button');
function setTheme({ light = false }) {
  if (light) {
    document.body.setAttribute('data-theme', 'light');
    themeButton.innerText = '☽';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeButton.innerText = '☼';
  }
}

// Toggle the theme when the user clicks the theme button
const THEME_STORAGE_KEY = 'jharr.is_theme';
function toggleTheme() {
  const light = document.body.getAttribute('data-theme') !== 'light';
  setTheme({ light });

  // Store user preference
  localStorage.setItem(THEME_STORAGE_KEY, document.body.getAttribute('data-theme'));
}
themeButton.onclick = toggleTheme;

// Default to the user's stored preference
const stored = localStorage.getItem(THEME_STORAGE_KEY);
setTheme({ light: stored === 'light' });