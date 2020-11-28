import { Dom } from "../core/dom";
import { completeValue, presenterProperties } from "../core/globals";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class ProgressBar extends SliderComponent {
  static className = 'progress-bar'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
  }

  vertical() {
    this.$root.toggle('progress-barV')
    this.$root.top(12.5)
    this.$root.width(3)
    this.$root.height(3)
    this.$root.left(12.5)
  }

  setValues(values: presenterProperties) {
    if (values.isRange) {
      if (values.isVertical) {
         this.$root.$el.style.height = '100%' 
         this.$root.width(3)
      } else { 
        this.$root.$el.style.width = '100%'
      }
    }
  }

  pointMinChange(values: completeValue) {
    if (values.isRange) {

      if (!values.isVertical) {
        this.$root.left(values.position)
        this.$root.width(values.maxPos - values.minPos)
      } else {
        this.$root.top(values.minPos + 12.5)
        this.$root.height(values.maxPos - values.minPos)
      }

    } else if (!values.isRange) {

      if (values.isVertical) {
        this.$root.top(12.5)
        this.$root.height(values.minPos + 12.5)
      } else {
        console.log(values.isVertical)
        this.$root.left(0)
        this.$root.width(values.position)
      }
    }
  }

  pointMaxChange(values: completeValue) {
    if (values.isRange) {

      if (!values.isVertical) {
        this.$root.left(values.minPos + 12.5)
        this.$root.width(values.maxPos - values.minPos)
      } else {
        this.$root.top(values.minPos + 12.5)
        this.$root.height(values.maxPos - values.minPos)
      }

    } else if (!values.isRange) {

      if (values.isVertical) {
        this.$root.top(12.5)
        this.$root.height(values.minPos + 12.5)
      } else {
        this.$root.left(0)
        this.$root.width(values.minPos + 12.5)
      }
    }
  }

  getData() {}

 
}