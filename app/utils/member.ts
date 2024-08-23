export function formatDate(date: Date, locale: string = 'tr-TR'): string {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
}

export function getAccessToken() {
  return localStorage.getItem('token')
}

export function getUsername() {
  return localStorage.getItem('username')
}

let intervalIds: NodeJS.Timeout
export function stockTimeInterval(time: number, fnc: () => void): NodeJS.Timeout {
  intervalIds = setInterval(() => {
    fnc()
  }, time)
  return intervalIds
}

export function removeTimeInterval() {
  clearInterval(intervalIds)
}

export function isUserLoggedIn() {
  if (localStorage.getItem('token')) {
    return true
  }
  console.log('isUserLoggedIn')
}
