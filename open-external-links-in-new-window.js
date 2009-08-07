document.observe('dom:loaded',function(){
  var domain = document.domain.sub('^http://','').sub('^www.',''); // get domain
  $$('a[href^=http]').each(function(el){ // get all links on the page
    var url = el.href.sub('^http://','').split('/').shift(); // get base url
    if(!url.match(domain+'$'))
    {
      el.observe('click',function(event){
        Event.stop(event);
        window.open(el.href); // and open
      });
    }
  });
});
