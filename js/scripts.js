$(document).ready(function() {
  var age = parseInt(prompt("How old are you? "));

  if (age > 18) {
    $('#adult').show();
  } else if (age === 18) {
    alert("Welcome NEW voter!");
    $('#adult').show();
  } else {
    $('#minor').show();
  }
});
