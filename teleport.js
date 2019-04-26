//

function displayResults(teleportTester) {
    console.log(teleportTester);
    for (var test in teleportTester.categories){//let i = 0; i < listOfRepos.length; i++
       $('#results-list').append(
        `<li><h3><a target="_blank" href="">${Object.values(teleportTester.categories[test])}</a></h3>
        </li>`
      )};


      // displays an unordered list of the categories and the score associated with them