import { $, Dom } from "../core/dom";
import { completeValue, properties } from "../core/globals";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class Settings extends SliderComponent {
  static className = 'settings'
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('click', (e) => this.onClick(e as MouseEvent))
    this.domListener.on('change', (e) => this.onChange(e))
  }

  getData(props: properties) {
    props.isScale = true
    props.isLabel = true
    props.isVertical = false
    props.isRange = false
    props.step = 0
    props.stepSize = 0
  }

  pointMinChange(values: completeValue) {
    let current = this.$root.find('.input__current') as HTMLInputElement
    current.value = values.value.toString()
  }


  onClick(e: MouseEvent) {    
    const $target = $(e.target as HTMLElement)
    if ($target.data('checkbox')) {
      $target.toggle('checkbox__active')
    }
    if ($target.data('checkbox') === 'isScale') this.emitter.trigger('settingsToScale')
    if ($target.data('checkbox') === 'isLabel') this.emitter.trigger('settingsToLabel')
    
  }

  onChange(e: Event) {
    // const v = this.prop.isVertical
    // const $target = $(e.target)
    // const type = $target.data('type')

    // if (type === 'input__max') this.emitter.trigger('viewToPresenter', {sliderEnd: $target.getValue()})

    // if (type === 'input__min') this.emitter.trigger('viewToPresenter', {sliderStart: $target.getValue()})

    // if (type === 'input_current') {
    //   let val = $target.getValue()
    //   val = val / this.prop.sliderEnd
    //   val = val > 1 ? 1 : val < 0 ? 0 : val
    //   const position = v ? this.prop.positionMaxV : this.prop.positionMax
    //   val = val > position ? 0 : val
    //   const pos = v ? 'positionMinV' : 'positionMin'
    //   this.emitter.trigger('viewToPresenter', {[pos]: val})
    // }

    // if (type === 'input_current-max') {
    //   let val = $target.getValue()
    //   val = val / this.prop.sliderEnd
    //   val = val > 1 ? 1 : val < 0 ? 0 : val
    //   const position = v ? this.prop.positionMinV : this.prop.positionMin
    //   val = val < position ? 1 : val
    //   const pos = v ? 'positionMaxV' : 'positionMax'
    //   this.emitter.trigger('viewToPresenter', {[pos]: val})
    // }

    // if (type === 'input__step') {
    //   let val = Math.ceil($target.getValue())
    //   $target.$el.value = val
    //   this.emitter.trigger('viewToPresenter', {step: val})
    // }
  }

  toHTML() {
    return `
        <div class="settings__min-max settings__min-maxV">
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
          <input type="text" class="input__current-max" data-type="input_current-max" value="100">
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