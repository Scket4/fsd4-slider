import { Dom } from "../../core/dom"
import { completeValue, properties } from "../../core/globals"
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

  pointMaxChange(values: completeValue) {
    this.$root.left(values.position)
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
    this.$root.$el.style.zIndex = '1000'
    this.shiftY = e.clientY - this.$root.$el.getBoundingClientRect().y - 12.5
    this.shiftX = e.clientX - this.$root.$el.getBoundingClientRect().x - 12.5
    document.onmousemove = e => {
      this.emitter.trigger('pointToPresenter', e, 'max')
    }
    document.onmouseup = () => {
      this.onClick = false
      this.$root.$el.style.zIndex = '2'
      document.onmousedown = null
      document.onmousemove = null
    }
  }

  onMouseup() {
    document.onmousemove = null
  }
}