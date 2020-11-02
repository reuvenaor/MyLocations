
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

const categories =  categoriesInit();

export function locationsInit() {
  return [...new Array(MAX_CAT_INIT)].map((i, idx) => {
    return {
      name: idx,
      address: idx,
      coordinates: {
        lat: '',
        lng: ''
      },
      category: [categories['c1'], categories['c2'], categories['c3']]
    }
  });
}



