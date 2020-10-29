import { SliderComponent } from "../core/SliderComponents";

export class Point extends SliderComponent {
  static className = 'track__point'
  constructor(emitter, $root) {
    super(emitter, $root)
  }
  
  toHTML() {
    return ''
  }

  sub() {
    this.emitter.subscribe('2', () => console.log('ok'))
  }
}