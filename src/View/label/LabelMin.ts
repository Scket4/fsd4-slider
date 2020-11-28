import { Dom } from "../../core/dom";
import { completeValue } from "../../core/globals";
import { Observer } from "../../core/Observer";
import { SliderComponent } from "../../core/SliderComponents";

export class LabelMin extends SliderComponent{
  static className = 'label-min'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  vertical() {
    this.$root.toggle('label-minV')
    if (this.$root.hasSelector('label-minV')) {
      this.$root.left(-30)
      this.$root.top(0)
    } else {
      this.$root.top(-35)
      this.$root.left(0)
    }
    this.$root.html('0')
  }

  init() {
    this.emitter.subscribe('settingsToLabel', () => this.hideLabel())
  }

  hideLabel() {
    this.$root.toggle('hidden')
  }

  getData() {}

  pointMinChange(values: completeValue) {
    this.$root.html(values.value.toString())
    if (!values.isVertical) {
      this.$root.left(values.position)
    } else {
      this.$root.top(values.position)
    }
  }


  toHTML() {
    return '0'
  }
}