$(document).ready(function(){
    $('.card-header').click(function(){
      var $icon = $(this).find('.material-symbols-outlined');
      $icon.toggleClass('expanded');
      if($icon.hasClass('expanded')){
        $icon.text('expand_less');
      } else {
        $icon.text('expand_more');
      }
    });
  });