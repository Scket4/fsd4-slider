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

  init() {
    super.init()
    this.inputMin = this.$root.find('.input__min')
    this.inputMax = this.$root.find('.input__max')
    this.current = this.$root.find('.input__current')
    this.rangeMax = this.$root.find('.input__current-max')
    this.stick = this.$root.find('.stick')
  }

  makeChange() {
    this.current.value = Math.floor((this.prop.positionMin * this.prop.sliderSize) + this.prop.sliderStart)
  }

  onClick(e) {
    // const $target = $(e.target)
    // if ($target.data('checkbox')) {
    //   console.log('ok');
    //   $target.toggle('checkbox__active')
    //   const type = $target.data('checkbox')
    //   const is = $target.hasSelector('checkbox__active')
    //   this.emitter.trigger('viewToPresenter', {[type]: is})
    // }
  }

  onChange(e) {
    const $target = $(e.target)
    const type = $target.data('type')

    if (type === 'input__max') {
      this.emitter.trigger('viewToPresenter', {sliderEnd: $target.getValue()})

    } else if (type === 'input__min') {
      this.emitter.trigger('viewToPresenter', {sliderStart: $target.getValue()})

    } else if (type === 'input_current') {
      let val = $target.getValue()
      val = val / this.prop.sliderEnd
      val = val > 1 ? 1 : val < 0 ? 0 : val
      this.emitter.trigger('viewToPresenter', {positionMin: val})
    }
  }

  toHTML() {
    return `
        <div class="settings__min-max">
          <label><p>Мин:</p>
          <input type="text" data-type="input__min" class="input__min" value="0" >
          </label>
          <label><p>Макс:</p>
          <input type="text" class="input__max" value="100" data-type='input__max'>
          </label>
          <label><p>Значение:</p>
          <input type="text" class="input__current" value="0" data-type="input_current">
          <span class="stick"></span>
          <input type="text" class="input__current-max" value="20">
          </label>
        </div>
        <div class="settings__2">
        <div class='settings__2-div'> <p>Вертикально:</p> <div class="is-vertical checkbox" data-checkbox="isVertical"></div> </div>
        <div class='settings__2-div'> <p>Лейбел:</p> <div class="is-label checkbox checkbox__active" data-checkbox="isLabel"></div> </div>
        <div class='settings__2-div'> <p>Шкала:</p> <div class="is-scale checkbox checkbox__active" data-checkbox="isScale"></div> </div>
        <div class='settings__2-div'> <p>Диапазон</p> <div class="is-range checkbox" data-checkbox="isRange"></div> </div>
        </div>
    `
  }

}