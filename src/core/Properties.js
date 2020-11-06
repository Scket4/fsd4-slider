export class Properties {
  constructor() {
  this.pointPosition = 0
  this.percent = 0
  this.sliderStart = 0
  this.sliderEnd = 100
  this.stepSize = 1
  this.value = 0
  this.isVertical = false
  this.isLabel = true
  this.isScale = true

  this.isRange = false
  this.rangeStartPosition = 0
  this.rangeEndPosition = 0
  this.rangeStartPercent = 0
  this.rangeEndPercent = 20
  this.rangePercent = 0
  this.rangeEndPositionLabel = 20




  this.slider = null
  this.sliderStart = 0
  this.sliderEnd = 100
  this.sliderSize = this.sliderEnd - this.sliderStart
  this.positionMin = 0

  this.pointMinCocords = null
  }

}