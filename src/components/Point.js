import { SliderComponent } from "../core/SliderComponents";

export class Point extends SliderComponent {
  static className = 'track__point'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'Point',
      listeners: ['mousedown', 'mouseup']
    }, values)
    this.percent = 0
  }


  init() {
    super.init()
    this.prop.pointPosition = this.$root.getCoordsX() + 12.5
  }

  setProperties(prop, val) {
    this.prop[`${prop}`] = +val
  }

  makeChange() {
    this.$root.left(this.prop.percent)
  }

  onMousedown(e) {
    const shift = e.screenX - this.prop.pointPosition
    this.percent = this.prop.percent

    document.onmousemove = e => {
      let currentPosition = e.screenX
      let selectWidth = currentPosition - this.prop.pointPosition - shift
      let selectPercent = selectWidth / this.prop.sliderWidth * 100 + this.percent
      selectPercent = selectPercent > 100 ? 100 : selectPercent < 0 ? 0 : selectPercent

      this.emitter.trigger('viewToPresenter', {percent: selectPercent})

      document.onmouseup = () => {
        this.percent = selectPercent
        this.prop.percent = selectPercent
        this.prop.pointPosition = currentPosition
        document.onmousemove = null
      }
    }
  }

  onMouseup() {
    document.onmousemove = null
  }

    
  toHTML() {
    return ''
  }
}