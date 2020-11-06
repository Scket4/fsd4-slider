import { LabelMin } from "../components/LabelMin"
import { Track } from "../components/Track"
import { Scale } from "../components/Scale"
import { PointMin } from "../components/PointMin"
import { Settings } from "../components/Settings"
import { Model } from "./Model";
import { View } from "./View"
import { PointMax } from "../components/PointMax"
import { LabelMax } from "../components/LabelMax"
import { ProgressBar } from "../components/ProgressBar"

export class Presenter {
  constructor(emmiter, selector) {
    this.emitter = emmiter
    this.view = new View(this.emitter, [Track, Scale, PointMin, PointMax, LabelMin, LabelMax, ProgressBar, Settings], selector)
    this.model = new Model(this.emitter)
  }

  init() {
    this.view.init()
    this.model.init()
    this.emitter.subscribe('modelToPresenter', (prop, val) => this.presenterToView(prop, val))
    this.emitter.subscribe('viewToPresenter', obj => this.viewToPresenter(obj)) 
  }

  viewToPresenter(obj) {
   Object.keys(obj).forEach(key => {
     this.model.changeProperties(key, obj[key])
   })
  }

  presenterToView(prop, val) {
    this.view.makeChange(prop, val)
  }
}