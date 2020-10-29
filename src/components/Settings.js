import { SliderComponent } from "../core/SliderComponents";

export class Settings extends SliderComponent {
  static className = 'settings'
  constructor(emitter, $root) {
    super(emitter, $root)
  }
  toHTML() {
    return `
        <div class="settings__min-max">
          <input type="text" class="input__min" placeholder="Минимальное знач.">
          <input type="text" class="input__max" placeholder="Максимальное знач.">
          <input type="text" class="input__current">
        </div>
        <div class="settings__2"></div>
        <div class="settings__3"></div>
    `
  }
}