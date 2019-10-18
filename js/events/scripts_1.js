jQuery(document).ready(function($) {
  $('#myCarousel').carousel({
      interval: 4000
  });
  $('#myCarousel2').carousel({
      interval: 6000
  });
  $('#myCarousel3').carousel({
      interval: 8000
  });    
    

  $('#carousel-text').html($('#slide-content-0').html());


    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click( function(){
            var id_selector = $(this).attr("id");
            var id = id_selector.substr(id_selector.length -1);
            var id = parseInt(id);
            $('#myCarousel3').carousel(id);
    });


    // When the carousel slides, auto update the text
    $('#myCarousel3').on('slid', function (e) {
            var id = $('.item.active').data('slide-number');
            $('#carousel-text').html($('#slide-content-'+id).html());
    });    
    
        

});