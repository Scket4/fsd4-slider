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
    this.prop.slider = this.$root.$el.getBoundingClientRect()
  }
  
  toHTML() {
    return '' 
  }


  onClick(e) {
    let left = e.clientX - this.prop.slider.x 
    e.preventDefault()

    this.emitter.trigger('viewToPresenter', {positionMin: left / this.prop.slider.width})
  }

}