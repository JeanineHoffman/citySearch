'use strict';






// let STORE = {
//     cityData: {
//         name: "New York",
//         quality: randomQual()
//     },
//     maybeSomeOtherThing: 42,
// };

function randomQual(a, b, type) {
    let num = a + Math.random() * (b - a);
    switch(type) {
        case 1:
            num *= 1000;
            break;

        case 2:
            num *= 10000;
            break;
    }
    return Math.round(num);
}

function displayResults(){//responseJson) {
    let cityData = {
        name: "New York",
        costLiving: randomQual(1, 5, 1),
        jobSalary: randomQual(2, 20, 2),
        education: randomQual(10, 100, 3),
    }
    let keys = Object.keys(cityData);
    // let resultsHTML = keys.map(item => {
    //     return `<h4>city: ${cityData[item]}</h4><p>quality 1: ${item.quality1}</p><p>quality 2: ${item.quality2}</p><hr>`;
    // }).join('');
    let resultsHTML = `<h3>${cityData.name}</h3>
        <p>Rent: $${cityData.costLiving} / month</p>
        <p>Salary: $${cityData.jobSalary} / year</p>
        <p>Education: ${cityData.education}%</p>`;
    $("#list-of-things").html(resultsHTML);
    //font-family: "Quicksand", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

const main = () => {
    // testTeleport();
    //displayResults();
    getCityCoordinates('portland');
}

$(main);
// $(watchForm);








// function formatQueryParams(params) {
//   const queryItems = Object.keys(params)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//   return queryItems.join('&');
// }

// function getStateParks(query, maxResults=10) {
//   const params = {
//     stateCode: query,
//     limit: maxResults - 1,
//     api_key: apiKey
//   };
//   const queryString = formatQueryParams(params)
//   const url = searchURL + '?' + queryString;

//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         let responseJson = response.json();
//         return responseJson;
//       }
//       throw new Error(response.statusText);
//     })
//     .then(responseJson => displayResults(responseJson))
//     .catch(err => {
//       $('#js-error-message').text(`Something went wrong: ${err.message}`);
//     });
// }

// function displayResults(responseJson) {
//   let listItemsHTML = responseJson.data.map(item => {
//     return `
//       <li><a href="${item.url}" target="_blank"><h1>${item.fullName}</h1></a><p>${item.description}</p></li><hr>
//     `;
//   }).join('');
//   $('.results-list').html(listItemsHTML);
//   $('.searchresults').removeClass('hidden');
// }

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     const searchTerm = $('#state-search').val();
//     const maxResults = $('#limit-input').val();
//     getStateParks(searchTerm, maxResults);
//   });
// }

// $(watchForm);