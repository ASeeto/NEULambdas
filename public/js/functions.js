$(document).ready(function() {

// +-------------------------------------------------------------+
// |                        SIDEBAR TOGGLE                       |
// +-------------------------------------------------------------+

    $('#toggle').on("click", function(event){
        event.preventDefault();
        $('#container').toggleClass('toggled');
    });

// +-------------------------------------------------------------+
// |                            TABLES                           |
// +-------------------------------------------------------------+

    var chapters1 = $('#chapters-table').DataTable({
        paging: false,
        "sDom": '<"top">rt<"bottom"><"clear">',
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [ 6 ],
                "visible": false
            }
        ]
    });

    $('#chapters-search').on('keyup', function() {
        chapters1.search($(this).val()).draw();
    })

// +-------------------------------------------------------------+
// |                      RESPONSIVE DESIGN                      |
// +-------------------------------------------------------------+

    var isPhoneDevice = "ontouchstart" in document.documentElement;
    if(isPhoneDevice){ 
        $('.arrow').hide(); 
    }

    $(window).resize(function() {
        // This will execute whenever the window is resized
        h = $(window).height(); // New height
        w = $(window).width(); // New width
        if(w < 1050){
          $('.filler1').hide();
          $('.filler2').hide();
          $('#crest').hide(); 
        } else {
          $('.filler1').show();
          $('.filler2').show();
          $('#crest').show(); 
        }
    });

});