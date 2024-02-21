export const changeTheme = (theme) => {
  document.querySelector('html')?.setAttribute('data-theme', theme)
  if (global.window !== undefined) {
    localStorage?.setItem('theme', theme)
  }
}
