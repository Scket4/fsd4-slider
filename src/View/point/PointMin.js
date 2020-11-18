import { SliderComponent } from "../../core/SliderComponents";

export class PointMin extends SliderComponent {
  static className = 'point-min'
  constructor(emitter, $root, values) {
    super(emitter, $root, values)
    this.domListener.on('mousedown', e => this.onMousedown(e))
    this.domListener.on('mouseup', () => this.onMouseup())
  }

  getData(props) {
    props.pointMinX = this.$root.$el.getBoundingClientRect().x
    props.pointMinY = this.$root.$el.getBoundingClientRect().y
  }

  initHorizontal() {
    super.initHorizontal()
    this.$root.addClass('point-min')
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('point-minV')
  }

  applyChanges(val = {}) {
    val.isVertical === true ?
      this.$root.top(val.top)
    : this.$root.left(val.left)
  }

  onMousedown(e) {
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
    this.onmousedown = null
  }
}