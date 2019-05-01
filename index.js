'use strict';


function watchForm() {
    var $results = document.querySelector('.results');
    var appendToResult = $results.insertAdjacentHTML.bind($results, 'afterend');
    TeleportAutocomplete.init('.my-input').on('change', function(value) { console.log(value);
    console.log(JSON.stringify(value, null, 2))
      //$('#city-search-form').change(event => {
        event.preventDefault();
        const mapboxSearchTerm = [value.longitude, value.latitude];
        const photoSearchTerm = `${value.name}, ${value.admin1DivisionCode}`;
        const teleportSearchTerm = value.uaSlug;
        $("#results-list").empty();
        console.log(mapboxSearchTerm);
        console.log(teleportSearchTerm);
        loadMap(mapboxSearchTerm);
        getCityStats(teleportSearchTerm);
        getCityPhoto(photoSearchTerm);        
    });
}


$(watchForm);

