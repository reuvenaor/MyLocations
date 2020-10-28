const url = 'https://ruvenaor.com/';

async function fetchApi(endp = '') {
  try {
    const response = await fetch(url + endp, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.log('Error fetchApi called by ' + endp, error);
  }
}

// export async function autocompleteApi(q) {
//   return fetchApi('locations/v1/cities/autocomplete?q=' + q );
// }

// export async function currentApi(locKey) {
//   return fetchApi('currentconditions/v1/' + locKey + '?')
// }

// export async function forecastApi(locKey) {
//   return fetchApi('forecasts/v1/daily/5day/' + locKey + '?metric=true')
// } 


