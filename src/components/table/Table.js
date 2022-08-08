import {ExcelComponent} from '@core/ExcelComp';
import {createTable} from '@/components/table/table.template';
// eslint-disable-next-line require-jsdoc
export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return createTable(20);
  }
}
