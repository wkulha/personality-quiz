//Gather user input, parse it, put it all into an array, reduce the array to a single number by adding everything up.
var getData = function() {
  let totalAnswers = [];
  $('input:checkbox:checked').each(function() {
    let currentAnswer = parseInt($(this).val());
    totalAnswers.push(currentAnswer);
  });
  let reducedAnswers = totalAnswers.reduce(function(sum, currentNum) {
    return sum + currentNum
  }, 0)
  return reducedAnswers;
}

//compare final score with thresholds for each of the types to determine which to display
var compareData = function(dataToCompare) {
  if (dataToCompare >= 10) {
    $('.noshow').hide();
    $('#koolaid').slideDown();
  } else if (dataToCompare < 10 && dataToCompare >= 5) {
    $('.noshow').hide();
    $('#adjusted').slideDown();
  } else if (dataToCompare < 5 && dataToCompare >= 2) {
    $('.noshow').hide();
    $('#nervous').slideDown();
  } else {
    $('.noshow').hide();
    $('#miserable').slideDown();
  }
}



$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    $('#quizArea').hide();
    var userInput = getData();
    compareData(userInput);
  });
});
