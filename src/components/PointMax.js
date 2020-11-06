import { SliderComponent } from "../core/SliderComponents"

export class PointMax extends SliderComponent {
  static className = 'point-max'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'RangePoint',
      listeners: ['mousedown', 'mouseup', 'touchstart']
    }, values)
    this.percent = 0
  }

  init() {
    super.init()
    this.prop.pointMaxX = this.$root.$el.getBoundingClientRect().x + 12.5
  }

  makeChange(prop, val) {
    if (prop === 'isRange') val == 1 ? this.$root.addClass('visible') : this.$root.removeClass('visible')
    if (this.prop.isRange == 1) {
      this.$root.left(this.prop.positionMax * this.prop.slider.width)
      this.prop.pointMaxX = this.$root.$el.getBoundingClientRect().x + 12.5
    }
  }

  onTouchstart(e) {
    const shift = e.changedTouches[0].clientX - this.prop.pointMaxX
    e.preventDefault()

    document.ontouchmove = e => {
      let left = e.changedTouches[0].clientX - this.prop.slider.x - shift

      const onePercent = this.prop.slider.width / 100

      left = left > this.prop.slider.width  // Больше Макс или меньше поинта мин?
      ? this.prop.slider.width : left <= (this.prop.positionMin * this.prop.slider.width) + onePercent
      ? (this.prop.positionMin * this.prop.slider.width) + onePercent : left


      this.emitter.trigger('viewToPresenter', {positionMax: left / this.prop.slider.width})


      document.ontouchend = () => {
        document.onMousedown = null
        document.onmousemove = null
        }
      }
  }

  onMousedown(e) {
    const shift = e.clientX - this.prop.pointMaxX

    document.onmousemove = e => {
      let left = e.clientX - this.prop.slider.x - shift

      const onePercent = this.prop.slider.width / 100

      left = left > this.prop.slider.width  // Больше Макс или меньше поинта мин?
      ? this.prop.slider.width : left <= (this.prop.positionMin * this.prop.slider.width) + onePercent
      ? (this.prop.positionMin * this.prop.slider.width) + onePercent : left


      this.emitter.trigger('viewToPresenter', {positionMax: left / this.prop.slider.width})

      document.onmouseup = () => {
        document.onMousedown = null
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