import { Slider } from "./Slider"

export class View extends Slider {
  constructor() { 
    super() 
    this.point = document.querySelector('.track__point')
    this.upPoint = document.querySelector('.up-point')
    this.scale = document.querySelector('.slider__scale')
    this.track = document.querySelector('.track')
  }

  renderSlider(selector) {
    let track = (document.createElement('div'))
    track.className  = 'track slider__track'
    document.querySelector(selector).prepend(track)
    track.insertAdjacentHTML('beforeend', '<div class="track__select"></div>')
    track.insertAdjacentHTML('beforeend', '<div class="track__point"></div>')
    track.insertAdjacentHTML('beforeend', '<div class="up-point">0</div>')
  }
  
  renderScale(start, end) {
    let long__numbers = null
    const makeScale = index => {
      // let scale = document.querySelector('.slider__scale')
      this.scale.insertAdjacentHTML("beforeEnd", `<div class='scale__numbers long__numbers' id="${index}"></div>`)
      long__numbers = document.getElementById(`${index}`)
      long__numbers.insertAdjacentHTML("beforeend", `<div class="long__numbers-number">${index}</div>`)
    }
    for (let index = start; index <= end; index++) {
      end > 390 ? 
        index % 40 == 0 ?
          makeScale(index) : false
      : end > 100 ?
        index % 20 == 0 ? 
          makeScale(index) : false
      : index % 10 == 0 ?
         makeScale(index) : false 
    }
  }
  
  destroyScale() {
    document.querySelectorAll('.scale__numbers').forEach(e => {
      e.remove()
    })
  }
}

