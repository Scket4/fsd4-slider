// В каждом файле по классу создаешь. Потом в точке входа приложения импортируешь классы и создаешь объекты для каждого. Потом просто кидаешь объекты model и view в controller. А он уже организует обмен данными.
// https://jinv.ru/range/
import './styles/style.sass'


const point = document.querySelector('.track__point')
const upPoint = document.querySelector('.up-point')
const body = document.body
const scale = document.querySelector('.slider__scale')

// const newDiv = document.createElement('<div class="sliderMap"></div>')

let sliderWidth = 500
// let sliderStart = null

let isMouseDown = false
let position = null
let currentPosition = 0
let currentWidth = null
let persentSelect  = null
let percent = 0
let currentPercent = 0
let inputValue = []



// Мин и макс
let sliderStart = 900
let sliderEnd = 1000

const inputMin = document.querySelector('.input__min')
const inputMax = document.querySelector('.input__max')

inputMin.value = sliderStart
inputMax.value = sliderEnd

inputMin.addEventListener('change', () => {
  sliderStart = inputMin.value
  destroy()
  init(sliderStart, sliderEnd)
})

inputMax.addEventListener('change', ()=> {
  sliderEnd = inputMax.value
  destroy()
  init(sliderStart, sliderEnd)
})

// Конец кнопок min и max

// Генерируем шкалу в зависимости от мин и макс
let long__numbers = null

function init(start, end) {
  for (let index = start; index <= end; index++) {
    if (index % 10 == 0) {
      scale.insertAdjacentHTML("beforeEnd", `<div class='scale__numbers long__numbers' id="${index}"></div>`)
      long__numbers = document.getElementById(`${index}`)
      long__numbers.insertAdjacentHTML("beforeend", `<div class="long__numbers-number">${index}</div>`)
    } else if (index % 10 == 5){
      scale.insertAdjacentHTML("beforeEnd", `<div class='scale__numbers pre-long__numbers'></div>`)
    } else {
      scale.insertAdjacentHTML("beforeEnd", `<div class='scale__numbers'></div>`)
    }
  }
}

init(sliderStart, sliderEnd)

function destroy() {
  document.querySelectorAll('.scale__numbers').forEach(e => {
    e.remove()
  })
}
// Конец

point.addEventListener('mousedown', e => {
  position = e.screenX 
  isMouseDown = true
})

body.addEventListener('mousemove', e => {
  if (isMouseDown) {
    currentPosition = e.screenX
    currentWidth = position - currentPosition
    persentSelect = currentWidth / sliderWidth * -100
    currentPercent = (percent + persentSelect) > 100 
    ? 100 : (percent + persentSelect) < 0 
    ? 0 : (percent + persentSelect) 
    upPoint.innerHTML = Math.floor(currentPercent)
    document.body.style.setProperty('--selectWidth', currentPercent + '%')
  }
})

body.addEventListener('click', e => {
  isMouseDown = false
  percent = currentPercent
})