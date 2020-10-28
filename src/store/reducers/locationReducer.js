import { UPDATE_CATEGORY } from '../actionType';

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
  },
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

const reducer = (state = {...categoriesState, ...locationsState}, action) => {
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
    default:
      return state;
  }
};

export default reducer;
