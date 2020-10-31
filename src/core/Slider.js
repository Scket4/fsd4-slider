import { Observer } from "./Observer"
import { Presenter } from "./Presenter"

export class Slider {
  constructor(selector) {
    this.observer = new Observer()
    this.presenter = new Presenter(this.observer, selector)
  }

  render() {
    this.presenter.view.render()
  }
}

