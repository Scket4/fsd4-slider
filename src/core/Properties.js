export class Properties {
  constructor() {
  this.isVertical = false
  this.isLabel = true
  this.isScale = true
  this.isRange = false

  this.slider = null
  this.sliderStart = 0
  this.sliderEnd = 100
  this.sliderSize = this.sliderEnd - this.sliderStart

  this.positionMin = 0
  this.positionMax = 1
  this.pointMaxX = null
  this.pointMinX = null
  }

}