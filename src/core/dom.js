class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
  }

  html(html) {
    if (typeof html === 'string' || typeof html === 'number')  {
      this.$el.innerHTML = html
      return this
    } 
      return this.$el.outerHTML.trim()
  }

  on(eventType, fn) {
    this.$el.addEventListener(eventType, fn)
  }

  clear() {
    this.$el.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  remove() {
    this.$el.remove()
  } 

  addClass(selector) {
    this.$el.classList.add(selector)
  }

  removeClass(selector) {
    this.$el.classList.remove(selector)
  }

  getWidth() {
    return this.$el.getBoundingClientRect().right - this.$el.getBoundingClientRect().left
  }

  getCoordsX() {
    return this.$el.getBoundingClientRect().x
  }

  left(val) {
    this.$el.style.left = val - 1.2 + '%'
  }

  width(val) {
    this.$el.style.width = val + '%'
  }

  find(selector) {
    return this.$el.querySelector(selector)
  }

  data() {
    return this.$el.dataset
  }

  toggle(selector) {
    this.$el.classList.toggle(selector)
  }

  getValue() {
    return this.$el.value
  }

  hasSelector(selector) {
    return this.$el.classList.contains(selector)
  }

}







export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '', id = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  if(id) {
    el.id = id
  }
  return $(el)
}