import { DomListener } from "./DomListener";

export class SliderComponent extends DomListener {
  constructor(emitter, $root) {
    super($root)
    this.emitter  = emitter
  }
  toHTML() {
    return ''
  }
}