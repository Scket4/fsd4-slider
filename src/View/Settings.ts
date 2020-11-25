import { $, Dom } from "../core/dom";
import { completeValue, properties } from "../core/globals";
import { Observer } from "../core/Observer";
import { SliderComponent } from "../core/SliderComponents";

export class Settings extends SliderComponent {
  static className = 'settings'
  label!: Dom
  range!: Dom
  scale!: Dom
  isVertical!: Dom
  step!: Dom
  sliderEnd!: Dom
  sliderStart!: Dom
  currentMin!: Dom
  currentMax!: Dom
  constructor(emitter: Observer, $root: Dom) {
    super(emitter, $root)
    this.domListener.on('click', (e) => this.onClick(e as MouseEvent))
    this.domListener.on('change', (e) => this.onChange(e))
  }

  init() {
    this.scale = $('.is-scale')
    this.label = $('.is-label')
    this.range = $('.is-range')
    this.isVertical = $('.is-vertical')
    this.step = $('.input__step')
    this.sliderStart = $('.slider-start')
    this.sliderEnd = $('.slider-end')
    this.currentMax = $('.input__current-max')
    this.currentMin = $('.input__current')    
  }

  getData(props: properties) {
    props.isScale = this.scale.hasSelector('checkbox__active')
    props.isLabel = this.label.hasSelector('checkbox__active')
    props.isVertical = this.isVertical.hasSelector('checkbox__active')
    props.isRange = this.range.hasSelector('checkbox__active')
    props.step = +this.step.getValue()
    props.sliderEnd = +this.sliderEnd.getValue()
    props.sliderStart = +this.sliderStart.getValue()
  }

  vertical() {
    this.$root.toggle('settingsV')
  }

  pointMinChange(values: completeValue) {
    this.currentMin.setValue(values.value)
  }

  pointMaxChange(values: completeValue) {
    this.currentMax.setValue(values.value)
  }


  onClick(e: MouseEvent) {    
    const $target = $(e.target as HTMLElement)
    if ($target.data('checkbox')) {
      $target.toggle('checkbox__active')
    }
    if ($target.data('checkbox') === 'isScale') this.emitter.trigger('settingsToScale')
    if ($target.data('checkbox') === 'isLabel') this.emitter.trigger('settingsToLabel')
    if ($target.data('checkbox') === 'isRange') this.emitter.trigger('settingsToView: range', this.currentMax.getValue())
    if ($target.data('checkbox') === 'isVertical') this.emitter.trigger('settingsToView: vertical')
  }

  onChange(e: Event) {
    const $target = $(e.target as HTMLInputElement)
    const type = $target.data('type')
    if (type === 'input__current') this.emitter.trigger('settingsToView: current', this.currentMin.getValue(), 'min')
    if (type === 'input__current-max') this.emitter.trigger('settingsToView: current', this.currentMax.getValue(), 'max')
    if (type === 'slider-start') this.emitter.trigger('settingsToView: sliderSize', 'min')
    if (type === 'slider-end') this.emitter.trigger('settingsToView: sliderSize', 'max')
  }

  toHTML() {
    return `
      <div class="settings__min-max settings__min-maxV">
        <label> <p>Мин:</p> <input type="text" data-type="slider-start" class="slider-start" value="0"> </label>
        <label> <p>Макс:</p> <input type="text" class="slider-end" value="100" data-type='slider-end'> </label>
        <label> <p>Шаг:</p> <input type="text" class="input__step" value="0" data-type='input__step'> </label>
        <label><p>Значение:</p> <input type="text" class="input__current" value="0" data-type="input__current">
        <span class="stick"></span>
        <input type="text" class="input__current-max" data-type="input__current-max" value="100">
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