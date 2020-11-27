
import { Model } from "../Model/Model";
import { View } from "../View/View"
import { clickMove, currentChange, pointMove, sliderSizeChange } from "./utils";
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
    this.emitter.subscribe('viewToPresenter: pointMove', (e: MouseEvent, point: string, values: properties) => this.pointMove(e, point, values))
    this.emitter.subscribe('viewToPresenter: click', (e: MouseEvent, values: properties) => this.clickMove(e, values))
    this.emitter.subscribe('viewToPresenter: range', (currentMax: number, props: properties, max: string) => this.currentChange(currentMax, props, max))
    this.emitter.subscribe('viewToPresenter: current', (val: number, props: properties, current: string) => this.currentChange(val, props, current))
    this.emitter.subscribe('viewToPresenter: sliderSize', (values: properties, startEnd: string) => this.sliderSizeChange(values, startEnd))

    this.emitter.subscribe('pointMaxMoveModelToPresenter', (values: completeValue) => this.pointMaxApply(values))
    this.emitter.subscribe('pointMinMoveModelToPresenter', (values: completeValue) => this.pointMinApply(values))
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

  clickMove(e: MouseEvent, values: properties) {
    this.props.changeData(values)
    const newValue: completeValue = clickMove(e, values, this.props)
    this.model.pointMinChange(newValue)
  }

  currentChange(val: number, props: properties, current: string) {
    this.props.changeData(props)
    const newValue = currentChange(val, props, this.props)
    current === 'min' ?
    this.model.pointMinChange(newValue) :
    this.model.pointMaxChange(newValue)
  }

  sliderSizeChange(values: properties, startEnd: string) {
    this.props.changeData(values)
    const value = sliderSizeChange(values, this.props)
    if (startEnd === 'min') {
    this.model.pointMinChange(value)
    this.view.sliderStartApply(values.sliderStart, values.sliderEnd, this.props.isVertical) 
    } else {
    this.model.pointMinChange(value)
    this.view.sliderEndApply(values.sliderStart, values.sliderEnd, this.props.isVertical)
    }
  }




  pointMaxApply(values: completeValue) {
    this.view.pointMaxApply(values)
  }

  pointMinApply(values: completeValue) {
    this.view.pointMinApply(values)   
  }
  
}