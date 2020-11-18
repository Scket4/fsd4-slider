
import { Model } from "../Model/Model";
import { View } from "../View/View"
import { transpileModule } from "typescript"
import { mouseMovePoint } from "./pointMove";

export class Presenter {
  constructor(emmiter, selector) {
    this.emitter = emmiter
    this.view = new View(this.emitter, selector)
    this.model = new Model(this.emitter)
  }

  init() {
    this.view.init()
    this.model.init()
    // this.emitter.subscribe('modelToPresenter', (prop, val) => this.presenterToView(prop, val))
    // this.emitter.subscribe('isVertical: true', () => this.init())
    // this.emitter.subscribe('viewToPresenter', obj => this.viewToPresenter(obj)) 
    this.emitter.subscribe('viewToPresenter', (props) => this.pointMove(props))
    // this.emitter.subscribe('stopMove', this.pointMove = null)
  }

  // viewToPresenter(obj) {
  //  Object.keys(obj).forEach(key => {
  //    this.model.changeProperties(key, obj[key])
  //  })
  // }

  // presenterToView(prop, val) {
  //   this.view.makeChange(prop, val)
  // }

  pointMove(props) {
    mouseMovePoint(props)
  }
}