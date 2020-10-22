class Dom {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }
}

export function $(selector) {
  return new Dom(selector)
}