import {ExcelComponent} from '@core/ExcelComp';

// eslint-disable-next-line require-jsdoc
export class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click']
    });
  }

  static className = 'excel__formula';
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `<div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log('Formula: onInput', event)
  }

  onClick() {
    console.log('onClick');
  }
}
