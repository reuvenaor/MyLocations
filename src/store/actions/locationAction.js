import { UPDATE_CATEGORY, SET_CURRENT_CAT } from '../actionType';
import { } from '../../utils/api';
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

export function onSetCurrentCat(item) {
  return dispatch => {
    batch(() => {
      dispatch(setCurrentCat(item))
      item['0'] !== '' 
      ? dispatch(setTools({
        create: true,
        delete: true,
        read: true,
        update: true
      }))
      : 
      dispatch(setTools({
        create: true,
        delete: false,
        read: false,
        update: false
      }))
    })
  }
}

function setCurrentCat(item) {
  return {
    type: SET_CURRENT_CAT,
    item
  }
}
