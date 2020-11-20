import { Dom } from "../core/dom";
import { completeValue } from "../core/globals";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class ProgressBar extends SliderComponent {
  static className = 'progress-bar'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  pointMinChange(values: completeValue) {
    this.$root.width(values.position)
  }

  getData() {}

 
}