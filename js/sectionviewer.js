// SHOW CLICKED SECTION ONLY
$(document).ready(function()

    // Event handler for clicks on navigation links:
    $('.ddsmoothmenu ul li ul li a').click(function()
    {
			var test = $(this).parents().attr('href');
        if($(this).attr('title')){
					var section = $(this).attr('title');
					$('#'+section).siblings().hide();
				}
    });
		
});