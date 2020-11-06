export class Model {
  constructor(emmiter) {
    this.emmiter = emmiter
    this.sliderStart = 0
    this.sliderEnd = 100
    this.percent = 0
    this.value = 0
    this.isVertical = false
    
    this.rangeStart = 0
    this.rangeEnd = 0
    this.stepsize = 1
    this.isLabel = true
    this.isScale = true

    this.isRange = false
    this.rangeStartPercent - 0
    this.rangeEndPercent = 20


    this.positionMin = 0
  }

  init() {
  }

  changeProperties(prop, val) {
    this[`${prop}`] = val
    this.emmiter.trigger('modelToPresenter', prop, val)
  }

}