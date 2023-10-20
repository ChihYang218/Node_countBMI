$(function(){
  $('#btnBMI').click( () => {
    let gender = $('input[name="inlineRadioOptions"]:checked').val();
    let height = $('#number1').val();
    let weight = $('#number2').val();

    if(gender != 'vboy' && gender != 'vgirl')
    {
      alert('請選擇性別');
      return;
    }
    else if(height == '' || weight == '')
    {
      alert('請輸入身高或體重');
      return;
    }

    $.post(
      '/bmi/' + gender + '/' + height + '/' + weight,
      (data) => {
        $('#bmi').val(data.bmi);
        $('#result').val(data.result);
      }
    )
  })
})