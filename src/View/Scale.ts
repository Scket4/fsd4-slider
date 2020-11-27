import { $, Dom } from "../core/dom";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class Scale extends SliderComponent {
  static className = 'slider__scale'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('click', (e) => this.onClick(e as MouseEvent))
  }

  init() {
    this.emitter.subscribe('settingsToScale', () => this.toggleClass())
  }

  vertical() {
    this.$root.toggle('scaleV')
    const $scaleNumbers = $('.scale__numbers')
    const $longNumbers = document.querySelectorAll('.long__numbers')
    const $longNumbersNumber = document.querySelectorAll('.long__numbers-number')
    $scaleNumbers.toggle('scale__numbersV')
    $longNumbers.forEach(el => el.classList.toggle('long__numbersV'))
    $longNumbersNumber.forEach(el => el.classList.toggle('long__numbers-numberV'))
  }


  getData() {}

  sliderStartChange(start: number, end: number) {
    const renderScale = this.renderScale(start, end).outerHTML.trim()
    this.$root.html(renderScale)
  }

  sliderEndChange(start: number, end: number) {
    const renderScale = this.renderScale(start, end).outerHTML.trim()
    this.$root.html(renderScale)
  }

  toggleClass() {
    this.$root.toggle('hidden')
  }

  onClick(e: MouseEvent) {
    this.emitter.trigger('trackToView: click', e)
    // let val = 0
    // e.preventDefault()
    // const pos = this.prop.isVertical ? 'positionMinV' : 'positionMin'
    // const sliderWH = this.prop.isVertical ? this.prop.slider.height : this.prop.slider.width
    // if (this.prop.isVertical) {
    //   val = e.clientY - this.prop.slider.y
    // } else { 
    //   val = e.clientX - this.prop.slider.x 
    // }

    // this.emitter.trigger('viewToPresenter', {[pos]: val / sliderWH})
  }


  renderScale(start: number = 0, end: number = 100) {
    const $scale__numbers = $.create('div', `scale__numbers`)
    const makeScale = (index: number) => {
      const $scaleNum = $.create('div', 'long__numbers', index)
      const $scaleNumLong = $.create('div', "long__numbers-number")
      $scaleNumLong.$el.innerHTML = index.toString()
      $scaleNum.append($scaleNumLong.$el)
      $scale__numbers.append($scaleNum.$el)
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
    const renderScale = this.renderScale().outerHTML.trim()
    return `${renderScale}`
  }
}