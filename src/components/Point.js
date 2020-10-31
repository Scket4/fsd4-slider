import { SliderComponent } from "../core/SliderComponents";

export class Point extends SliderComponent {
  static className = 'track__point'
  constructor(emitter, $root) {
    super(emitter, $root, {
      name: 'Point',
      listeners: ['mousedown', 'mouseup']
    })
    this.percent = 0
  }
  
  toHTML() {
    return ''
  }

  init() {
    super.init()
    console.log(this.point = this);
  }

  onMousedown(e) {
    const position = e.screenX

    document.onmousemove = e => {
      let currentPosition = e.screenX
      let selectWidth = currentPosition - position
      let selectPercent = selectWidth / 500 * 100 + this.percent
      selectPercent = selectPercent > 100 ? 100 : selectPercent < 0 ? 0 : selectPercent

      this.$root.left(selectPercent)
      this.emitter.trigger('pointToComponents: mousemove', selectPercent)

      document.onmouseup = () => {
        this.emitter.trigger('pointToView: mouseup', selectPercent)
        document.onmousemove = null
        this.percent = selectPercent
      }
    }     
  }

  onMouseup() {
    document.onmousemove = null
  }
}