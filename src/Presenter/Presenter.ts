
import { Model } from "../Model/Model";
import { View } from "../View/View"
import { mouseMovePoint } from "./pointMove";
import { Observer } from "../core/Observer";
import { properties } from "../core/globals";

export class Presenter {
  emitter: Observer
  view: View
  model: Model
  constructor(emmiter: Observer, selector: string) {
    this.emitter = emmiter
    this.view = new View(this.emitter, selector)
    this.model = new Model(this.emitter)
  }

  init() {
    this.view.init()
    this.model.init()
    this.emitter.subscribe('modelToPresenterValueFrom', (val: number) => this.changeView(val))
    this.emitter.subscribe('viewToPresenter', (props: properties) => this.pointMove(props))
  }

  pointMove(props: properties) {
    let values = mouseMovePoint(props)
    this.model.valueFromChange(values.valueFromPos)
  }

  changeView(val: number) {
    this.view.changeData(val)
  } 
}