import { Label } from "../components/Label"
import { Track } from "../components/Track"
import { TrackSelect } from "../components/TrackSelect"
import { Scale } from "../components/Scale"
import { Point } from "../components/Point"
import { Settings } from "../components/Settings"
import { Model } from "./Model";
import { View } from "./View";

export class Presenter {
  constructor(emmiter, selector) {
    this.emmiter = emmiter
    this.model = new Model(this.emmiter)
    this.view = new View(this.emmiter, [Track, Point, Label, TrackSelect, Scale, Settings], selector)
  }
}
