import { Dom } from "../../core/dom";
import { completeValue } from "../../core/globals";
import { Observer } from "../../core/Observer";
import { SliderComponent } from "../../core/SliderComponents";

export class LabelMax extends SliderComponent{
  static className = 'label-max'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  
  getData() {}


  init() {
    this.emitter.subscribe('settingsToLabel', () => this.hideLabel())
  }

  hideLabel() {
    this.$root.toggle('hidden')
  }
  
  pointMaxChange(values: completeValue) {
    this.$root.left(values.position)
    this.$root.html(values.value.toString())
  }

  
}