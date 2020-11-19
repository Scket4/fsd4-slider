import { $, Dom } from "../core/dom"
import { LabelMin } from "./label/LabelMin"
import { Track } from "./Track"
import { Scale } from "./Scale"
import { PointMin } from "./point/PointMin"
import { Settings } from "./Settings"
import { PointMax } from "./point/PointMax"
import { LabelMax } from "./label/LabelMax"
import { ProgressBar } from "./ProgressBar"
import { Observer } from "../core/Observer"
import { properties } from "../core/globals"

export class View {
  emitter: Observer
  $el: Dom
  components: any[]
  constructor(emitter: Observer, selector: string) { 
    this.emitter = emitter
    this.$el = $(selector)
    this.components = [Track, Scale, PointMin, PointMax, LabelMin, LabelMax, ProgressBar, Settings]
  }

  init() {
    this.$el.append(this.getRoot())
    this.components.forEach(comp => {comp.init()
    })
    this.emitter.subscribe('componentsToView: pointMove', (e: MouseEvent) => this.getData(e))
  }


  getRoot() {
    const $root = $.create('div', 'slider')

    this.components = this.components.map(Comp => {
      const $el = $.create('div', Comp.className)
      const component = new Comp(this.emitter, $el)
      $el.html(component.toHTML())
      $root.append($el.$el)
      return component
    })
    return $root.$el
    
  }


  getData(e: MouseEvent) {
    let props: properties = {} as properties
    this.components.forEach(comp => {
      comp.getData(props)
    })
    if (e) props.event = e
    this.emitter.trigger('viewToPresenter', props)
  }

  changeData(val: number) {
    this.components.forEach((el: any) => {
      if (el.changeData) el.changeData(val)
    })
  }
 
}

