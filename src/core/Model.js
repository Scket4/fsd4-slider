import { Slider } from "./Slider";

export class Model extends Slider {
  constructor() {
    super()
    this.sliderWidth = 500
    this.sliderStart = 0
    this.sliderEnd = 100
    this.currentPercent = 0
  }

  sliderWidthChange(val) {
    if(val === 'undefined') {
      return this.sliderWidth
    } else {
      this.sliderWidth = val
    }
    this.emitter.trigger('sliderWidth', this.sliderWidth)
  }

  sliderStartChange(val) {
    if(val === 'undefined') {
      return this.sliderStart
    } else {
      this.sliderStart = val
    }
    this.emitter.trigger('sliderStart', this.sliderStart)
  }

  sliderEndChange(val) {
    if(val === 'undefined') {
      return this.sliderEnd
    } else {
      this.sliderEnd = val
    }
    this.emitter.trigger('sliderEnd', this.sliderEnd)
  }

  currentPercenChange(val) {
    if(val === 'undefined') {
      return this.currentPercent
    } else {
      this.currentPercent = val
    }
    this.emitter.trigger('currentPercen', this.currentPercent)
  }
}