/*defining a function*/

console.log('Creating a scoreboard');

var results = [];

function addResult(newResult){
  results.push(newResult);
}

function updateScoreboard() {
  var output = '<h2>Scoreboard</h2>';
  var factor = document.getElementById('factor');

  //loop over all results and create html for the scoreboard
  for(var index = 0; index < results.length; index++){
    var result = results[index];
    output+='<h4>';
    output+= result.name + ' : ' + result.score + '/' + result.problems + ' factor Of ' + factor.value;
    output+='</h4>'
  }

  var scoresElement = document.getElementById('scores');
  scoresElement.innerHTML = output;
}

export { addResult, updateScoreboard };
