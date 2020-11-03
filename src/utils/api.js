
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

const categories = categoriesInit();

function generateCat() {
  return [...new Array(3)].map(i => {
    const rand = categories['c' + (Math.random() * 29).toFixed(0)];
    return {
      [0]: rand._name,
      [1]: {
        _name: rand._name
      }
    }
  })
}

export function locationsInit() {
  return [...new Array(MAX_CAT_INIT)].map((i, idx) => {
    return {
      name: 'name' + idx,
      address: 'add' + idx,
      coordinates: {
        latitude: 37 + idx,
        longitude: -120 + idx
      },
      category: generateCat()
    }
  });
}



