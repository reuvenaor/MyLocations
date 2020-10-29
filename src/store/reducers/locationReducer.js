import { UPDATE_CATEGORY, SET_CURRENT_CAT, DELETE } from '../actionType';

const categoriesState = {
  categories: {
    'c1': {
      _name: 'c1'
    },
    'c2': {
      _name: 'c2'
    },
    'c3': {
      _name: 'c3'
    },
    'c4': {
      _name: 'c1'
    },
    'c5': {
      _name: 'c2'
    },
    'c6': {
      _name: 'c3'
    },
    'c7': {
      _name: 'c1'
    },
    'c8': {
      _name: 'c2'
    },
    'c9': {
      _name: 'c3'
    },
    'c10': {
      _name: 'c1'
    },
    'c11': {
      _name: 'c2'
    },
    'c12': {
      _name: 'c3'
    },
    'c13': {
      _name: 'c1'
    },
    'c14': {
      _name: 'c2'
    },
    'c15': {
      _name: 'c3'
    },
  },
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
          ['c1']: {
            _name: action.res
          }
        },
      }
    case DELETE:
      const newCat = {...state.categories};
      delete newCat[action.id]
      return {
        ...state,
        currentCategory: categoriesState.currentCategory,
        categories: newCat
        // categories: {
        //   ...state.categories,
        //   [action.id]: null
        // }
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
