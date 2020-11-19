import { Dom } from "../../core/dom";
import { Observer } from "../../core/Observer";
import { SliderComponent } from "../../core/SliderComponents";

export class LabelMin extends SliderComponent{
  static className = 'label-min'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  getData() {}

  changeData(val: number) {    
    this.$root.left(val)
  }

  // initVertical() {
  //   super.initVertical()
  //   this.$root.addClass('label-minV')
  // }

  // initHorizontal() {
  //   super.initHorizontal()
  //   this.$root.addClass('label-min')
  // }

  // makeChange(prop, val) {
  //   const v = this.prop.isVertical
  //   this.$root.html(Math.floor((v ? this.prop.positionMinV : this.prop.positionMin) * this.prop.sliderSize)
  //     + this.prop.sliderStart)

  //   if (v) { 
  //     this.$root.top(this.prop.positionMinV * this.prop.slider.height - 2)
  //   } else {
  //     this.$root.left(this.prop.positionMin * this.prop.slider.width)
  //   }
  //   if (prop === 'isLabel') val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
  // }

  toHTML() {
    return '0'
  }
}