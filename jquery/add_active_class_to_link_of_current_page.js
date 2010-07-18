$('a[href]').each(function(){
  var url_length = 0
  $('a[href]').each(function(){
    if(window.location.toString().match(this.href) && this.href.length>url_length)
    {
      $('a.active').removeClass('active')
      $(this).addClass('active')
      ul_length = this.href.length
    }
  })
});

