import {ExcelComponent} from '@core/ExcelComp';
// eslint-disable-next-line require-jsdoc
export class ToolBar extends ExcelComponent {
  static className = 'excel__toolbar'
  // eslint-disable-next-line require-jsdoc
  toHTML() {
    return `<div class="button">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="button">
                <i class="material-icons">format_align_right</i>
            </div>
            <div class="button">
                <i class="material-icons">format_bold</i>
            </div>
            <div class="button">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="button">
                <i class="material-icons">format_underline</i>
            </div>`;
  }
}
