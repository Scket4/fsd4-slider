import { SliderComponent } from "../core/SliderComponents";

export class ProgressBar extends SliderComponent {
  static className = 'progress-bar'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('progress-barV')
    this.$root.width(0)
  }

  initHorizontal() {
    super.initHorizontal()
    this.$root.addClass('progress-bar')
    this.$root.left(12.5)
    this.$root.width(0)
  }

  init() {
    super.init()
    if (this.prop.isRange) {
      this.$root.left(this.prop.percent)
      this.$root.width((this.prop.rangeEndPosition - this.prop.rangeStartPosition) / this.prop.sliderWidth * 100)
    }
  }

  makeChange() {
    const v = this.prop.isVertical
    if (this.prop.isRange == 1 ) {
      if (v) {
        this.$root.top(this.prop.positionMinV * this.prop.slider.height)  
        this.$root.height((this.prop.positionMaxV * this.prop.slider.height) - (this.prop.positionMinV * this.prop.slider.height))
        this.$root.width(3)
        this.$root.left(12.5)
      } else {
        this.$root.left(this.prop.positionMin * this.prop.slider.width)
        this.$root.width((this.prop.positionMax * this.prop.slider.width) - (this.prop.positionMin * this.prop.slider.width))
        this.$root.height(3) 
      }
    } 
    if (this.prop.isRange == 0) {
      if (v) {
        console.log('ok');
        this.$root.height(this.prop.positionMinV * this.prop.slider.height)
        this.$root.top(12)
        this.$root.width(3)
        this.$root.left(12.5)
      } else { 
        this.$root.width(this.prop.positionMin * this.prop.slider.width)
        this.$root.height(3)
      }
      
    }
  }
}