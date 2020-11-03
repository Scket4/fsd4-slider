import { SliderComponent } from "../core/SliderComponents";

export class Track extends SliderComponent {
  static className = 'track'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'track',
      listeners: ['click']
    }, values)
  }
  
  init() {
    super.init()
    this.prop.sliderCoords = this.$root.getCoordsX()
    this.prop.sliderWidth = this.$root.getWidth()
  }
  
  toHTML() {
    return '' 
  }


  onClick(e) {
    const currentPosition = e.screenX
    const width = currentPosition - this.prop.pointPosition
    let selected = width / this.prop.sliderWidth * 100 + this.prop.percent
    selected = selected > 100 ? 100 : selected < 0 ? 0 : selected
    this.prop.pointPosition = currentPosition

    this.emitter.trigger('viewToPresenter', {percent: selected})
  }

}