import { SliderComponent } from "../../core/SliderComponents";

export class PointMin extends SliderComponent {
  static className = 'point-min'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'Point',
      listeners: ['mousedown', 'touchstart']
    }, values)
  }


  init() {
    super.init()
    this.prop.pointMinX = this.$root.$el.getBoundingClientRect().x + 12.5
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('point-minV')
    this.prop.pointMinY = this.$root.$el.getBoundingClientRect().y + 12.5
  }

  setProperties(prop, val) {
    if (prop === 'isVertical') {
     this.prop.setDefaults()
     this.emitter.trigger('viewToPresenter', {positionMin: 0, positionMinV: 0})
    }
    this.prop[`${prop}`] = +val
    if (prop === 'sliderStart' || prop === 'sliderEnd' || prop === 'step')  {
      this.prop.sliderSize = this.prop.sliderEnd - this.prop.sliderStart
      this.prop.stepsValue = this.prop.sliderSize / this.prop.step
      this.prop.stepSize = this.prop.slider.width / this.prop.stepsValue
    }
  }

  makeChange() {
    this.prop.isVertical ? this.$root.top(this.prop.positionMinV * this.prop.slider.height) 
    : this.$root.left(this.prop.positionMin * this.prop.slider.width) 

    this.prop.pointMinX = this.$root.$el.getBoundingClientRect().x + 12.5
    this.prop.pointMinY = this.$root.$el.getBoundingClientRect().y + 12.5
  }

  onMousedown(e) {
    const v = this.prop.isVertical
    const client = v ? 'clientY' : 'clientX'
    const sliderXY = v ? this.prop.slider.y : this.prop.slider.x
    const pointMinXY = v ? this.prop.pointMinY : this.prop.pointMinX
    const sliderWH = v ? this.prop.slider.height : this.prop.slider.width
    const positionMaxXY = v ? this.prop.positionMaxY : this.prop.positionMaxX
    const position = v ? 'positionMinV' : 'positionMin'

    const shift = e[client] - pointMinXY
    console.log(e[client], pointMinXY)
    document.onmousemove = e => {
      let val = e[client] - sliderXY - shift
      val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

      const onePercent = sliderWH / 100
      if (this.prop.isRange == 1) val = val >= (positionMaxXY * sliderWH) - onePercent // Проверка если больше чем pointMax
      ? (positionMaxXY * sliderWH) - onePercent : val

      val = this.prop.step == 0 ?  val : Math.round(val / this.prop.stepSize) * this.prop.stepSize

      this.emitter.trigger('viewToPresenter', {[position]: val / sliderWH})
    }
    document.onmouseup = () => {
      document.onmousedown = null
      document.onmousemove = null
    }
  }

  onTouchstart() {
  }

  
  onMouseup() {
    this.onmousedown = null
  }
}