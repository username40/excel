import {DomListener} from '@core/DomListener';
/** */
export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
  }

  // Возвращает шаблон компонента
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}
