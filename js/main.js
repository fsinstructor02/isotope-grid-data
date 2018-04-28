/*Js Jq functions etc*/
jQuery(function(){ // JQuery function call to run code

    var i;
    var imageColor;
    var titleName;

    for (i = 0; i < dataC.length; i++) { 

      imageColor =dataC[i]["image"];
      titleName = dataC[i]["title"];

      $(".grid-container").append( "<div class='grid-blocks'><div class='grid-blocks-image' style='background-color:"+ imageColor +"'></div><div class='grid-blocks-title'>" + titleName + "</div></div>" );
    }


      var $grid = $('.grid-container').isotope({
        // main isotope options
        itemSelector: '.grid-blocks',
        // set layoutMode
        layoutMode: 'masonry'
      })

});(jQuery); 


