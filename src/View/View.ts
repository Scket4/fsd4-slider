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
import { completeValue, presenterProperties, properties, whatThumb } from "../core/globals"
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

  init(values: presenterProperties) {
    this.$el.append(this.getRoot(values))
    this.components.forEach(comp => {comp.init()
    })
    if (values.isVertical) this.vertical()
    this.emitter.subscribe('pointToView',(e: MouseEvent, point: string) => this.pointMove(e, point))
    this.emitter.subscribe('trackToView: click',(e: MouseEvent) => this.clickMove(e))
    this.emitter.subscribe('settingsToView: range', (currentMax: number) => this.range(currentMax))
    this.emitter.subscribe('settingsToView: vertical', () => this.vertical())
    this.emitter.subscribe('settingsToView: current', (val: number, current: string) => this.currentChange(val, current))
    this.emitter.subscribe('settingsToView: sliderSize', (minMax: string) => this.sliderSizeChange(minMax))
  }

  getRoot(values: presenterProperties) {
    const $root = $.create('div', 'slider')

    this.components = this.components.map(Comp => {
      const $el = $.create('div', Comp.className)
      const component = new Comp(this.emitter, $el)
      if (component.setValues) component.setValues(values)
      $el.html(component.toHTML())
      $root.append($el.$el)
      return component
    })
    return $root.$el
  }

  range(currentMax: number) {
    const props = this.getData()
    this.emitter.trigger('viewToPresenter: range', currentMax, props, 'max')
  }

  vertical() {
    this.components.forEach(el => {
      if (el.vertical) el.vertical()
    })
    const $el = $('.slider')
    $el.toggle('sliderV')
  }

  pointMove(e: MouseEvent, point: string) {
    let data = this.getData()
    this.emitter.trigger('viewToPresenter: pointMove', e, point, data)
  }

  clickMove(e: MouseEvent) {
    const values: properties = this.getData()
    this.emitter.trigger('viewToPresenter: click', e, values)
  }

  currentChange(val: number, current: string) {
    const props = this.getData()
    this.emitter.trigger('viewToPresenter: current', val, props, current)
  }

  sliderSizeChange(minMax: string) {
    const values: properties = this.getData()
    this.emitter.trigger('viewToPresenter: sliderSize', values, minMax)
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

  sliderEndApply(start: number, end: number, v: boolean) {
    this.components.forEach(comp => {
      if(comp.sliderEndChange) comp.sliderEndChange(start, end, v)
    })
  }

  sliderStartApply(start: number, end: number, v: boolean) {
    this.components.forEach(comp => {
      if(comp.sliderStartChange) comp.sliderStartChange(start, end, v)
    })
  }
}
