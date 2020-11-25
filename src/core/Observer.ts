export class Observer {
  listeners: any
  constructor() {
    this.listeners = {}
  }

  trigger(event: string, ...args: any) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    } 
    this.listeners[event].forEach((listener: any) => {
      listener(...args)
    })
    return true
  }

  subscribe(event: string, fn: any) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
  }

  cleanSubscribers() {
    this.listeners = {}
  }
}