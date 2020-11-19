import { completeValue } from "../core/globals"
import { Observer } from "../core/Observer"

export class Model implements completeValue {
  valueFromHTML: number
  valueFromPos: number
  valueToHTML: number
  valueToPos: number
  emitter: Observer
  constructor(emitter: Observer) {
    this.valueFromHTML = 0
    this.valueFromPos = 0
    this.valueToHTML = 100
    this.valueToPos = 100
    this.emitter = emitter
  }

  init() {
  }

  valueFromChange(val: completeValue) {
    this.valueFromHTML = val.valueFromHTML
    this.valueFromPos = val.valueFromPos
    this.emitter.trigger('modelToPresenterValueFrom', {valueFromHTML: this.valueFromHTML, valueFromPos: this.valueFromPos} as completeValue)
  }

  valueToChange(val: completeValue) {
    this.valueToHTML = val.valueToHTML
    this.valueToPos = val.valueToPos
    this.emitter.trigger('modelToPresenterValueTo', {valueToHTML: this.valueToHTML, valueToPos: this.valueToPos} as completeValue)
  }
}