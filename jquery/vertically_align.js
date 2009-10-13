(function($){
  $.fn.verticallyAlign = function()
  {
    this.each(function(){
      var $element = $(this);
      var $parent = $element.parent();

      var parent_height = $parent.outerHeight();
      var element_height = $element.outerHeight();

      if(parent_height>element_height)
      {
        var existing_value = $element.css('position');
        var offset = parseInt($element.css('top').replace(/(px|auto)/,'')+0)+(parent_height-element_height)/2;

        if($.inArray(existing_value,['relative','absolute']) == -1)
          $element.css('position','relative');

        $element.css('top',offset);
      }
    });
  }
})(jQuery);
