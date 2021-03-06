import { Dom } from "../../core/dom"
import { completeValue, presenterProperties, properties } from "../../core/globals"
import { Observer } from "../../core/Observer"
import { SliderComponent } from "../../core/SliderComponents"

export class PointMax extends SliderComponent {
  static className = 'point-max'
  shiftY?: number
  shiftX?: number 
  onClick?: boolean
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('mousedown', (e) => this.onMousedown(e as MouseEvent))
    this.domListener.on('mouseup', () => this.onMouseup())
  }

  setValues(values: presenterProperties) {
    if (values.isRange) this.$root.addClass('visible')
  }

  init() {
    this.emitter.subscribe('settingsToView: range', () => this.range())
  }

  range() {
    this.$root.toggle('visible')
  }

  vertical() {
    this.$root.toggle('point-maxV')
    if (this.$root.hasSelector('point-maxV')) { 
      this.$root.$el.style.top = '100%' 
      this.$root.left(0)
    } else {
      this.$root.$el.style.left = '100%'
      this.$root.top(0)
    }
  }

  pointMaxChange(values: completeValue) {
    if (!values.isVertical) {
      this.$root.left(values.position)
    } else {
      this.$root.top(values.position)
    }
  }


  getData(props: properties) {
    props.pointMaxY = this.$root.$el.getBoundingClientRect().y
    props.pointMaxX = this.$root.$el.getBoundingClientRect().x
    if (this.onClick == true) {
    props.shiftX = this.shiftX as number
    props.shiftY = this.shiftY as number
    
    }
  }

  
  onMousedown(e: MouseEvent) {
    this.onClick = true
    this.shiftY = e.clientY - this.$root.$el.getBoundingClientRect().y - 12.5
    this.shiftX = e.clientX - this.$root.$el.getBoundingClientRect().x - 12.5
    document.onmousemove = e => {
      this.emitter.trigger('pointToView', e, 'max')
    }
    document.onmouseup = () => {
      this.onClick = false
      document.onmousedown = null
      document.onmousemove = null
    }
  }

  onMouseup() {
    document.onmousemove = null
  }
}