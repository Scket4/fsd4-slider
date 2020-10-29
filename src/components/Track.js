import { SliderComponent } from "../core/SliderComponents";

export class Track extends SliderComponent {
  static className = 'track'
  constructor(emitter, $root) {
    super(emitter, $root)
  }
  
  toHTML() {
    return ''
    
  }
}