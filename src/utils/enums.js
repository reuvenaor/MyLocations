export const Screens = {
  CAT_HOME: 'CategoriesScreen',
  CREATE: 'Create',
  CATEGORIES: 'Categories',
  LOCATIONS: 'Locations',
  LOCATION: 'Location'
}

export const ToolsBar = {
  create: true,
  delete: false,
  read: false,
  update: false,
}

export const EpLocation = {
  id: -1,
  name: '',
  address: '',
  coordinates: {
    latitude: 32.0853,
    longitude: 34.7818
  },
  category: []
}

export const EpCategory = { ['0']: '', ['1']: { _name: '' } };