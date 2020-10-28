import { SET_LOADER } from '../actionType';

const initialState = {
  error: false,
  loader: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.bool
      }
    default:
      return state;
  }
};

export default reducer;
