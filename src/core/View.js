// Инициализирует и отображает компоненты. Меняем их по данной схеме:
// Нажимаем мышь. Фиксируем положение по оси x в переменную. От этого значения отталкивается полузонк, пока не отпустим мышь.
// Изменения в переменной отправляем в контроллер.Контроллер вызывает функцию changeCount в модели и меняет значение count.
// Значение count поменялось - контроллер получает это изменение и передает его в вид.
// Вид изменяет ползунок, выбранную область, счетчик исходя из переменной count 

import { Controller } from "./Controller"

const { isMouseDown } = require("./variables")

export class View {
  getElement(selector) {
    document.querySelector(selector)
  }

  setProperty(percent, el) {
    upPoint.innerHTML = Math.floor(currentPercent)
    el.style.setProperty(('--selectWidth', percent + '%'))
  }
}

const view = new View()
const controller = new Controller()

const point = view.getElement('.scale__point')
const slider = view.getElement('.slider')
const scale = view.getElement('.scale')
const upPoint = view.getElement('.up-point')
const body = document.body


point.addEventListener('mousedown', e => {
  position = e.screenX 
  isMouseDown = true
})

body.addEventListener('mousemove', e => {
  if (isMouseDown) {
    currentPosition = e.screenX
  }
})

body.addEventListener('click', e => {
  isMouseDown = false
})