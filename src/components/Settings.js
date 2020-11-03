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
  }

  makeChange() {
    this.current.value = Math.floor(this.prop.percent / 100 * this.prop.sliderEnd)
  }

  onClick(e) {
    const $target = $(e.target)
    if ($target.data().checkbox) {
      $target.toggle('checkbox__active')
      const type = $target.data().checkbox
      const is = $target.hasSelector('checkbox__active')
      this.emitter.trigger('viewToPresenter', {[type]: is})
    }
  }

  onChange(e) {
    const $target = $(e.target)

    if ($target.data().type === 'input__max') {
      const val = $target.getValue()
      this.emitter.trigger('viewToPresenter', {sliderEnd: val})

    } else if ($target.data().type === 'input__min') {
      const val = $target.getValue()
      this.emitter.trigger('viewToPresenter', {sliderStart: val})

    } else if ($target.data().type === 'input_current') {
      let val = $target.getValue()
      val = val > this.prop.sliderEnd ? this.prop.sliderEnd : val < this.prop.sliderStart ? this.prop.sliderStart : val
      console.log(this.prop.sliderEnd);
      this.emitter.trigger('viewToPresenter', {percent: val})
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
          <input type="text" class="input__current-max">
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