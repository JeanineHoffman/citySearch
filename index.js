'use strict';


function watchForm() {
    $('#city-search-form').submit(event => {
        event.preventDefault();
        const mapboxSearchTerm = $('#city-search-form').find('option:selected').attr("name");
        const teleportSearchTerm = $('#city-search-form .citySt').val();
        $("#results-list").empty();
        getCityMap(mapboxSearchTerm);
        getCityStats(teleportSearchTerm);
        getCityPhoto(mapboxSearchTerm);        
    });
}


$(watchForm);

