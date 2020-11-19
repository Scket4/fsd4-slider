import { Dom } from "../core/dom";
import { properties } from "../core/globals";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class Track extends SliderComponent {
  static className = 'track'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('click', (e) => this.onClick(e as MouseEvent))
  }

  // initHorizontal() {
  //   super.initHorizontal()
  //   this.$root.addClass('track')
  // }

  getData(props: properties) {
    props.sliderWidth = this.$root.$el.getBoundingClientRect().width
    props.sliderHeight = this.$root.$el.getBoundingClientRect().height
    props.sliderX = this.$root.$el.getBoundingClientRect().x
    props.sliderY = this.$root.$el.getBoundingClientRect().x
  }
   
  // initVertical() {
  //   super.initVertical()
  //   this.$root.addClass('trackV') 
  //   this.prop.slider = this.$root.$el.getBoundingClientRect()
  // }

  // makeChange() {
  //   this.prop.slider = this.$root.$el.getBoundingClientRect()
  // }

  onClick(e: MouseEvent) {
  //   let val = 0
  //   e.preventDefault()
  //   const pos = this.prop.isVertical ? 'positionMinV' : 'positionMin'
  //   const sliderWH = this.prop.isVertical ? this.prop.slider.height : this.prop.slider.width
  //   if (this.prop.isVertical) {
  //     val = e.clientY - this.prop.slider.y
  //   } else { 
  //     val = e.clientX - this.prop.slider.x 
  //   }

  //   this.emitter.trigger('viewToPresenter', {[pos]: val / sliderWH})
  // }

  }
}