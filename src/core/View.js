import { $ } from "./dom"
import { Model } from "./Model"
import { Observer } from "./Observer"

export class View extends Model {
  constructor(emitter, components = [], selector) { 
    super(emitter)
    this.emit = new Observer()
    this.$el = document.querySelector(selector)
    this.components = components
    // this.point = document.querySelector('.track__point')
    // this.upPoint = document.querySelector('.up-point')
    // this.scale = document.querySelector('.slider__scale')
    // this.track = document.querySelector('.track')
    // this.position = 0
    // this.currentPosition = 0
    // this.currentWidth = 0
    // this.persentSelect = 0
    // this.currentPercentView = 0
    // this.percent = 0
  }

  getRoot() {
    const $root = $.create('div', 'slider')

    this.components.forEach(Comp => {

      const $el = $.create('div', Comp.className)
      const component = new Comp(this.emit, $el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
      $el.className === 'up-point' ? $el.innerHTML = 0 : ''

    })
    return $root
    
  }

  render() {
    this.$el.prepend(this.getRoot())
  }
  // positionChange(val) {
  //   if(val === 'undefined') {
  //     return this.position
  //   } else {
  //     this.position = val
  //   }
  // }

  // renderSlider(selector) {
  //   let track = (document.createElement('div'))
  //   track.className  = 'track slider__track'
  //   document.querySelector(selector).prepend(track)
  //   track.insertAdjacentHTML('beforeend', '<div class="track__select"></div>')
  //   track.insertAdjacentHTML('beforeend', '<div class="track__point"></div>')
  //   track.insertAdjacentHTML('beforeend', '<div class="up-point">0</div>')
  // }
  
  // renderScale(start, end) {
  //   let long__numbers = null
  //   const makeScale = index => {
  //     // let scale = document.querySelector('.slider__scale')
  //     this.scale.insertAdjacentHTML("beforeEnd", `<div class='scale__numbers long__numbers' id="${index}"></div>`)
  //     long__numbers = document.getElementById(`${index}`)
  //     long__numbers.insertAdjacentHTML("beforeend", `<div class="long__numbers-number">${index}</div>`)
  //   }
  //   for (let index = start; index <= end; index++) {
  //     end > 390 ? 
  //       index % 40 == 0 ?
  //         makeScale(index) : false
  //     : end > 100 ?
  //       index % 20 == 0 ? 
  //         makeScale(index) : false
  //     : index % 10 == 0 ?
  //        makeScale(index) : false 
  //   }
  // }
  
  // destroyScale() {
  //   document.querySelectorAll('.scale__numbers').forEach(e => {
  //     e.remove()
  //   })
  // }

  // pointMove(e) {
  //   this.currentPosition = e.screenX
  //   this.currentWidth = this.position - this.currentPosition
  //   this.persentSelect = this.currentWidth / this.sliderWidthChange() * -100
  //   this.currentPercentView = (percent + persentSelect) > 100 
  //   ? 100 : (percent + persentSelect) < 0 
  //   ? 0 : (percent + persentSelect) 
  //   this.trigger('CurrentPercent', this.currentPercentView)
  // }
}

