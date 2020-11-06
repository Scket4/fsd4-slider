import { SliderComponent } from "../core/SliderComponents";

export class LabelMin extends SliderComponent{
  static className = 'label-min'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  init() {
    super.init()
  }

  toHTML() {
    return '0'
  }

  makeChange(prop, val) {
    this.$root.html(Math.floor(this.prop.positionMin * this.prop.sliderSize) + this.prop.sliderStart) 
    this.$root.left(this.prop.positionMin * this.prop.slider.width)
    if (prop === 'isLabel') val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
  }
}