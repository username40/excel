/** */
import {$} from '@core/dom';

// eslint-disable-next-line require-jsdoc
export class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = $(selector);
    this.components = options.components || []
  }

  // eslint-disable-next-line require-jsdoc
  getRoot() {
    const $root = $.create('div', 'excel');
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      if (component.name) {
        window['c'+component.name] = component
      }
      $el.html(component.toHTML());
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
