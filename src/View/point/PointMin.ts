import { Dom } from "../../core/dom";
import { properties } from "../../core/globals";
import { Observer } from "../../core/Observer";
import { SliderComponent } from "../../core/SliderComponents";

export class PointMin extends SliderComponent {
  static className = 'point-min'
  shiftx?: number
  shiftY?: number
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('mousedown', e => this.onMousedown(e as MouseEvent))
    this.domListener.on('mouseup', () => this.onMouseup())
  }

  getData(props: properties) {
    props.pointMinX = this.$root.$el.getBoundingClientRect().x
    props.pointMinY = this.$root.$el.getBoundingClientRect().y
    props.shiftX = this.shiftx as number
    props.shiftY = this.shiftY as number
  }

  changeData(val: number) {    
    this.$root.left(val)
  }

  onMousedown(e: MouseEvent) {
    this.shiftY = e.clientY - this.$root.$el.getBoundingClientRect().y - 12.5
    this.shiftx = e.clientX - this.$root.$el.getBoundingClientRect().x - 12.5
    this.emitter.trigger('componentsToView: pointMove', e)
    document.onmousemove = (e) => {
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