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

function displaySalaries(teleportTester) {
let resultsHTML = teleportTester.salaries.map((item, index) => {
  let barWidth = item.percentile_50;
  console.log(barWidth);
  let salary = item.percentile_50 ;
  return `<div id="item-${index}">
    <div class="category-title"><span>${item.job.id}</span><span>${salary}</span></div>
    <div class="graph-cont">
      <div class="bar-graph" style="width:${barWidth};"></div>
    </div>
  </div>`
}).join('');
console.log(resultsHTML);
$('#results-list').append(resultsHTML);
};


function testTeleport() {
<<<<<<< HEAD
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
=======
  const searchURLs = [`https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores`,
  `https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/salaries`]
  console.log(searchURLs);
  Promise.all(searchURLs.map(url =>
    fetch(url)
    .then(checkResults)
    .then(response => response.json())
    //.then(responseJson => displayResults(responseJson))
    //.catch(err => {
      //$('#js-error-message').text(`Something went wrong: ${err.message}`);
      //$('#results').addClass('hidden');console.log(responseJson);
  ))
  
  .then(data => {
    console.log(data);
     const qualityOfLife = data[0];
     const qualityOfSalaries = data[1];

     console.log(data[0], data[1]) 

     displayResults(qualityOfLife);
     displaySalaries(qualityOfSalaries);

  })
}
    
function checkResults(response){
  if (response.ok) {
    console.log(response);
   return Promise.resolve(response);
  } 
  throw new Error(response.statusText);
>>>>>>> multiTeleport
}

/*function handleJson(response){
  console.log(response);
  return response.json();
}*/



      // displays an unordered list of the categories and the score associated with them
