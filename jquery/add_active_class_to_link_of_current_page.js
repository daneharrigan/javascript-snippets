$('a[href]').each(function(){
	if(window.location.toString().match(this.href))
		$(this).addClass('active');
});
