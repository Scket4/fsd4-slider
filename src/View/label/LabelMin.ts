import { Dom } from "../../core/dom";
import { completeValue } from "../../core/globals";
import { Observer } from "../../core/Observer";
import { SliderComponent } from "../../core/SliderComponents";

export class LabelMin extends SliderComponent{
  static className = 'label-min'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  init() {
    this.emitter.subscribe('settingsToLabel', () => this.hideLabel())
  }

  hideLabel() {
    this.$root.toggle('hidden')
  }

  getData() {}

  pointMinChange(values: completeValue) {
    this.$root.left(values.position)
    this.$root.html(values.value.toString())
  }

  // changeData(val: completeValue) {    
  //   this.$root.left(val.valueFromPos)
  //   this.$root.html(val.valueFromHTML.toString())
  // }

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