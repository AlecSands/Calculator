var answer;

$('document').ready(function() {
  console.log('jquery sourced');
  $('#add').on('click', function() {
    var numberOne = $('#numberOne').val();
    var numberTwo = $('#numberTwo').val();
    console.log(numberOne + "" + numberTwo);
    $.ajax({
      type: 'POST',
      url: '/add',
      data: {
        numberOne: numberOne,
        numberTwo: numberTwo
      },
      success: function(response) {
        answer = parseInt(response);
        console.log(answer);
        $('#answer').text(Number(answer));
      }
    });
  });
});
