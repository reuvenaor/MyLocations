import {
  UPDATE_CATEGORY,
  SET_CURRENT_CAT,
  DELETE, UPDATE,
  CREATE_CATEGORY,
  SET_CURRENT_LOC,
  CREATE_LOCATION,
  DELETE_LOCATION,
  UPDATE_LOCATION
} from '../actionType';
import { categoriesInit, locationsInit } from '../../utils/api';
import { EpLocation } from '../../utils/enums';


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
  currentLocation: EpLocation,
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
    case CREATE_LOCATION:
      return {
        ...state,
        locations: state.locations.concat(action.obj)
      }
    case DELETE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter((i, idx) => idx !== state.currentLocation.id),
        currentLocation: locationsState.currentLocation
      }
    case UPDATE_LOCATION:
      const updateLoc = [...state.locations];
      updateLoc[action.loc.id] = action.loc
      return {
        ...state,
        locations: updateLoc,
        currentLocation: locationsState.currentLocation
      }
    default:
      return state;
  }
};

export default reducer;
