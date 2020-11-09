import { SliderComponent } from "../../core/SliderComponents"

export class PointMax extends SliderComponent {
  static className = 'point-max'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'RangePoint',
      listeners: ['mousedown', 'mouseup', 'touchstart']
    }, values)
    this.percent = 0
  }

  init() {
    super.init()
    this.prop.pointMaxX = this.$root.$el.getBoundingClientRect().x + 12.5
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('point-maxV')
    this.prop.pointMaxY = this.$root.$el.getBoundingClientRect().y + 12.5
  }

  makeChange(prop, val) {
    if (prop === 'isRange') val == 1 ? this.$root.addClass('visible') : this.$root.removeClass('visible')
    if (this.prop.isRange == 1) {
      this.prop.isVertical ? this.$root.top(this.prop.positionMaxV * this.prop.slider.height) : this.$root.left(this.prop.positionMax * this.prop.slider.width)
    }
    this.prop.pointMaxX = this.$root.$el.getBoundingClientRect().x + 12.5
    this.prop.pointMaxY = this.$root.$el.getBoundingClientRect().y + 12.5

  }

  
  onMousedown(e) {
    const v = this.prop.isVertical
    const client = v ? 'clientY' : 'clientX'
    const sliderXY = v ? this.prop.slider.y : this.prop.slider.x
    const pointMaxXY = v ? this.prop.pointMaxY : this.prop.pointMaxX
    const sliderWH = v ? this.prop.slider.height : this.prop.slider.width
    const positionMinXY = v ? this.prop.positionMinY : this.prop.positionMinX
    const position = v ? 'positionMaxV' : 'positionMax'

    const shift = e[client] - pointMaxXY
    document.onmousemove = e => {
      let val = e[client] - sliderXY - shift
      val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

      const onePercent = sliderWH / 100
      if (this.prop.isRange == 1) val = val >= (positionMinXY * sliderWH) - onePercent // Проверка если больше чем pointMax
      ? (positionMinXY * sliderWH) - onePercent : val

      val = this.prop.step == 0 ?  val : Math.round(val / this.prop.stepSize) * this.prop.stepSize

      this.emitter.trigger('viewToPresenter', {[position]: val / sliderWH})
    }
    document.onmouseup = () => {
      document.onmousedown = null
      document.onmousemove = null
    }
  }

  onMouseup() {
    document.onmousemove = null
  }

  onTouchstart(e) {

  }

}