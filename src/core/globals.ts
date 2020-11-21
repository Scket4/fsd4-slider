export interface properties {
  event: MouseEvent
  pointMinX: number
  pointMinY: number
  pointMaxX: number
  pointMaxY: number
  isVertical: boolean
  isRange: boolean
  isLabel: boolean
  isScale: boolean
  sliderX: number
  sliderY: number
  sliderWidth: number
  sliderHeight: number
  step: number
  shiftX: number
  shiftY: number
  sliderEnd: number
  sliderStart: number
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

export interface presenterProperties {
  isVertical: boolean
  isRange: boolean
  step: number
  sliderEnd: number
  sliderStart: number
}