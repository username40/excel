import {storage} from '@core/utils';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // example: {'0:1': 'some text'}
  currentText: '',
}

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState
