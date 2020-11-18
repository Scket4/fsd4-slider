// import { capitalize } from "./utils"


export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`no ${$root}`)
    }
    this.$root = $root
  }

  on(eventName, eventHandler) {
    this.$root.on(eventName, eventHandler)
  }

//   initDOMListeners() {
//     this.listeners.forEach(list => {
//       const method = capitalize(list)
//       this[method] = this[method].bind(this)
//       this.$root.on(list, this[method])
//     })
//   }

//   removeDOMListeners() {
//     this.listeners.forEach(listener => {
//       const method = getMethodName(listener)
//       this.$root.off(listener, this[method])
//     })
//   }
}

// // input => onInput
// function getMethodName(eventName) {
//   return 'on' + capitalize(eventName)
// }

