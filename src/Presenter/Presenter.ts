
import { Model } from "../Model/Model";
import { View } from "../View/View"
import { pointMove } from "./pointMove";
import { Observer } from "../core/Observer";
import { completeValue, properties } from "../core/globals";

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
    this.emitter.subscribe('pointToPresenter', (e: MouseEvent, point: string) => this.pointMove(e, point))
    this.emitter.subscribe('pointMaxMoveModelToPresenter', (values: completeValue) => this.pointMaxChange(values))
    this.emitter.subscribe('pointMinMoveModelToPresenter', (values: completeValue) => this.pointMinChange(values))
  }

  pointMove(e: MouseEvent, point: string) {
    const values: properties = this.view.getData()
    const newValue: completeValue = pointMove(e, values)
    if (point === 'min') {
      this.model.pointMinChange(newValue)
      
    } else if (point == 'max') {
      this.model.pointMaxChange(newValue)    
   }
  }

  pointMaxChange(values: completeValue) {
    this.view.pointMaxChange(values)
  }

  pointMinChange(values: completeValue) {
    this.view.pointMinChange(values)    
  }
  
}