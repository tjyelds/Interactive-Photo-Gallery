// Lightbox options

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'showImageNumberLabel': true,
	'maxHeight': 500,
	'wrapAround': true
});


// Custom search feature on unordered list

$(function() {
	$('#searchBox').keyup(function() {
		
		var search = $(this).val().toLowerCase(); // Store search results in variable
		
    $('.pictures li').each(function() {
	 	 		
				$(this).find('a').attr('data-lightbox', 'photos'); // Add data-lightbox attribute
				
         var text = $(this).find('a').attr('data-title'); // Variable to store data-title attribute of each image
			
         if(text.includes(search)) {
					 $(this).show();
         } else {
					 $(this).hide().find('a').removeAttr('data-lightbox'); // Remove attribute so won't be included in lightbox slideshow
         }
				 
				 // Show a text result if no results are found
				 if ($('.pictures li').children(':visible').length === 0) {
					 $('#no-results').css('display', 'block');
				 } else {
					 $('#no-results').css('display', 'none');
				 }
    });
		
	});
});