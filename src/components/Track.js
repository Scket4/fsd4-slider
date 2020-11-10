import { SliderComponent } from "../core/SliderComponents";

export class Track extends SliderComponent {
  static className = 'track'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'track',
      listeners: ['click']
    }, values)
  }

  initHorizontal() {
    super.initHorizontal()
    this.$root.addClass('track')
  }
  
  initVertical() {
    super.initVertical()
    this.$root.addClass('trackV') 
    this.prop.slider = this.$root.$el.getBoundingClientRect()
  }

  init() {
    super.init()
    this.prop.slider = this.$root.$el.getBoundingClientRect()
  }

  makeChange() {
    this.prop.slider = this.$root.$el.getBoundingClientRect()
  }

  onClick(e) {
    let val = 0
    e.preventDefault()
    const pos = this.prop.isVertical ? 'positionMinV' : 'positionMin'
    const sliderWH = this.prop.isVertical ? this.prop.slider.height : this.prop.slider.width
    if (this.prop.isVertical) {
      val = e.clientY - this.prop.slider.y
    } else { 
      val = e.clientX - this.prop.slider.x 
    }

    this.emitter.trigger('viewToPresenter', {[pos]: val / sliderWH})
  }

}