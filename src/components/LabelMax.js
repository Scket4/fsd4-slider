import { SliderComponent } from "../core/SliderComponents";

export class LabelMax extends SliderComponent{
  static className = 'range-label'
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

  makeChange() {
    if (this.prop.isRange) {
      this.$root.addClass('visible')
    } else {
      this.$root.removeClass('visible')
    }
    this.$root.left(this.prop.rangeEndPercent)
    const val = Math.floor(this.prop.rangeEndPercent / 100 * (this.prop.sliderEnd - this.prop.sliderStart)) + this.prop.sliderStart
    this.$root.html(val)
    if (!this.prop.isLabel) {
      this.$root.addClass('hiden')
    } else {
      this.$root.removeClass('hiden')
    }
  }
}