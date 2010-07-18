$('a[href]').each(function(){
  var url_length = 0
  if(window.location.toString().match(this.href) && this.href.length>url_length)
  {
    $('a.active').removeClass('active')
    $(this).addClass('active')
    ul_length = this.href.length
  }
});

