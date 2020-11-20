import { completeValue, properties } from "../core/globals"

export function pointMove(e: MouseEvent, props: properties) {
  
  const v = props.isVertical
  const shift = v ? props.shiftY : props.shiftX
  const client = v ? 'clientY' : 'clientX'
  const sliderXY = v ? props.sliderY : props.sliderX
  const sliderWH = v ? props.sliderHeight : props.sliderWidth
  
  let val: number = e[client] - sliderXY - shift  
  val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

  val = props.step === 0 ?  val : Math.round(val / props.stepSize) * props.stepSize
  val = val / sliderWH
  let values: completeValue

  values = {
    position: val * props.sliderWidth,
    value: Math.ceil(val * 100),
    percent: val
  } as completeValue
  
  
  return values
}















// export function pointMaxMove(e: MouseEvent, props: properties) {
//   const v = props.isVertical
//   const shift = v ? props.shiftY : props.shiftX
//   const client = v ? 'clientY' : 'clientX'
//   const sliderXY = v ? props.sliderY : props.sliderX
//   const sliderWH = v ? props.sliderHeight : props.sliderWidth
//   const positionMin = v ? props.positionMinV : props.positionMin
  
//   let val: number = props.event[client] - sliderXY - shift  
//   val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

//   const onePercent = sliderWH / 100
//   if (props.isRange == true) val = val >= (positionMin * sliderWH) + onePercent // Проверка если больше чем pointMax
//   ? (positionMin * sliderWH) + onePercent : val

//   val = props.step === 0 ?  val : Math.round(val / props.stepSize) * props.stepSize
//   val = val / sliderWH
//   let values: completeValue

//   values = {
//     valueFromPos: val * props.sliderWidth,
//     valueFromHTML: Math.ceil(val * 100)
//   } as completeValue
  
//   return values
// }
