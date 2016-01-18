$( document ).ready(function() {
  var $navTrigger = $('.nav-trigger');
  var $navList = $('.nav-list');
  $navTrigger.on('click',function(){
    $(this).toggleClass('open');
    $navList.toggleClass('show');
  });
});
