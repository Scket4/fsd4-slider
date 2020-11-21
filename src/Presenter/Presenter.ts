
import { Model } from "../Model/Model";
import { View } from "../View/View"
import { currentMaxChange, currentMinChange, pointMove, sliderStartChange } from "./utils";
import { Observer } from "../core/Observer";
import { completeValue, properties } from "../core/globals";
import { Properties } from "./properties";

export class Presenter {
  emitter: Observer
  view: View
  model: Model
  props: Properties
  constructor(emmiter: Observer, selector: string) {
    this.emitter = emmiter
    this.view = new View(this.emitter, selector)
    this.model = new Model(this.emitter)
    this.props = new Properties()
  }

  init() {
    this.view.init()
    this.model.init()
    this.emitter.subscribe('ViewToPresenterPoint', (e: MouseEvent, point: string, values: properties) => this.pointMove(e, point, values))
    this.emitter.subscribe('pointMaxMoveModelToPresenter', (values: completeValue) => this.pointMaxApply(values))
    this.emitter.subscribe('pointMinMoveModelToPresenter', (values: completeValue) => this.pointMinApply(values))

    this.emitter.subscribe('viewToPresenter: currentMin', (val: number, props: properties) => this.currentMinChange(val, props))
    this.emitter.subscribe('viewToPresenter: currentMax', (val: number, props: properties) => this.currentMaxChange(val, props))
    this.emitter.subscribe('viewToPresenter: sliderEnd', (values: properties) => this.sliderEndChange(values))
    this.emitter.subscribe('viewToPresenter: sliderEnd', (values: properties) => this.sliderStartChange(values))
  }

  pointMove(e: MouseEvent, point: string, values: properties) {
    this.props.changeData(values)
    const newValue: completeValue = pointMove(e, values, this.props)
    if (point === 'min') {
      this.model.pointMinChange(newValue)
      
    } else if (point == 'max') {
      this.model.pointMaxChange(newValue)    
   }
  }

  currentMinChange(val: number, props: properties) {
    const newValue = currentMinChange(val, props)
    this.model.pointMinChange(newValue)
  }

  currentMaxChange(val: number, props: properties) {
    const newValue = currentMaxChange(val, props)
    this.model.pointMaxChange(newValue)
  }

  sliderEndChange(values: properties) {
    this.props.changeData(values)
    const value = sliderStartChange(values, this.props)
    this.model.pointMinChange(value)
    this.view.sliderEnd(values.sliderStart, values.sliderEnd)
  }

  sliderStartChange(values: properties) {
    this.props.changeData(values)
    const value = sliderStartChange(values, this.props)
    this.model.pointMinChange(value)
    this.view.sliderStart(values.sliderStart, values.sliderEnd)
  }




  pointMaxApply(values: completeValue) {
    this.view.pointMaxApply(values)
  }

  pointMinApply(values: completeValue) {
    this.view.pointMinApply(values)    
  }
  
}