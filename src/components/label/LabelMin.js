import { SliderComponent } from "../../core/SliderComponents";

export class LabelMin extends SliderComponent{
  static className = 'label-min'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('label-minV')
  }

  makeChange(prop, val) {
    const v = this.prop.isVertical
    this.$root.html(Math.floor((v ? this.prop.positionMinV : this.prop.positionMin) * this.prop.sliderSize)
      + this.prop.sliderStart)

    v ? this.$root.top(this.prop.positionMinV * this.prop.slider.height - 2)
    : this.$root.left(this.prop.positionMin * this.prop.slider.width)
    if (prop === 'isLabel') val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
  }

  toHTML() {
    return '0'
  }
}