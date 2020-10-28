import './styles/style.sass'
// https://jinv.ru/range/
import { Model } from './core/Model';
import { Observer } from './core/Observer';
import { Presenter } from './core/Presenter';
import { View } from './core/View';

class Main {
  constructor(emit) {
    this.view = new View(emit)
    this.model = new Model(emit)
    this.controller = new Presenter(emit)
  }
}

let emitter = new Observer()
let main = new Main(emitter)
let view = new View(emitter)








let position = 0
let currentPosition = 0
let currentWidth = null
let persentSelect  = null
let percent = 0
let currentPercent = 0



// Мин и макс
let sliderStart = 0
let sliderEnd = 200
let sliderWidth = 500

const inputMin = document.querySelector('.input__min')
const inputMax = document.querySelector('.input__max')
const inputCurrent = document.querySelector('.input__current')

inputMin.value = sliderStart
inputMax.value = sliderEnd
inputCurrent.value = 0

inputMin.addEventListener('change', () => {
  sliderStart = inputMin.value
  view.destroyScale()
  view.renderScale(sliderStart, sliderEnd)
  upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
  inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
})

inputMax.addEventListener('change', ()=> {
  sliderEnd = inputMax.value
  view.destroyScale()
  view.renderScale(sliderStart, sliderEnd)
  upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
  inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
})

inputCurrent.addEventListener('change', () => {
  inputCurrent.value = inputCurrent.value > 100 ? 100 : inputCurrent.value < 0 ? 0 : inputCurrent.value
  document.body.style.setProperty('--selectWidth', inputCurrent.value + '%')
  upPoint.innerHTML = inputCurrent.value
  percent = inputCurrent.value * 100 / sliderEnd
})

// Конец кнопок min и max

// Генерируем шкалу в зависимости от мин и макс

// создание слайдера

view.renderSlider('.slider')
view.renderScale(sliderStart, sliderEnd)

const point = document.querySelector('.track__point')
const upPoint = document.querySelector('.up-point')
const scale = document.querySelector('.slider__scale')
const track = document.querySelector('.track')




// Конец

// Перемещение ползунка

point.addEventListener('mousedown', e => {
  position = e.screenX
  document.onmousemove = (e) => {
    currentPosition = e.screenX
    currentWidth = position - currentPosition
    persentSelect = currentWidth / sliderWidth * -100
    currentPercent = (percent + persentSelect) > 100 
    ? 100 : (percent + persentSelect) < 0 
    ? 0 : (percent + persentSelect) 
      upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
      inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
      document.body.style.setProperty('--selectWidth', currentPercent + '%')    
  }
  document.onmouseup = () => {
    percent = currentPercent
    document.onmousemove = document.onmouseup = null
  }
})

track.onclick = (e) => {
  position = point.getBoundingClientRect().x
  currentPosition = e.screenX
  currentWidth = position - currentPosition
  persentSelect = currentWidth / sliderWidth * -100
  currentPercent = (percent + persentSelect) > 100 
  ? 100 : (percent + persentSelect) < 0 
  ? 0 : (percent + persentSelect) 
  upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
  inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
  document.body.style.setProperty('--selectWidth', currentPercent + '%')
  percent = currentPercent
}
