import { $ } from "../core/dom";
import { SliderComponent } from "../core/SliderComponents";

export class Scale extends SliderComponent {
  static className = 'slider__scale'
  constructor(emitter, $root) {
    super(emitter, $root)
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
    // console.log(this.$root);
    const renderScale = this.renderScale().outerHTML.trim()
    return `${renderScale}`
  }
}