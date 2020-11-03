import { Label } from "../components/Label"
import { Track } from "../components/Track"
import { TrackSelect } from "../components/TrackSelect"
import { Scale } from "../components/Scale"
import { Point } from "../components/Point"
import { Settings } from "../components/Settings"
import { Model } from "./Model";
import { View } from "./View"

export class Presenter {
  constructor(emmiter, selector) {
    this.emitter = emmiter
    this.view = new View(this.emitter, [Track, Scale, Point, Label, TrackSelect, Settings], selector)
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