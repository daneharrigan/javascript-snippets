document.observe('dom:loaded',function(){
  $$('#header ul a').each(function(el){
    if(window.location.toString().match(el.href))
      el.addClassName('active');
  });
});
