import { ListFormat } from "typescript"
import { completeValue, properties } from "../core/globals"

export function mouseMovePoint(props: properties) {
  const v = props.isVertical
  const shift = v ? props.shiftY : props.shiftX
  const client = v ? 'clientY' : 'clientX'
  const sliderXY = v ? props.sliderY : props.sliderX
  // const pointMinXY = v ? props.pointMinY + pageYOffset : props.pointMinX
  const sliderWH = v ? props.sliderHeight : props.sliderWidth
  const positionMax = v ? props.positionMaxV : props.positionMax
  
  let val: number = props.event[client] - sliderXY - shift  
  val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

  const onePercent = sliderWH / 100
  if (props.isRange == true) val = val >= (positionMax * sliderWH) - onePercent // Проверка если больше чем pointMax
  ? (positionMax * sliderWH) - onePercent : val

  val = props.step === 0 ?  val : Math.round(val / props.stepSize) * props.stepSize
  val = val / sliderWH
  let values: completeValue

    values = {
    valueFromPos: val * props.sliderWidth,
    valueFromHTML: val * 100
  } as completeValue
  
  return values
}
