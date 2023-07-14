import {storage} from '@core/utils';
import {defaultStyles} from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // example: {'0:1': 'some text'}
  currentText: '',
  currentStyles: defaultStyles
}

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState
