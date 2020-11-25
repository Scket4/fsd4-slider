import { completeValue, IModel } from "../core/globals"
import { Observer } from "../core/Observer"

export class Model implements IModel {
  emitter: Observer
  pointMinPercent: number
  pointMinValue: number
  pointMinPosition: number
  pointMaxPercent: number
  pointMaxValue: number
  pointMaxPosition: number
  constructor(emitter: Observer) {
    this.pointMinPercent = 0
    this.pointMinValue = 0
    this.pointMinPosition = 0
    this.pointMaxPercent = 100
    this.pointMaxValue = 100
    this.pointMaxPosition = 100
    this.emitter = emitter
  }

  init() {}

  pointMinChange(values: completeValue) {
    if (this.pointMaxPercent < values.percent && values.isRange === true) {
      this.pointMinPercent = this.pointMaxPercent
      this.pointMinValue = this.pointMaxValue - 1
      this.pointMinPosition = this.pointMaxPosition
    } else {
      this.pointMinPercent = values.percent
      this.pointMinValue = values.value
      this.pointMinPosition = values.position
    }
    values.value = this.pointMinValue
    values.position = this.pointMinPosition
    this.emitter.trigger('pointMinMoveModelToPresenter', values as completeValue)
  }

  pointMaxChange(values: completeValue) {    
    if (this.pointMinPercent > values.percent) {
      this.pointMaxPercent = this.pointMinPercent
      this.pointMaxValue = this.pointMinValue + 1
      this.pointMaxPosition = this.pointMinPosition
    } else {
      this.pointMaxPercent = values.percent
      this.pointMaxValue = values.value
      this.pointMaxPosition = values.position
    }
    values.value = this.pointMaxValue
    values.position = this.pointMaxPosition
    this.emitter.trigger('pointMaxMoveModelToPresenter', values as completeValue)
  }
  
}