export class Properties {
  constructor() {
  this.isVertical = false
  this.isLabel = true
  this.isScale = true
  this.isRange = false

  this.stepSize = 0
  this.step = 0
  this.stepsValue = 0

  this.slider = null
  this.sliderStart = 0
  this.sliderEnd = 100
  this.sliderSize = this.sliderEnd - this.sliderStart

  this.positionMin = 0
  this.positionMax = 1

  this.pointMaxX = null
  this.pointMaxY = null

  this.pointMinX = null
  this.pointMinY = null

  this.positionMinV = 0
  this.positionMaxV = 1
  }

  setDefaults() {
  this.isLabel = true
  this.isScale = true
  this.isRange = false

  this.stepSize = 0
  this.step = 0
  this.stepsValue = 0

  this.sliderStart = 0
  this.sliderEnd = 100
  this.sliderSize = this.sliderEnd - this.sliderStart

  this.positionMin = 0
  this.positionMax = 1

  this.pointMaxX = null
  this.pointMaxY = null

  this.pointMinX = null
  this.pointMinY = null

  this.positionMinV = 0
  this.positionMaxV = 1
  }

}