import { SliderComponent } from "../core/SliderComponents";

export class TrackSelect extends SliderComponent {
  static className = 'track__select'
  constructor(emitter, $root, values) {
    super(emitter, $root, {}, values)
  }

  toHTML() {
    return ''
  }

  init() {
    super.init()
  }

  makeChange() {
    this.$root.width(this.prop.percent)
  }
}