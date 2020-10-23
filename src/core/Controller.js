const { Model } = require("./Model")
const { View } = require("./Model")
const { isMouseDown } = require("./variables")

export class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
  }
}
