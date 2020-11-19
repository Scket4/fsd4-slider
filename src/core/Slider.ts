import { Observer } from "./Observer"
import { Presenter } from "../Presenter/Presenter"

export class Slider {
  observer: Observer
  presenter: Presenter
  constructor(selector: string) {
    this.observer = new Observer()
    this.presenter = new Presenter(this.observer, selector)
  }

  render() {
    this.presenter.init()
  }
}
