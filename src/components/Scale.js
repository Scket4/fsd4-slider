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

  makeChange() {
    this.$root.html(this.toHTML())
    if (!this.prop.isScale) {
      this.$root.addClass('hiden')
    } else {
      this.$root.removeClass('hiden')
    }
  }

  onClick(e) {
    let left = e.clientX - this.prop.slider.x 

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