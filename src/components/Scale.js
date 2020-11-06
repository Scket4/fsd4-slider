import { $ } from "../core/dom";
import { SliderComponent } from "../core/SliderComponents";

export class Scale extends SliderComponent {
  static className = 'slider__scale'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'scale',
      listeners: ['click']
    }, values)
  }

  init() {
    super.init()
  }

  makeChange(prop, val) {
    if (prop === 'sliderStart' || prop === 'sliderEnd') this.$root.html(this.toHTML())
    if (prop === 'isScale') val == 1 ? this.$root.removeClass('hidden') : this.$root.addClass('hidden')
  }

  onClick(e) {
    let left = e.clientX - this.prop.slider.x 
    e.preventDefault()

    this.emitter.trigger('viewToPresenter', {positionMin: left / this.prop.slider.width})
  }


  renderScale(start = 0, end = 100) {
    const $scale__numbers = $.create('div', 'scale__numbers')
    const makeScale = index => {
      const $scaleNum = $.create('div', ('scale__number', 'long__numbers'), index)
      const $scaleNumLong = $.create('div', "long__numbers-number")
      $scaleNumLong.$el.innerHTML = index
      $scaleNum.append($scaleNumLong)
      $scale__numbers.append($scaleNum)
    }
    for (let index = start; index <= end; index++) {
      end > 390 ? 
        index % 40 == 0 ? makeScale(index) : false
    : end >= 100 ?
        index % 20 === 0 || index % 10 == 0 ? makeScale(index) : false
    : index % 10 == 0 ? makeScale(index) : false 
    }
    return $scale__numbers.$el
  }
  
  toHTML() {
    const renderScale = this.renderScale(this.prop.sliderStart, this.prop.sliderEnd).outerHTML.trim()
    return `${renderScale}`
  }
}