export class Model {
  constructor() {
    this.activeScale = null,
    this.topPoint = null
  }

  activeScaleWidth(percent) {
    if (percent !== 'undefined') {
      this.activeScale = percent
      return this
    } 
    return this.activeScale
    }
  } 

