'use strict'

// map.flyTo({center: e.features[0].geometry.coordinates});
// map.flyTo({center: coordinates});

// function renderCityMap(){
// return $('.jsMapReturn').join(
// `<div id='map' style='width: 400px; height: 300px;'></div>
// <script>
// mapboxgl.accessToken = 'pk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1dW9pOWdhMGw0bTQzcWhnOTgyYXVraiJ9.ol6UTML3-IKNBMqdncW2Mw';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });
// </script>`) 
// }

function getCityLatLong(){
const textName = $('.citySt').val();
const apiKey='sk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1eXhvc2Y3MTJ2MzQzcHAzOGdybHcxbyJ9.Y5pWdiwa9_I4yGgPnKYAmA';

fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/$(textName).json?access_token=pk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1dW9pOWdhMGw0bTQzcWhnOTgyYXVraiJ9.ol6UTML3-IKNBMqdncW2Mw')
  .then(response, function(event){
    if (response.ok){
      let latLong = response.Json();
    }
     return latLong;
  })
    .catch(err, function(event)  {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    })
  }
function getMap(long, lat) {
    const params = {
      cityLocation: long, lat,
      api_key: 'sk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1eXhvc2Y3MTJ2MzQzcHAzOGdybHcxbyJ9.Y5pWdiwa9_I4yGgPnKYAmA'
    };
    fetch(url)
      .then(response, function (event) {
        if (response.ok) {
          let responseJson = response.json();
          return responseJson;
      }
      throw new Error(response.statusText);
      })

      .then(responseJson, function (event){
        displayMap(responseJson)
      }) 
        .catch(err, function (event)  {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
      });
  }
  



// let token = 'sk.eyJ1IjoiamVhbmluZWgiLCJhIjoiY2p1eXhvc2Y3MTJ2MzQzcHAzOGdybHcxbyJ9.Y5pWdiwa9_I4yGgPnKYAmA';

