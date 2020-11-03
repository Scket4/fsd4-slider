import { SliderComponent } from "../core/SliderComponents";

export class Label extends SliderComponent{
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
    this.$root.left(this.prop.percent)
    const val = Math.floor(this.prop.percent / 100 * this.prop.sliderEnd)
    this.$root.html(val)
    if (!this.prop.isLabel) {
      this.$root.addClass('hiden')
    } else {
      this.$root.removeClass('hiden')
    }
  }
}