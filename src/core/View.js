import { $ } from "./dom"
import { Properties } from "./Properties"

export class View {
  constructor(emitter, components = [], selector) { 
    this.emitter = emitter
    this.$el = $(selector)
    this.components = components
    // this.verticalComponents = [Track, Scale, PointMin, PointMax, LabelMin, LabelMax, ProgressBar, Settings]
    this.prop = new Properties()
  }

  getRoot() {
    const $root = $.create('div', 'slider')

    this.components = this.components.map(Comp => {
      const $el = $.create('div', Comp.className)
      const component = new Comp(this.emitter, $el, this.prop)
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
    
  }

  init() {
    this.$el.append(this.getRoot())
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

    if (prop === 'isVertical') {
      if (val == 1) {
        const $root = $('.slider')
        $root.addClass('sliderV')
        this.components.forEach(comp => {
          comp.initVertical()
        })
      }
    }
  }
 
}

