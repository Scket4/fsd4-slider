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
import { completeValue, properties, whatThumb } from "../core/globals"
import { Compilation } from "webpack"

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
    this.emitter.subscribe('rangeComponentsToView', () => this.range())
    this.emitter.subscribe('pointToView',(e: MouseEvent, point: string) => this.viewToPresenterPoint(e, point))
    this.emitter.subscribe('settingsToView: currentMin', (val: number) => this.currentMinChange(val))
    this.emitter.subscribe('settingsToView: currentMax', (val: number) => this.currentMaxChange(val))
    this.emitter.subscribe('settingsToView: sliderStart', () => this.sliderStartChange())
    this.emitter.subscribe('settingsToView: sliderEnd', () => this.sliderEndChange())
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

  range() {
    this.emitter.trigger('rangeViewToPresenter')
  }

  viewToPresenterPoint(e: MouseEvent, point: string) {
    let data = this.getData()
    this.emitter.trigger('ViewToPresenterPoint', e, point, data)
  }

  currentMinChange(val: number) {
    const props = this.getData()
    this.emitter.trigger('viewToPresenter: currentMin', val, props)
  }

  currentMaxChange(val: number) {
    const props = this.getData()
    this.emitter.trigger('viewToPresenter: currentMax', val, props)
  }
  sliderStartChange() {
    const values: properties = this.getData()
    this.emitter.trigger('viewToPresenter: sliderEnd', values)
  }
  sliderEndChange() {
    const values: properties = this.getData()
    this.emitter.trigger('viewToPresenter: sliderEnd', values)
  }

  

  getData() {
    let props: properties = {} as properties
    this.components.forEach(comp => {
      comp.getData(props)
    })
    return props
  }

  pointMinApply(values: completeValue) {
    this.components.forEach(el => {
      if (el.pointMinChange) el.pointMinChange(values) 
    })
  }

  pointMaxApply(values: completeValue) {
    this.components.forEach(el => {
      if (el.pointMaxChange) el.pointMaxChange(values) 
      
    })
  }

  sliderEnd(start: number, end: number) {
    this.components.forEach(comp => {
      if(comp.sliderEndChange) comp.sliderEndChange(start, end)
    })
  }

  sliderStart(start: number, end: number) {
    this.components.forEach(comp => {
      if(comp.sliderStartChange) comp.sliderStartChange(start, end)
    })
  }
}
