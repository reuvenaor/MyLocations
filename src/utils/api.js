
const MAX_CAT_INIT = 30;

export function categoriesInit() {
  let categoriesInit = {};
  for (let i = 0; i < MAX_CAT_INIT; i++) {
    Object.assign(categoriesInit, {
      ['c' + i]: {
        _name: 'c' + i
      }
    })
  } 
  return categoriesInit;
}



