import { UPDATE_CATEGORY, SET_CURRENT_CAT, DELETE, UPDATE, CREATE_CATEGORY, SET_CURRENT_LOC } from '../actionType';
import { categoriesInit, locationsInit } from '../../utils/api';

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
  locations: locationsInit(),
  currentLocation: {
    name: '',
    address: '',
    coordinates: {
      lat: '',
      lng: ''
    },
    category: [categoriesState.categories['c1']]
  }
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
      const keys = Object.keys(state.categories);
      const num = parseInt(keys[keys.length - 1].slice(1)) + 1;
      return {
        ...state,
        categories: {
          ...state.categories,
          ['c' + num]: {
            _name: action.str
          }
        },
      }
    case SET_CURRENT_CAT:
      return {
        ...state,
        currentCategory: action.item
      }
    case SET_CURRENT_LOC: 
      return {
        ...state,
        currentLocation: action.item
      }
    default:
      return state;
  }
};

export default reducer;
