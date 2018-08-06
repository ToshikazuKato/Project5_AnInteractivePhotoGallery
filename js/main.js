jQuery(document).ready(function($) {

//Searchbox
$('#search').keyup(function() {

  let searchedWord = $('#search').val().toUpperCase();
  let caption = $('.caption');

  for(let i = 1; i < caption.length+1; i++) {

    //get data-lc-caption
    let result = $('#' + i).data('lcCaption').toUpperCase();

    if(result.indexOf(searchedWord) > -1){
      $('#' + i).parent().css('display', 'block');
    }else{
      $('#' + i).parent().css('display', 'none');
    }
  }

});//Searchbox



// Lightbox jQuery plugin
  $('a[data-rel^=lightcase]').lightcase({
    transitionIn: 'scrollLeft',
    transitionOut: 'scrollRight'
  });//Lightbox


}); //jQuery
