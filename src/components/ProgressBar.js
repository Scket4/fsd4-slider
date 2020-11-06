import { SliderComponent } from "../core/SliderComponents";

export class ProgressBar extends SliderComponent {
  static className = 'track__select'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  toHTML() {
    return ''
  }

  init() {
    super.init()
    if (this.prop.isRange) {
      this.$root.left(this.prop.percent)
      this.$root.width((this.prop.rangeEndPosition - this.prop.rangeStartPosition) / this.prop.sliderWidth * 100)
    }
  }

  makeChange() {
    this.$root.width(this.prop.positionMin * 100)
  }
}