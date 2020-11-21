import { presenterProperties, properties } from "../core/globals";

export class Properties implements presenterProperties {
  isVertical: boolean
  isRange: boolean
  step: number
  sliderEnd: number
  sliderStart: number
  constructor() {
    this.isVertical = false
    this.isRange = false
    this.step = 0
    this.sliderEnd = 100
    this.sliderStart = 0
  }

  changeData(props: properties) {
    this.isVertical = props.isVertical || this.isVertical
    this.isRange = props.isRange || this.isRange
    this.step = props.step || this.step
    this.sliderEnd = props.sliderEnd || this.sliderEnd
    this.sliderStart = props.sliderStart || this.sliderStart
  }
}