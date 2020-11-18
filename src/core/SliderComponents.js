import { DomListener } from "./DomListener";

export class SliderComponent {
  constructor(emitter, $root, prop) {
    this.emitter  = emitter
    this.prop = prop
    this.$root = $root
    this.domListener = new DomListener($root)
    
  }
  toHTML() {
    return ''
  }
  init() {
    // this.initDOMListeners()
  }

  initVertical() {
    this.$root.$el.className = ''
    this.$root.$el.style = ''
  }

  initHorizontal() {
    this.$root.$el.className = ''
    this.$root.$el.style = ''
  }

  getData() {}
}