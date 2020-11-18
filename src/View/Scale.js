import { $ } from "../core/dom";
import { SliderComponent } from "../core/SliderComponents";

export class Scale extends SliderComponent {
  static className = 'slider__scale'
  constructor(emitter, $root, values) {
    super(emitter, $root, values)
    this.domListener.on('click', (e) => this.onClick())
  }

  initHorizontal() {
    super.initHorizontal()
    this.$root.addClass('slider__scale')
    this.$root.html(this.toHTML())
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('scaleV')
    this.$root.html(this.toHTML())
  }

  makeChange(prop, val) {
    if (prop === 'sliderStart' || prop === 'sliderEnd') this.$root.html(this.toHTML())
    if (prop === 'isScale') val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
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


  renderScale(start, end) {
    const $scale__numbers = this.prop.isVertical ? $.create('div', `scale__numbersV`) : $.create('div', `scale__numbers`)
    const makeScale = index => {
      const $scaleNum = this.prop.isVertical ? $.create('div', 'long__numbersV', index) : $.create('div', 'long__numbers', index)
      const $scaleNumLong = this.prop.isVertical ? $.create('div', "long__numbers-numberV") : $.create('div', "long__numbers-number")
      $scaleNumLong.$el.innerHTML = index
      $scaleNum.append($scaleNumLong)
      $scale__numbers.append($scaleNum)
    }
    for (let index = start; index <= end; index++) {
      if (end >= 2000) {index % 160 == 0 ? makeScale(index) : false}
      else if (end >= 1000) {index % 80 == 0 ? makeScale(index) : false}
      else if (end >= 600) {index % 40 == 0 ? makeScale(index) : false} 
      else if (end >= 360) {index % 20 == 0 ? makeScale(index) : false} 
      else if (end >= 150) {index % 10 == 0 ? makeScale(index) : false} 
      else {index % 5 == 0 ? makeScale(index) : false}
    }
    return $scale__numbers.$el
  }
  
  toHTML() {
    const renderScale = this.renderScale(this.prop.sliderStart, this.prop.sliderEnd).outerHTML.trim()
    return `${renderScale}`
  }
}