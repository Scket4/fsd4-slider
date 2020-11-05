import { $ } from "./dom"
import { Properties } from "./Properties"

export class View {
  constructor(emitter, components = [], selector) { 
    this.emitter = emitter
    this.$el = $(selector)
    this.components = components
    this.prop = new Properties()
  }

  getRoot() {
    const $root = $.create('div', 'slider')

    this.components = this.components.map(Comp => {
      const $el = $.create('div', Comp.className)
      const component = new Comp(this.emitter, $el, this.prop)
      $el.html(component.toHTML())
      $root.append($el)
      $el.$el.className === 'up-point' ? $el.$el.innerHTML = 0 : ''
      return component
    })
    return $root
    
  }

  init() {
    this.$el.append(this.getRoot())
    this.emitter.subscribe('elToView', (width, coords, position) => this.setProperties(width, coords, position))
    this.components.forEach(comp => {comp.init()
    })
  }

  makeChange(prop, val) {
    this.components.forEach(comp => {
      if (comp.setProperties) {
        comp.setProperties(prop, val)
      }
    })
    
    this.components.forEach(comp => {
      if (comp.makeChange) {
      comp.makeChange(prop, val)
      }
    })
  }
 

  pointMove(val) {
    this.components.forEach(comp => {
      if (comp.pointMove) {
        comp.pointMove(val)
      }
    })
  }

  
  // destroyScale() {
  //   document.querySelectorAll('.scale__numbers').forEach(e => {
  //     e.remove()
  //   })
  // }
}

