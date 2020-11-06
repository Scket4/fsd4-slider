import { SliderComponent } from "../core/SliderComponents";

export class ProgressBar extends SliderComponent {
  static className = 'progress-bar'
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
    if (this.prop.isRange == 1 ) {
      this.$root.left(this.prop.positionMin * this.prop.slider.width)
      this.$root.width((this.prop.positionMax * this.prop.slider.width) - (this.prop.positionMin * this.prop.slider.width))
    } else {
      this.$root.left(12.5)
      this.$root.width(this.prop.positionMin * this.prop.slider.width)
      
    }
  }
}