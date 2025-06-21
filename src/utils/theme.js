export function applyDarkThemeFromLocalStorage() {
  const isDark = localStorage.getItem('is_darkTheme') === 'true'
  if (isDark) {
    document.documentElement.classList.add('dark')
    console.log('is dark')
  } else {
    document.documentElement.classList.remove('dark')
    console.log('is light')
  }
}
