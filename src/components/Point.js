import { SliderComponent } from "../core/SliderComponents";

export class Point extends SliderComponent {
  static className = 'track__point'
  constructor(emitter, $root) {
    super(emitter, $root, {
      name: 'Point',
      listeners: ['click', 'mousemove', 'mousedown']
    })
  }
  
  toHTML() {
    return ''
  }

  onClick(event) {
    console.log(event);
  }

  onMousemove(event) {
    console.log(event);
  }
}