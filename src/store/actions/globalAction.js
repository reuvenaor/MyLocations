import { SET_LOADER, SET_ERROR, SET_TOOLS } from '../actionType';
import {  } from '../../utils/api';
import { batch } from 'react-redux';



export function setTools(obj) {
  return {
    type: SET_TOOLS,
    obj
  }
}


export function setLoader(bool) {
  return {
    type: SET_LOADER,
    bool
  }
}

export function setError(res) {
  return {
    type: SET_ERROR,
    res
  }
}
