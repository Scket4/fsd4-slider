export class Observer {
  constructor() {
    this.listeners = {}
  }

  trigger(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      console.log('none');
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
    console.log(this.listeners)
  }
}