import { Label } from "../components/Label"
import { Track } from "../components/Track"
import { TrackSelect } from "../components/TrackSelect"
import { Scale } from "../components/Scale"
import { Point } from "../components/Point"
import { Settings } from "../components/Settings"
import { Model } from "./Model"
import { Observer } from "./Observer"
import { Presenter } from "./Presenter"
import { View } from "./View"

export class Slider {
  constructor(selector) {
    this.observer = new Observer()
    this.components = [Presenter, View, Model]
    this.selector = selector
  }

  render() {
    this.components.forEach(Comp => {
      let component = new Comp(this.observer, [Track, Point, Label, TrackSelect, Scale, Settings], this.selector)
      component.init()
      console.log(component);
    })
  }
}

