import './styles/style.sass'
// https://jinv.ru/range/
import { Slider } from './core/Slider';

let slider = new Slider('.main')

slider.render()

let slider2 = new Slider('.main-2')

slider2.render()










// inputMin.addEventListener('change', () => {
//   sliderStart = inputMin.value
//   view.destroyScale()
//   view.renderScale(sliderStart, sliderEnd)
//   upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
//   inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
// })

// inputMax.addEventListener('change', ()=> {
//   sliderEnd = inputMax.value
//   view.destroyScale()
//   view.renderScale(sliderStart, sliderEnd)
//   upPoint.innerHTML = Math.floor(currentPercent / 100 * sliderEnd)
//   inputCurrent.value = Math.floor(currentPercent / 100 * sliderEnd)
// })

// inputCurrent.addEventListener('change', () => {
//   inputCurrent.value = inputCurrent.value > 100 ? 100 : inputCurrent.value < 0 ? 0 : inputCurrent.value
//   document.body.style.setProperty('--selectWidth', inputCurrent.value + '%')
//   upPoint.innerHTML = inputCurrent.value
//   percent = inputCurrent.value * 100 / sliderEnd
// })

// // Конец кнопок min и max


