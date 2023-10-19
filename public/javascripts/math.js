$(function(){
  $('#btn1').click( () => {
    let num1 = $('#number1').val();
    let num2 = $('#number2').val();

    if(num1 == '' || num2 == '')
    {
      alert('請輸入數字');
      return;
    }
    $.post(
      '/math/' + num1 + '/' + num2 + '/1',
      (data) => {
        $('#result').val(data.result);
      }
    );
  })

  $('#btn2').click(() => {
    let num1 = $('#number1').val();
    let num2 = $('#number2').val();

    if(num1 == '' || num2 == '')
    {
      alert('請輸入數字');
      return;
    }
    $.post(
      '/math/' + num1 + '/' + num2 + '/2',
      (data) => {
        $('#result').val(data.result);
      }
    );
  })

  $('#btn3').click(() => {
    let num1 = $('#number1').val();
    let num2 = $('#number2').val();

    if(num1 == '' || num2 == '')
    {
      alert('請輸入數字');
      return;
    }
    $.post(
      '/math/' + num1 + '/' + num2 + '/3',
      (data) => {
        $('#result').val(data.result);
      }
    );
  })

  $('#btn4').click(() => {
    let num1 = $('#number1').val();
    let num2 = $('#number2').val();

    if(num1 == '' || num2 == '')
    {
      alert('請輸入數字');
      return;
    }
    $.post(
      '/math/' + num1 + '/' + num2 + '/4',
      (data) => {
        $('#result').val(data.result);
      }
    );
  })
})