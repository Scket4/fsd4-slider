import { Dom } from "../../core/dom";
import { completeValue, properties, whatThumb } from "../../core/globals";
import { Observer } from "../../core/Observer";
import { SliderComponent } from "../../core/SliderComponents";

export class PointMin extends SliderComponent {
  static className = 'point-min'
  shiftX?: number
  shiftY?: number
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('mousedown', e => this.onMousedown(e as MouseEvent))
    this.domListener.on('mouseup', () => this.onMouseup())
  }

  getData(props: properties) {
    props.pointMinX = this.$root.$el.getBoundingClientRect().x
    props.pointMinY = this.$root.$el.getBoundingClientRect().y
    props.shiftX = this.shiftX as number
    props.shiftY = this.shiftY as number
  }

  pointMinChange(values: completeValue) {
    this.$root.left(values.position)
  }

  onMousedown(e: MouseEvent) {
    this.shiftY = e.clientY - this.$root.$el.getBoundingClientRect().y - 12.5
    this.shiftX = e.clientX - this.$root.$el.getBoundingClientRect().x - 12.5
    this.$root.$el.style.zIndex = '1000'    
    document.onmousemove = (e) => {
      this.emitter.trigger('pointToPresenter', e, 'min')
    }
    document.onmouseup = () => {
      document.onmousedown = null
      document.onmousemove = null
      this.$root.$el.style.zIndex = '2'
    }
  }
  
  onMouseup() {
    document.onmousemove = null
  }
}