import { UPDATE_CATEGORY, SET_CURRENT_CAT, DELETE, UPDATE, CREATE_CATEGORY } from '../actionType';
import { v4 as uuidv4 } from 'uuid';
import {categoriesInit} from '../../utils/api';

const categoriesState = {
  categories: categoriesInit(),
  currentCategory: {
    [0]: '',
    [1]: {
      _name: ''
    }
  }
}

const locationsState = {
  locations: [
    {
      name: '',
      address: '',
      coordinates: '',
      category: categoriesState.categories['c1']._name
    }
  ],
};

const reducer = (state = { ...categoriesState, ...locationsState }, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [state.currentCategory[0]]: {
            _name: action.str
          }
        },
      }
    case DELETE:
      const { [state.currentCategory[0]]: value, ...newCat } = state.categories;
      return {
        ...state,
        currentCategory: categoriesState.currentCategory,
        categories: newCat
      }
    case UPDATE:
      return {
        ...state,
        categories: {
          ...state.categories,
          [state.currentCategory[0]]: {
            _name: ''
          }
        },
      }
    case CREATE_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [uuidv4()]: {
            _name: action.str
          }
        },
      }
    case SET_CURRENT_CAT:
      return {
        ...state,
        currentCategory: action.item
      }
    default:
      return state;
  }
};

export default reducer;
