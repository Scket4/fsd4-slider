export class Model {
  constructor(emmiter) {
    this.emmiter = emmiter

    this.stepSize = 0

    this.isVertical = false
    this.isLabel = true
    this.isScale = true

    this.isRange = false
    this.rangeStartPercent - 0
    this.rangeEndPercent = 20


    this.positionMin = 0
    this.positionMax = 0
  }

  init() {
  }

  changeProperties(prop, val) {
    this[`${prop}`] = val
    this.emmiter.trigger('modelToPresenter', prop, val)
  }

}