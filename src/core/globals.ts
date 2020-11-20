export interface properties {
  event: MouseEvent
  pointMinX: number
  pointMinY: number
  pointMaxX: number
  pointMaxY: number
  isVertical: boolean
  isRange: boolean
  sliderX: number
  sliderY: number
  sliderWidth: number
  sliderHeight: number
  positionMaxV: number
  positionMax: number
  step: number
  stepSize: number
  isLabel: boolean
  isScale: boolean
  shiftX: number
  shiftY: number
}

export interface completeValue {
  position: number
  value: number
  percent: number
}

export interface whatThumb {
  e: MouseEvent
  secodThumb: boolean
}

export interface IModel {
  pointMinPercent?: number
  pointMinValue?: number
  pointMinPosition?: number
  pointMaxPercent?: number
  pointMaxValue?: number
  pointMaxPosition?: number
}