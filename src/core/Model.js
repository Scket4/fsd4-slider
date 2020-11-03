export class Model {
  constructor(emmiter) {
    this.emmiter = emmiter
    this.sliderStart = 0
    this.sliderEnd = 100
    this.percent = 0
    this.isVertical = false
    this.isRange = false
    this.stepsize = 1
    this.isLabel = true
    this.isScale = true
  }

  init() {
  }

  changeProperties(prop, val) {
    this[`${prop}`] = val
    this.emmiter.trigger('modelToPresenter', prop, val)
  }

}