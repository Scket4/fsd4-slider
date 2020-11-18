import { $ } from "../core/dom"
import { Properties } from "../Properties"
import { LabelMin } from "./label/LabelMin"
import { Track } from "./Track"
import { Scale } from "./Scale"
import { PointMin } from "./point/PointMin"
import { Settings } from "./Settings"
import { PointMax } from "./point/PointMax"
import { LabelMax } from "./label/LabelMax"
import { ProgressBar } from "./ProgressBar"

export class View {
  constructor(emitter, selector) { 
    this.emitter = emitter
    this.$el = $(selector)
    this.components = [Track, Scale, PointMin, PointMax, LabelMin, LabelMax, ProgressBar, Settings]
    this.prop = new Properties()
  }

  getData(e) {
    let props = {}
    this.components.forEach(comp => {
      comp.getData(props)
    })
    if (e) props.event = e
    this.emitter.trigger('viewToPresenter', props)
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
    this.emitter.subscribe('componentsToView: pointMove', (e) => this.getData(e))
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

    if (prop === 'isVertical') {
      if (val == 0) {
        const $root = $('.slider')
        $root.removeClass('sliderV')
        this.components.forEach(comp => comp.initHorizontal())
      }
    }

  }
 
}

