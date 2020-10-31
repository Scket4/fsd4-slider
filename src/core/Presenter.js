import { Model } from "./Model";

export class Presenter {
  constructor(emmiter) {
    this.emitter = emmiter
  }
  init() {
    this.emitter.subscribe('PRESENTER', () => {})
  }
}
