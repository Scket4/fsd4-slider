import './styles/style.sass'


const point = document.querySelector('.scale__point')
// const slider = document.querySelector('.slider')
const scale = document.querySelector('.scale')
const upPoint = document.querySelector('.up-point')
const body = document.body

let sliderWidth = 250
let isMouseDown = false
let position = null
let currentPosition = 0
let currentWidth = null
let persentSelect  = null
let percent = 0
let currentPercent = 0
let currentPositionClick = 0
let currentWidthClick = 0
let persentSelectClick = 0
let currentPercentClick = 0

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

// scale.addEventListener('click', e => {
//   currentPositionClick = e.screenX
//   currentWidthClick = currentPosition - currentPositionClick
//   persentSelectClick = currentWidthClick / sliderWidth * -100
//   currentPercentClick = percent + persentSelectClick
//   document.body.style.setProperty('--selectWidth', currentPercentClick + '%')
// })