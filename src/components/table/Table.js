import {ExcelComponent} from '@core/ExcelComp';
import {createTable} from '@/components/table/table.template';
// eslint-disable-next-line require-jsdoc
export class Table extends ExcelComponent {
  static className = 'excel__table'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return createTable();
  }
}
