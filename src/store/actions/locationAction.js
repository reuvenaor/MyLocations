import { UPDATE_CATEGORY } from '../actionType';
import {  } from '../../utils/api';
import { batch } from 'react-redux';

export function updateCategory(str) {
  return {
    type: UPDATE_CATEGORY,
    res : str
  }
}
