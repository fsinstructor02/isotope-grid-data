/*Js Jq functions etc*/
jQuery(function(){ // JQuery function call to run code

    var i;
    var cat;
    var imageColor;
    var titleName;
    var linkH;
    var button1;
    var button2;
    var button3;

    for (i = 0; i < dataC.length; i++) { 

      cat = dataC[i]["cat"];
      imageColor = dataC[i]["image"];
      titleName = dataC[i]["title"];
      linkH = dataC[i]["link"];

      $(".grid-container").append( "<a href=" + linkH + " class='grid-blocks " + cat + "' data-category='transition'><img class='grid-blocks-image' src='"+ imageColor +"'/><div class='grid-blocks-title'>" + titleName + "</div></a>" );
    }


      var $grid = $('.grid-container').isotope({
        // main isotope options
        itemSelector: '.grid-blocks',
        layoutMode: 'masonry',
        resizable: false,
        filter: '*',
        fitWidth: false,
        sortAscending : false,
        isFitWidth: true,
        masonry: {
            columnWidth: 5
        }
      });

    //   $grid = $('.product-listing-full').isotope({
    //     itemSelector: '.product-listing-sort-item',
    //     layoutMode: 'masonry',
    //     resizable: false,
    //     filter: '*',
    //     fitWidth: false,
    //     sortAscending : false,
    //     isFitWidth: true,
    //     masonry: {
    //         columnWidth: 355
    //     }
    // });


      button1 = $('.button-1');
      button2 = $('.button-2');
      button3 = $('.button-3');

      $('.grid-buttons').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).addClass('active');
      });

      button1.click(function() {
       button1.addClass('active-button');
       button2.removeClass('active-button');
       button3.removeClass('active-button');
      });

      button2.click(function() {
        button2.addClass('active-button');
        button1.removeClass('active-button');
        button3.removeClass('active-button');
      });

      button3.click(function() {
        button3.addClass('active-button');
        button2.removeClass('active-button');
        button1.removeClass('active-button');
      });

});(jQuery); 


