import { 
  UPDATE_CATEGORY, 
  SET_CURRENT_CAT, 
  CREATE_CATEGORY, 
  SET_CURRENT_LOC, 
  CREATE_LOCATION,
  UPDATE_LOCATION
} from '../actionType';

export function toolsbarAction(tool) {
  return {
    type: tool.type,
    id: tool.id
  }
}

export function createCat(str) {
  return {
    type: CREATE_CATEGORY,
    str
  }
}

export function updateCategory(str) {
  return {
    type: UPDATE_CATEGORY,
    str
  }
}

export function setCurrentCat(item) {
  return {
    type: SET_CURRENT_CAT,
    item
  }
}

export function setCurrentLoc(item) {
  return {
    type: SET_CURRENT_LOC,
    item
  }
}


export function createLocation(obj) {
  return {
    type: CREATE_LOCATION,
    obj
  }
}

export function updateLocation(loc) {
  return {
    type: UPDATE_LOCATION,
    loc
  }
}