$(function() {
    /** Performs transition to different div to simulate different page. */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var li = $(this).parent();
            li.addClass('activemenubutton');
            li.siblings().removeClass('activemenubutton');
            var target = $(this.hash);
            var title = target.selector.slice(1,target.selector.length);
            var html = '<h1>'+title.charAt(0).toUpperCase()+title.slice(1)+'</h1>';
            if(html === "<h1>Eboards</h1>"){
                $('#title').html("<h1>EBoards</h1>")
            }else if(html === "<h1>Familytree</h1>"){
                $('#title').html("<h1>Family Tree</h1>")
            }else{
                $('#title').html(html);
            }
            $(target.selector).siblings().fadeOut(300);
            $(target.selector).delay(400).fadeIn(300);
            return false;
        }
    });
});