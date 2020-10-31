import { $ } from "./dom"

export class View {
  constructor(emitter, components = [], selector) { 
    this.emitter = emitter
    this.$el = $(selector)
    this.components = components
  }

  getRoot() {
    const $root = $.create('div', 'slider')

    this.components = this.components.map(Comp => {
      const $el = $.create('div', Comp.className)
      const component = new Comp(this.emitter, $el)
      $el.html(component.toHTML())
      $root.append($el)
      $el.$el.className === 'up-point' ? $el.$el.innerHTML = 0 : ''
      return component
    })
    return $root
    
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(comp => comp.init())
  }


  
  // destroyScale() {
  //   document.querySelectorAll('.scale__numbers').forEach(e => {
  //     e.remove()
  //   })
  // }
}

