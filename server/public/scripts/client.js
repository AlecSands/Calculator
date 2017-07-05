var answer;

$('document').ready(function() {
  console.log('jquery sourced');

  // Adds the two input numbers together
  $('#add').on('click', function() {
    var numberOne = $('#numberOne').val();
    var numberTwo = $('#numberTwo').val();
    console.log(numberOne + "" + numberTwo);
    // Sends data to server under the 'add' channel
    $.ajax({
      type: 'POST',
      url: '/add',
      data: {
        numberOne: numberOne,
        numberTwo: numberTwo
      },
      // Takes the response data and adds it to the DOM
      success: function(response) {
        answer = parseInt(response);
        console.log(answer);
        $('#answer').text(Number(answer));
      }
    });
  });

  // Subtracts the second number from the first
  $('#subtract').on('click', function() {
    var numberOne = $('#numberOne').val();
    var numberTwo = $('#numberTwo').val();
    console.log(numberOne + "" + numberTwo);
    // Sends data to server under the 'subtract' channel
    $.ajax({
      type: 'POST',
      url: '/subtract',
      data: {
        numberOne: numberOne,
        numberTwo: numberTwo
      },
      // Takes the response data and adds it to the DOM
      success: function(response) {
        answer = parseInt(response);
        console.log(answer);
        $('#answer').text(Number(answer));
      }
    });
  });

  // Multiplies the two input numbers together
  $('#multiply').on('click', function() {
    var numberOne = $('#numberOne').val();
    var numberTwo = $('#numberTwo').val();
    console.log(numberOne + "" + numberTwo);
    // Sends data to server under the 'multiply' channel
    $.ajax({
      type: 'POST',
      url: '/multiply',
      data: {
        numberOne: numberOne,
        numberTwo: numberTwo
      },
      // Takes the response data and adds it to the DOM
      success: function(response) {
        answer = parseInt(response);
        console.log(answer);
        $('#answer').text(Number(answer));
      }
    });
  });

  // Divides the second number into the first
  $('#divide').on('click', function() {
    var numberOne = $('#numberOne').val();
    var numberTwo = $('#numberTwo').val();
    console.log(numberOne + "" + numberTwo);
    // Sends data to server under the 'divide' channel
    $.ajax({
      type: 'POST',
      url: '/divide',
      data: {
        numberOne: numberOne,
        numberTwo: numberTwo
      },
      // Takes the response data and adds it to the DOM
      success: function(response) {
        answer = parseInt(response);
        console.log(answer);
        $('#answer').text(Number(answer));
      }
    });
  });
});
