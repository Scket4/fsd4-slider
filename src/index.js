// https://jinv.ru/range/
import './styles/style.sass'


const point = document.querySelector('.track__point')
const upPoint = document.querySelector('.up-point')
const scale = document.querySelector('.slider__scale')
const track = document.querySelector('.track')



let position = 0
let currentPosition = 0
let currentWidth = null
let persentSelect  = null
let percent = 0
let currentPercent = 0



// Мин и макс
let sliderStart = 0
let sliderEnd = 100
let sliderWidth = 500

const inputMin = document.querySelector('.input__min')
const inputMax = document.querySelector('.input__max')
const inputCurrent = document.querySelector('.input__current')

inputMin.value = sliderStart
inputMax.value = sliderEnd
inputCurrent.value = 0

inputMin.addEventListener('change', () => {
  sliderStart = inputMin.value
  destroy()
  init(sliderStart, sliderEnd)
  upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
  inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
})

inputMax.addEventListener('change', ()=> {
  sliderEnd = inputMax.value
  destroy()
  init(sliderStart, sliderEnd)
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
