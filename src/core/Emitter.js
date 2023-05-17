// observer pattern
class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей если они есть
  // 'formula:done'
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // подписываемся на уведомления
  // Добавляем нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('slava', data => console.log('data: ', data))
// emitter.emit('123', 42)
// setTimeout(() => {
//   emitter.emit('slava', 'after 2 secs')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('slava', 'after 4 secs')
// }, 4000)
