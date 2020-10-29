import { SET_LOADER, SET_TOOLS } from '../actionType';
import { ToolsBar } from '../../utils/enums';

const initialState = {
  error: false,
  loader: false,
  toolsbar: ToolsBar,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.bool
      }
    case SET_TOOLS:
      return {
        ...state,
        toolsbar: {
          ...state.toolsbar,
          ...action.obj
        }
      }
    default:
      return state;
  }
};

export default reducer;
