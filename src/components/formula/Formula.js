import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(event) {
    const text = event.target.textContent.trim()
    // formula (название компонента откуда идет)
    // input название события
    this.$emit('formula: input', text)
  }

  onClick() {
    console.log('mk')
  }
}
