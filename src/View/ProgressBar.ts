import { Dom } from "../core/dom";
import { completeValue } from "../core/globals";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class ProgressBar extends SliderComponent {
  static className = 'progress-bar'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  vertical() {
    this.$root.toggle('progress-barV')
  }

  pointMinChange(values: completeValue) {
    if (!values.isVertical) {
      this.$root.width(values.position)
    } else {
      this.$root.height(values.position)
    }
  }

  pointMaxChange(values: completeValue) {
   if (values.isRange) {      
      this.$root.width(values.maxPos - values.minPos)
    } else {
      this.pointMinChange(values)
    }
  }

  getData() {}

 
}