class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
  }

  html(html) {
    if (typeof html === 'string') {
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