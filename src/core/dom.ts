export class Dom {
  $el: HTMLElement
  constructor(selector: string | HTMLElement) {
    this.$el = typeof selector === 'string'
    ? document.querySelector(selector) as HTMLElement
    : selector
  }

  html(html: string) {
    if (typeof html === 'string' || typeof html === 'number')  {
      this.$el.innerHTML = html
      return this
    } 
      return this.$el.outerHTML.trim()
  }

  on(eventType: string, fn: EventListener) {
    this.$el.addEventListener(eventType, fn)
  }
  off(eventType: string, fn: EventListener) {
    this.$el.removeEventListener(eventType, fn)
  }

  clear() {
    this.$el.innerHTML = ''
    return this
  }

  append(node: Node) {
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

  addClass(selector: string) {
    this.$el.classList.add(selector)
  }

  removeClass(selector: string) {
    this.$el.classList.remove(selector)
  }

  getWidth() {
    return this.$el.getBoundingClientRect().right - this.$el.getBoundingClientRect().left
  }

  getCoordsX() {
    return this.$el.getBoundingClientRect().x
  }

  left(val: number) {
    this.$el.style.left = val - 12.5 + 'px'
  }

  width(val: number) {
    this.$el.style.width = val + 'px'
  }

  height(val: number) {
    this.$el.style.height = val + 'px'
  }

  top(val: number) {
    this.$el.style.top = val - 12.5 + 'px'
  }

  find(selector: string) {
    return this.$el.querySelector(selector)
  }

  data(type: string) {
    return this.$el.dataset[type]
  }

  toggle(selector: string) {
    this.$el.classList.toggle(selector)
  }

  getValue() {
    return this.$el.innerHTML
  }

  hasSelector(selector: string) {
    return this.$el.classList.contains(selector)
  }

}







export function $(selector: string | HTMLElement) {
  return new Dom(selector)
}

$.create = (tagName: string, classes = '', id = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  if(id) {
    el.id = id
  }
  return $(el)
}