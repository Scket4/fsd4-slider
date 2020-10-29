import { SliderComponent } from "../core/SliderComponents";

export class TrackSelect extends SliderComponent {
  static className = 'track__select'
  constructor(emitter, $root) {
    super(emitter, $root)
  }

  toHTML() {
    return ''
  }
}