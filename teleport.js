//

function displayResults(teleportTester) {
    console.log(teleportTester);
    for (var test in teleportTester.categories){//let i = 0; i < listOfRepos.length; i++
       $('#results-list').append(
        `<li><h3><a target="_blank" href="">${Object.values(teleportTester.categories[test])}</a></h3>
        </li>`
      )}};
    
    
      function testTeleport(){
        const searchURL = `https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores`;
        console.log(searchURL);
         fetch(searchURL)
           .then(response => {
             if (response.ok) {
               return response.json();
             }
             throw new Error(response.statusText);
           })
           .then(responseJson => displayResults(responseJson))
           .catch(err => {
             $('#js-error-message').text(`Something went wrong: ${err.message}`);
             $('#results').addClass('hidden');
           });
       }

testTeleport();


      // displays an unordered list of the categories and the score associated with them
