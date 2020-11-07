import { SliderComponent } from "../core/SliderComponents";

export class PointMin extends SliderComponent {
  static className = 'point-min'
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
    if (prop === 'sliderStart' || prop === 'sliderEnd' || prop === 'step')  {
      this.prop.sliderSize = this.prop.sliderEnd - this.prop.sliderStart
      this.prop.stepsValue = this.prop.sliderSize / this.prop.step
      this.prop.stepSize = this.prop.slider.width / this.prop.stepsValue
    }
  }

  makeChange() {
    this.$root.left(this.prop.positionMin * this.prop.slider.width) 
    this.prop.pointMinX = this.$root.$el.getBoundingClientRect().x + 12.5
  }

  // onTouchstart(e) {
  //   const shift = e.changedTouches[0].clientX - this.prop.pointMinX
  //   e.preventDefault()

  //   document.ontouchmove = e => {
  //     let left = e.changedTouches[0].clientX - this.prop.slider.x - shift
  //     left = left > this.prop.slider.width ? this.prop.slider.width : left < 0 ? 0 : left
      

  //     const onePercent = this.prop.slider.width / 100
  //     if (this.prop.isRange == 1) left = left >= (this.prop.positionMax * this.prop.slider.width) - onePercent // Проверка если больше чем pointMax
  //     ? (this.prop.positionMax * this.prop.slider.width) - onePercent : left

  //     this.emitter.trigger('viewToPresenter', {positionMin: left / this.prop.slider.width})

  //     document.ontouchend = () => {
  //       document.onMousedown = null
  //       document.onmousemove = null
  //       }
  //     }
  // }

  onMousedown(e) {
    const shift = e.clientX - this.prop.pointMinX
    if (e.type === 'touchstart') alert('ok')

    document.onmousemove = e => {
      let left = e.clientX - this.prop.slider.x - shift
      left = left > this.prop.slider.width ? this.prop.slider.width : left < 0 ? 0 : left

      let newLeft =  this.prop.step == 0 ?  left : Math.round(left / this.prop.stepSize) * this.prop.stepSize

      const onePercent = this.prop.slider.width / 100
      if (this.prop.isRange == 1) left = left >= (this.prop.positionMax * this.prop.slider.width) - onePercent // Проверка если больше чем pointMax
      ? (this.prop.positionMax * this.prop.slider.width) - onePercent : left

      this.emitter.trigger('viewToPresenter', {positionMin: newLeft / this.prop.slider.width})

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