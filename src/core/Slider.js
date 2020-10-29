import { $ } from "./dom"
import { Label } from "../components/Label"
import { Track } from "../components/Track"
import { TrackSelect } from "../components/TrackSelect"
import { Scale } from "../components/Scale"
import { Point } from "../components/Point"
import { Observer } from "./Observer"
import { View } from "./View"
import { Model } from "./Model"
import { Presenter } from "./Presenter"
import { Settings } from "../components/Settings"

export class Slider {
  constructor(selector) {
    this.observer = new Observer()
    this.view = new View(this.observer, [Track, Point, Label, TrackSelect, Scale, Settings], selector)
    // this.model = new Model(this.observer)
    // this.presenter = new Presenter(this.observer)
  }

  render() {
    this.view.render()
  }
  
}

