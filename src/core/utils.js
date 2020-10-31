export function capitalize(str) {
  if (typeof str !== 'string') {
    return ''
  }
  return 'on' + (str.charAt(0).toUpperCase() + str.slice(1))
}