'use strict';

//

function displayResults(teleportTester) {
  // for (let test in teleportTester.categories) {//let i = 0; i < listOfRepos.length; i++
  //   $('#results-list').append(
  //     `<div>
  //       <h3>${Object.values(teleportTester.categories[test])}</a></h3>
  //     </div>`
  //   )
  // }
  //for (let test in teleportTester.categories) {
  //let categories = teleportTester.categories;
  let resultsHTML = teleportTester.categories.map((item, index) => {
    let barWidth = `${item.score_out_of_10 * 10}%`;
    let score = Math.round(item.score_out_of_10 * 10) / 10;
    return `<div id="item-${index}">
      <div class="category-title"><span>${item.name}</span><span>${score}</span></div>
      <div class="graph-cont">
        <div class="bar-graph" style="width:${barWidth};"></div>
      </div>
    </div>`
  }).join('');
  $('#results-list').append(resultsHTML);
};


function testTeleport() {
  const searchURL = `https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores`;
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



      // displays an unordered list of the categories and the score associated with them
