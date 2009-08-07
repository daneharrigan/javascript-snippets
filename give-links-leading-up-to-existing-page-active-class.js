document.observe('dom:loaded',function(){
  $$('a[href]').each(function(el){
    if(window.location.toString().match(el.href))
      el.addClassName('active');
  });
});
