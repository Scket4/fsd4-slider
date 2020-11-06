import { SliderComponent } from "../core/SliderComponents";

export class LabelMin extends SliderComponent{
  static className = 'up-point'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  init() {
    super.init()
  }

  toHTML() {
    return ''
  }

  makeChange() {
    this.$root.html(Math.floor(this.prop.positionMin * this.prop.sliderSize) + this.prop.sliderStart) 
    this.$root.left(this.prop.positionMin * this.prop.slider.width)
  }
}