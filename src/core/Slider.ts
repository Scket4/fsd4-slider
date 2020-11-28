import { Observer } from "./Observer"
import { Presenter } from "../Presenter/Presenter"
import { presenterProperties } from "./globals"

export class Slider {
  observer: Observer
  presenter: Presenter
  constructor(selector: string) {
    this.observer = new Observer()
    this.presenter = new Presenter(this.observer, selector)
  }

  render(options: presenterProperties = {} as presenterProperties) {
    if (options.isVertical !== undefined) {
      this.presenter.props.isVertical = options.isVertical
    } 
    if (options.isRange !== undefined) {
      this.presenter.props.isRange = options.isRange
    } 
    if (options.step !== undefined) {
      this.presenter.props.step = options.step
    } 
    if (options.sliderStart !== undefined) {
      this.presenter.props.sliderStart = options.sliderStart
    } 
    if (options.sliderEnd !== undefined) {
      this.presenter.props.sliderEnd = options.sliderEnd
      console.log(this.presenter.props.sliderEnd);
    } 
    this.presenter.init()
  }
}
