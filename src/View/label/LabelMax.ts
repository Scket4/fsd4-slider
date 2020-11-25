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

  vertical() {
    this.$root.toggle('label-maxV')
  }


  init() {
    this.emitter.subscribe('settingsToLabel', () => this.hideLabel())
    this.emitter.subscribe('rangeComponentsToView', () => this.range())
  }

  range() {
    this.$root.toggle('visible')
  }

  hideLabel() {
    this.$root.toggle('hidden')
  }
  
  pointMaxChange(values: completeValue) {
    this.$root.html(values.value.toString())
    if (!values.isVertical) {
      this.$root.left(values.position)
    } else {
      this.$root.top(values.position)
    }
  }

  toHTML() {
    return '100'
  }

}