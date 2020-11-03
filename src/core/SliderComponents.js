import { DomListener } from "./DomListener";

export class SliderComponent extends DomListener {
  constructor(emitter, $root, options = {}, prop) {
    super($root, options.listeners)
    this.emitter  = emitter
    this.prop = prop
    
  }
  toHTML() {
    return ''
  }
  init() {
    this.initDOMListeners()
  }
}