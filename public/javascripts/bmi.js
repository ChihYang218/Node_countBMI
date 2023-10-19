$(function(){
  $('#btnBMI').click( () => {
    let gender = $('input[name="inlineRadioOptions"]:checked').val();
    if(gender != 'vboy' && gender != 'vgirl')
    {
      alert('請選擇性別');
      return;
    }
  })
})