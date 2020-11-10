import { SliderComponent } from "../../core/SliderComponents";

export class LabelMax extends SliderComponent{
  static className = 'label-max'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  init() {
    super.init()
    this.$root.html(this.prop.rangeEndPercent)
  }

  initHorizontal() {
    super.initHorizontal()
    this.$root.addClass('label-max')
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('label-maxV')
    this.$root.removeClass('visible')
  }

  makeChange(prop, val) {
    if (prop === 'isRange') val == 1 ? this.$root.addClass('visible') : this.$root.removeClass('visible')
    if (prop === 'isLabel' && this.prop.isRange == 1) val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
    const v = this.prop.isVertical
    this.$root.html(Math.floor((v ? this.prop.positionMaxV : this.prop.positionMax) * this.prop.sliderSize)
      + this.prop.sliderStart)

      if (v) { 
        this.$root.top(this.prop.positionMaxV * this.prop.slider.height - 2)
      } else {
        this.$root.left(this.prop.positionMax * this.prop.slider.width)
      }
  }
}