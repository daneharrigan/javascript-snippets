(function($){
	$.fn.removeClasses = function()
	{
		for(var i=0;arguments.length>i;i++)
			$(this).removeClass(arguments[i]);
	}
})(jQuery);