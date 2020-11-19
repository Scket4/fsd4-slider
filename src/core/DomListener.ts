import { Dom } from "./dom"


export class DomListener {
  $root: Dom
  constructor($root: Dom) {
    if (!$root) {
      throw new Error(`no ${$root}`)
    }
    this.$root = $root
  }

  on(eventName: string, eventHandler: EventListener) {
    this.$root.on(eventName, eventHandler)
  }
}