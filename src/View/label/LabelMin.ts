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


  toHTML() {
    return '0'
  }
}