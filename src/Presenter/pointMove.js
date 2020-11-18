import { ListFormat } from "typescript"

export function mouseMovePoint(props= {}) {
  const v = props.isVertical
  const client = v ? 'clientY' : 'clientX'
  const sliderXY = v ? props.sliderY : props.sliderX
  const pointMinXY = v ? props.pointMinY + pageYOffset : props.pointMinX
  const sliderWH = v ? props.sliderHeight : props.sliderWidth
  const positionMax = v ? props.positionMaxV : props.positionMax

  const shift = props.event[client] - pointMinXY
  
  let val = props.event[client] - sliderXY - shift
  
  val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

  const onePercent = sliderWH / 100
  if (props.isRange == 1) val = val >= (positionMax * sliderWH) - onePercent // Проверка если больше чем pointMax
  ? (positionMax * sliderWH) - onePercent : val

  val = props.step == 0 ?  val : Math.round(val / props.stepSize) * props.stepSize
  console.log(val);

  return val / props.sliderWH
  
}

