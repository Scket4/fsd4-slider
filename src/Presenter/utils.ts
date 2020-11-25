import { completeValue, presenterProperties, properties } from "../core/globals"

export function pointMove(e: MouseEvent, props: properties, newprops: presenterProperties) {
  const v = newprops.isVertical
  const shift = v ? props.shiftY : props.shiftX
  const client = v ? 'clientY' : 'clientX'
  const sliderXY = v ? props.sliderY : props.sliderX
  const sliderWH = v ? props.sliderHeight : props.sliderWidth
  
  let val: number = e[client] - sliderXY - shift  
  val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

  const stepSize = (props.sliderWidth - 12) / ((newprops.sliderEnd - newprops.sliderStart) / newprops.step)
  val = newprops.step === 0 ?  val : Math.round(val / stepSize) * stepSize

  val = val / sliderWH
  let values: completeValue

  const maxPos = v ? (props.pointMaxY - sliderXY) : (props.pointMaxX - sliderXY)
  const minPos = v ? (props.pointMinY - sliderXY) : (props.pointMinX - sliderXY)
  
  values = {
    position: val * (v ? props.sliderHeight : props.sliderWidth),
    value: Math.ceil(val * (newprops.sliderEnd - newprops.sliderStart) + newprops.sliderStart),
    percent: val,
    isRange: newprops.isRange,
    minPos: minPos,
    maxPos: maxPos,
    isVertical: newprops.isVertical
  } as completeValue
  
  return values
}

export function currentChange(val: number, props: properties, newprops: presenterProperties) {
  const v = newprops.isVertical
  const sliderWH = v ? props.sliderHeight : props.sliderWidth
  const sliderXY = v ? props.sliderY : props.sliderX
  let newVal = val / newprops.sliderEnd
  newVal = newVal > 1 ? 1 : newVal < 0 ? 0 : newVal

  const maxPos = v ? (props.pointMaxY - sliderXY) : (props.pointMaxX - sliderXY)
  const minPos = v ? (props.pointMinY - sliderXY) : (props.pointMinX - sliderXY)

  let values: completeValue
  values = {
    position: newVal * props.sliderWidth,
    value: Math.ceil(newVal * (newprops.sliderEnd - newprops.sliderStart) + newprops.sliderStart),
    percent: val,
    isRange: newprops.isRange,
    maxPos: maxPos,
    minPos: minPos,
    isVertical: newprops.isVertical
  }
  return values
}


export function sliderSizeChange(props: properties, newprops: presenterProperties) {
  const v = newprops.isVertical
  const sliderXY = v ? props.sliderY : props.sliderX
  const sliderWH = v ? props.sliderHeight : props.sliderWidth

  let position: number
  if (v) {
  position = (props.pointMinY - props.sliderY + 12.5) / props.sliderHeight
  } else { 
  position = (props.pointMinX -  props.sliderX + 12.5) / props.sliderWidth
  }  

  const maxPos = v ? (props.pointMaxY - sliderXY) : (props.pointMaxX - sliderXY)
  const minPos = v ? (props.pointMinY - sliderXY) : (props.pointMinX - sliderXY)

  const value = Math.ceil(position * (newprops.sliderEnd - newprops.sliderStart) + newprops.sliderStart)
  const values: completeValue = {
    value: value,
    position: position * props.sliderWidth,
    percent: position,
    isRange: newprops.isRange,
    minPos: minPos,
    maxPos: maxPos,
    isVertical: newprops.isVertical
  }
  return values
}


