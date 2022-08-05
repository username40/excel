import {ExcelComponent} from '@core/ExcelComp';

// eslint-disable-next-line require-jsdoc
export class Header extends ExcelComponent {
  static className = 'excel__header'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `<input type="text" class="input" value="Новая таблица">
            <div>
                <div class="button">
                    <i class="material-icons">delete</i>
                </div>
                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>
            </div>`;
  }
}
