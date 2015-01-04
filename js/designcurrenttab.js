// CURRENT TAB SELECTION
$(document).ready(function()
{
    // Get the name of the page. Split the URL at the '/':s and get the last part
    // with pop():
    var pageName = (location.pathname).split('/').pop();
		
    // If we couldn't get a page name, assume default home page:
    if( pageName == '' )
    {
				// Add 'current' class to home li
        var home = $('#default').addClass("current");
				
        // Remove 'current' from all siblings of li:
        $(this).parent('li').siblings('li').removeClass("current");
				
				// exit function
				return false;
    }

		// If submenu item clicked, add current to top level navigation
		if(pageName == 'Story' || pageName == 'NationalHistory')
    {
				// Add 'current' class to home li
        var home = $('#story').addClass("current");
				
        // Remove 'current' from all siblings of li:
        $(this).parent('li').siblings('li').removeClass("current");
				
				// exit function
				return false;
    }
		
		// If submenu item clicked, add current to top level navigation
		if(pageName == 'EBoards' || pageName == 'Chapters')
    {
				// Add 'current' class to home li
        var home = $('#family').addClass("current");
				
        // Remove 'current' from all siblings of li:
        $(this).parent('li').siblings('li').removeClass("current");
				
				// exit function
				return false;
    }
		
    // Event handler for clicks on navigation links:
    $('.navigation a').click(function()
    {
				// Create selector for li
				// $(this) refers to the clicked element.
        var parent = $(this).parent('li');
				
				// Add 'current' to style li of clicked a
				parent.addClass("current");
        // Remove 'current' from all siblings of li:
        $(this).parent('li').siblings('li').removeClass("current");
    });

    // Search through all link elements in the nav menu:
    $('.navigation').find('a').each(function(index, value)
    {   
        // Append a '$' to the pagename to make the match()-function search
        // from the end of the href value:
        pageName += '$';

        if( value.href.match(pageName))
        {
            // If the pagename matches the href-attribute, then add the 'current'
            // class to the parent li, and show parent ul:s:
            $(this).parent('li').addClass('current').parents('ul');    
        }
    });
});