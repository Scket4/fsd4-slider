import { SliderComponent } from "../core/SliderComponents";

export class Scale extends SliderComponent {
  static className = 'slider__scale'
  constructor(emitter, $root) {
    super(emitter, $root)
  }
  
  toHTML() {
    return ''
  }
}