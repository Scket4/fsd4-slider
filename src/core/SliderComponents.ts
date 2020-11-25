import { Dom } from "./dom";
import { DomListener } from "./DomListener";
import { Observer } from "./Observer";

export class SliderComponent {
  domListener: DomListener
  emitter: Observer
  $root: Dom
  constructor(emitter: Observer, $root: Dom) {
    this.emitter  = emitter
    this.domListener = new DomListener($root)
    this.$root = $root
  }
  toHTML() {
    return ''
  }
  init() { }

  vertical() {}

  // getData() {}
}