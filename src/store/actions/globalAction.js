import { SET_LOADER, SET_ERROR } from '../actionType';
import {  } from '../../utils/api';
import { batch } from 'react-redux';


function setLoader(bool) {
  return {
    type: SET_LOADER,
    bool
  }
}

function setError(res) {
  return {
    type: SET_ERROR,
    res
  }
}
