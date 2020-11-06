import { SliderComponent } from "../core/SliderComponents";

export class PointMin extends SliderComponent {
  static className = 'track__point'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'Point',
      listeners: ['mousedown']
    }, values)
  }


  init() {
    super.init()
    this.prop.pointMinX = this.$root.$el.getBoundingClientRect().x + 12.5
  }

  setProperties(prop, val) {
    this.prop[`${prop}`] = +val
    if (prop === 'sliderStart' || prop === 'sliderEnd')  this.prop.sliderSize = this.prop.sliderEnd - this.prop.sliderStart
  }

  makeChange() {
    this.$root.left(this.prop.positionMin * this.prop.slider.width)
    this.prop.pointMinX = this.$root.$el.getBoundingClientRect().x + 12.5
  }

  onMousedown(e) {
    const shift = e.clientX - this.prop.pointMinX

    document.onmousemove = e => {
      let left = e.clientX - this.prop.slider.x - shift
      left = left > this.prop.slider.width ? this.prop.slider.width : left < 0 ? 0 : left

      this.emitter.trigger('viewToPresenter', {positionMin: left / this.prop.slider.width})

      document.onmouseup = () => {
        document.onMousedown = null
        document.onmousemove = null
        }
      }
  }
    
  toHTML() {
    return ''
  }
}