export const changeTheme = (theme) => {
  document.querySelector('html')?.setAttribute('data-theme', theme)
  if (global.window !== undefined) {
    localStorage?.setItem('theme', theme)
  }
}

export function getTheme() {
  if (global.window !== undefined) {
    return localStorage?.getItem('theme') || 'light'
  } else {
    return 'light'
  }
}
