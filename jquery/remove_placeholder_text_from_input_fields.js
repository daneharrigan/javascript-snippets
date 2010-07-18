$('input[type=text]').each(function(){
  var $input = $(this);
  if(!$input.attr('placeholder'))
    $input.attr('placeholder', this.value);
  
  $input.focus(function(){
    if(this.value == $input.attr('placeholder'))
      this.value = '';
    $input.addClass('focus');
  });

  $input.blur(function(){
    if(this.value == '')
      this.value = $input.attr('placeholder');
    $input.removeClass('focus');
   });
});

