import { DomListener } from "./DomListener";

export class SliderComponent extends DomListener {
  constructor(emitter, $root, options = {}) {
    super($root, options.listeners)
    this.emitter  = emitter
  }
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}