import { Dom } from "../../core/dom"
import { properties } from "../../core/globals"
import { Observer } from "../../core/Observer"
import { SliderComponent } from "../../core/SliderComponents"

export class PointMax extends SliderComponent {
  static className = 'point-max'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('mousedown', (e) => this.onMousedown(e as MouseEvent))
    this.domListener.on('mouseup', () => this.onMouseup())
  }

  // initHorizontal() {
  //   super.initHorizontal()
  //   this.$root.addClass('point-max')
  // }

  // initVertical() {
  //   super.initVertical()
  //   this.$root.addClass('point-maxV')
  //   this.$root.removeClass('visible')
  // }

  // makeChange(prop, val) {
  //   if (prop === 'isRange') val == 1 ? this.$root.addClass('visible') : this.$root.removeClass('visible')
  //   if (this.prop.isRange == 1) {
  //     this.prop.isVertical ? this.$root.top(this.prop.positionMaxV * this.prop.slider.height) : this.$root.left(this.prop.positionMax * this.prop.slider.width)
  //   }

  getData(props: properties) {
    props.pointMaxY = this.$root.$el.getBoundingClientRect().y
    props.pointMaxX = this.$root.$el.getBoundingClientRect().x
  }

  
  onMousedown(e: MouseEvent) {
    this.emitter.trigger('componentsToView: pointMove', e)
    document.onmousemove = e => {
      this.emitter.trigger('componentsToView: pointMove', e)
    }
    document.onmouseup = () => {
      document.onmousedown = null
      document.onmousemove = null
    }
  }

  onMouseup() {
    document.onmousemove = null
  }
}