import { SliderComponent } from "../core/SliderComponents";

export class LabelMax extends SliderComponent{
  static className = 'label-max'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  init() {
    super.init()
    this.$root.html(this.prop.rangeEndPercent)
  }

  toHTML() {
    return ''
  }

  makeChange(prop, val) {
    if (prop === 'isRange') val == 1 ? this.$root.addClass('visible') : this.$root.removeClass('visible')
    if (prop === 'isLabel' && this.prop.isRange == 1) val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
    this.$root.html(Math.floor(this.prop.positionMax * this.prop.sliderSize) + this.prop.sliderStart) 
    this.$root.left(this.prop.positionMax * this.prop.slider.width) 
  }
}