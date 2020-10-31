import { capitalize } from "./utils"


export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no ${$root}`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach(list => {
      const method = capitalize(list)
      // console.log(this);
      this.$root.on(list, this[method])
    })
  }

  removeDOMListeners() {

  }
}

