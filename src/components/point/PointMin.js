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

  initHorizontal() {
    super.initHorizontal()
    this.$root.addClass('point-min')
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('point-minV')
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
      this.prop.stepSize = this.prop.isVertical ? 
      this.prop.slider.height / this.prop.stepsValue
      : this.prop.slider.width / this.prop.stepsValue
    }
  }

  makeChange() {
    this.prop.isVertical ? this.$root.top(this.prop.positionMinV * this.prop.slider.height) 
    : this.$root.left(this.prop.positionMin * this.prop.slider.width) 
  }

  onMousedown(e) {
    this.prop.pointMinX = this.$root.$el.getBoundingClientRect().x + 12.5
    this.prop.pointMinY = this.$root.$el.getBoundingClientRect().y + 12.5
    const v = this.prop.isVertical
    const client = v ? 'clientY' : 'clientX'
    const sliderXY = v ? this.prop.slider.y : this.prop.slider.x
    const pointMinXY = v ? this.prop.pointMinY + pageYOffset : this.prop.pointMinX
    const sliderWH = v ? this.prop.slider.height : this.prop.slider.width
    const positionMax = v ? this.prop.positionMaxV : this.prop.positionMax
    const position = v ? 'positionMinV' : 'positionMin'

    const shift = e[client] - pointMinXY
    document.onmousemove = e => {
      let val = e[client] - sliderXY - shift
      val = val > sliderWH ? sliderWH : val < 0 ? 0 : val

      const onePercent = sliderWH / 100
      if (this.prop.isRange == 1) val = val >= (positionMax * sliderWH) - onePercent // Проверка если больше чем pointMax
      ? (positionMax * sliderWH) - onePercent : val

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