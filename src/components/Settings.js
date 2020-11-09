import { $ } from "../core/dom";
import { SliderComponent } from "../core/SliderComponents";

export class Settings extends SliderComponent {
  static className = 'settings'
  constructor(emitter, $root, values) {
    super(emitter, $root, {
      name: 'settings',
      listeners: ['click', 'change']
    }, values)
    this.inputMin = null
    this.inputMax = null
    this.current = null
  }

  initVertical() {
    super.initVertical()
    this.$root.addClass('settingsV')
    this.$root.html(this.toHTML())
  }

  init() {
    super.init()
    this.inputMin = $('.input__min')
    this.inputMax = $('.input__max')
    this.current = $('.input__current')
    this.currentMax = $('.input__current-max')
    this.stick = $('.stick')
  }

  makeChange(prop, val) {
    this.current.$el.value = Math.floor((this.prop.positionMin * this.prop.sliderSize) + this.prop.sliderStart)
    if (prop === 'isRange') val == 1 ? this.currentMax.addClass('visible') : this.currentMax.removeClass('visible')
    if (prop === 'isRange') val == 1 ? this.stick.addClass('visible') : this.stick.removeClass('visible')
    if (this.prop.isRange == 1) this.currentMax.$el.value = Math.floor((this.prop.positionMax * this.prop.sliderSize) + this.prop.sliderStart)
  }

  onClick(e) {
    const $target = $(e.target)
    if ($target.data('checkbox')) {
      $target.toggle('checkbox__active')
      const type = $target.data('checkbox')
      const is = $target.hasSelector('checkbox__active')
      this.emitter.trigger('viewToPresenter', {[type]: is})
    }
  }

  onChange(e) {
    const $target = $(e.target)
    const type = $target.data('type')

    if (type === 'input__max') this.emitter.trigger('viewToPresenter', {sliderEnd: $target.getValue()})

    if (type === 'input__min') this.emitter.trigger('viewToPresenter', {sliderStart: $target.getValue()})

    if (type === 'input_current') {
      let val = $target.getValue()
      val = val / this.prop.sliderEnd
      val = val > 1 ? 1 : val < 0 ? 0 : val
      this.emitter.trigger('viewToPresenter', {positionMin: val})
    }

    if (type === 'input__step') {
      let val = Math.ceil($target.getValue())
      $target.$el.value = val
      this.emitter.trigger('viewToPresenter', {step: val})
    }
  }

  toHTML() {
    return `
        <div class="settings__min-max ${this.prop.isVertical ? 'settings__min-maxV' : ''}">
          <label><p>Мин:</p>
          <input type="text" data-type="input__min" class="input__min" value="0" >
          </label>
          <label><p>Макс:</p>
          <input type="text" class="input__max" value="100" data-type='input__max'>
          </label>
          <label><p>Шаг:</p>
          <input type="text" class="input__step" value="0" data-type='input__step'>
          </label>
          <label><p>Значение:</p>
          <input type="text" class="input__current" value="0" data-type="input_current">
          <span class="stick"></span>
          <input type="text" class="input__current-max" value="20">
          </label>
        </div>
        <div class="settings__2">
        <div class='settings__2-div'> <p>Вертикально:</p> <div class="is-vertical checkbox ${this.prop.isVertical ? 'checkbox__active' : ''}" data-checkbox="isVertical"></div> </div>
        <div class='settings__2-div'> <p>Лейбел:</p> <div class="is-label checkbox checkbox__active" data-checkbox="isLabel"></div> </div>
        <div class='settings__2-div'> <p>Шкала:</p> <div class="is-scale checkbox checkbox__active" data-checkbox="isScale"></div> </div>
        <div class='settings__2-div'> <p>Диапазон</p> <div class="is-range checkbox" data-checkbox="isRange"></div> </div>
        </div>
    `
  }

}