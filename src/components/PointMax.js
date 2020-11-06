import { SliderComponent } from "../core/SliderComponents"

export class PointMax extends SliderComponent {
  static className = 'range__point'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'RangePoint',
      // listeners: ['mousedown', 'mouseup']
    }, values)
    this.percent = 0
  }

  init() {
    super.init()
    this.prop.rangeEndPosition = this.prop.rangeEndPositionLabel  =this.$root.getCoordsX() + 12.5
  }

  // makeChange() {
  //   if (this.prop.isRange) {
  //     this.$root.addClass('visible')
  //   } else {
  //     this.$root.removeClass('visible')
  //   }
  //   this.$root.left(this.prop.rangeEndPercent)
  // }

  // onMousedown(e) {
  //   const shift = e.screenX - this.prop.rangeEndPosition
  //   this.percent = this.prop.rangeEndPercent
  //   let mousedown = true

  //   document.onmousemove = e => {
  //     let currentPosition = e.screenX
  //     let selectWidth = currentPosition - this.prop.rangeEndPosition - shift
  //     let selectPercent = selectWidth / this.prop.sliderWidth * 100 + this.percent
  //     selectPercent = selectPercent > 100 ? 100 : selectPercent < 0 ? 0 : selectPercent
  //     selectPercent = selectPercent <= (this.prop.percent +1) ? this.prop.percent + 1 : selectPercent

  //     this.emitter.trigger('viewToPresenter', {rangeEndPercent: selectPercent})
  //     this.prop.rangeEndPositionLabel = currentPosition

  //     document.onmouseup = () => {
  //       if (mousedown) {
  //       this.percent = selectPercent
  //       this.prop.rangeEndPosition = currentPosition
  //       document.onmousemove = null
  //       mousedown = false
  //       }
  //     }
  //   }
  // }

  onMouseup() {
    document.onmousemove = null
  }

    
  toHTML() {
    return ''
  }
}