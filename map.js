'use strict'

// map.flyTo({center: e.features[0].geometry.coordinates});
// map.flyTo({center: coordinates});
const loadMap = (cityCoordinates) => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1dW9pOWdhMGw0bTQzcWhnOTgyYXVraiJ9.ol6UTML3-IKNBMqdncW2Mw';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    center: cityCoordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
  $('.hidden').toggleClass('hidden');
}


// function renderCityMap() {
//   let cityLatLong = cityGeoCodeInfo.features[0].center;
//   return $('.jsMapReturn').join(
//     `<div id='map' style='width: 400px; height: 300px;'></div>
//     <script>
//     mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1dW9pOWdhMGw0bTQzcWhnOTgyYXVraiJ9.ol6UTML3-IKNBMqdncW2Mw';
//     var map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11'
//     });
//     </script>`)
// }


// function getCityLatLong(){
// // const textName = $('.citySt').val();
// const apiKey='sk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1eXhvc2Y3MTJ2MzQzcHAzOGdybHcxbyJ9.Y5pWdiwa9_I4yGgPnKYAmA';

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/portland.json?access_token=pk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1dW9pOWdhMGw0bTQzcWhnOTgyYXVraiJ9.ol6UTML3-IKNBMqdncW2Mw')
//   .then(response, function(event){
//     if (response.ok){
//       let latLong = response.json();
//       console.log(latLong);
//       return latLong;
//     }
//     getMap(latLong);
//   })
//     .catch(err, function(event)  {
//       $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     })
//   }

// function getMap(long, lat) {
//     const params = {
//       cityLocation: long, lat,
//       api_key: 'sk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1eXhvc2Y3MTJ2MzQzcHAzOGdybHcxbyJ9.Y5pWdiwa9_I4yGgPnKYAmA'
//     };
//     fetch(url)
//       .then(response, function (event) {
//         if (response.ok) {
//           let responseJson = response.json();
//           return responseJson;
//       }
//       throw new Error(response.statusText);
//       })

//       .then(responseJson, function (event){
//         displayMap(responseJson)
//       }) 
//         .catch(err, function (event)  {
//         $('#js-error-message').text(`Something went wrong: ${err.message}`);
//       });
//   }

function getCityMap(cityName) {
  const searchURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  const accessToken = 'pk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1dW9pOWdhMGw0bTQzcWhnOTgyYXVraiJ9.ol6UTML3-IKNBMqdncW2Mw';
  const queryString = `${encodeURIComponent(cityName)}.json?`;
  const url = searchURL + queryString + `access_token=${accessToken}`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        let responseJson = response.json();
        // console.log(responseJson);
        return responseJson;
      }
      throw new Error(response.statusText);
    })
    .then(cityGeoCodeInfo => {
      let coords = cityGeoCodeInfo.features[0].center;
      //console.log(coords);
      loadMap(coords);
    });
}



function watchForm() {
  $('.submitBtn').submit(event => {
    event.preventDefault();
    getCityLatLong()
  });
}
