import { SliderComponent } from "../core/SliderComponents";

export class Label extends SliderComponent{
  static className = 'up-point'
  constructor(emitter, $root) {
    super(emitter, $root)
  }

  sub() {
    this.emitter.subscribe('1', () => console.log('lol'))
  }

  init() {
    super.init()
    this.emitter.subscribe('pointToComponents: mousemove', pos => this.$root.left(pos))
    this.emitter.subscribe('pointToComponents: mousemove', pos => this.$root.html(Math.floor(pos)))
  }

  toHTML() {
    return ''
  }
}