import { SliderComponent } from "../core/SliderComponents";

export class TrackSelect extends SliderComponent {
  static className = 'track__select'
  constructor(emitter, $root) {
    super(emitter, $root)
  }

  toHTML() {
    return ''
  }

  init() {
    super.init()
    this.emitter.subscribe('pointToComponents: mousemove', pos => this.$root.width(pos))
  }
}