export class Observer {
  constructor() {
    this.listeners = {}
  }

  trigger(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    } 
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
  }

  cleanSubscribers() {
    this.listeners = {}
  }
}