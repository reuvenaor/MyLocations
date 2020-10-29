import { UPDATE_CATEGORY, SET_CURRENT_CAT } from '../actionType';
import { setTools } from './globalAction';
import { batch } from 'react-redux';

export function toolsbarAction(tool) {
  return {
    type: tool.type,
    data: tool.data,
    id: tool.id
  }
}

export function updateCategory(str) {
  return {
    type: UPDATE_CATEGORY,
    str
  }
}

export function setCurrentCat(item) {
  return {
    type: SET_CURRENT_CAT,
    item
  }
}
