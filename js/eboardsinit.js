$(document).ready(function(){

    // Initiate EBoard Header
    $.each(eboards, function(index, group){
        if(index != 0){
            var eb = $('<div id="eboard'+index+'" class="group">'+
                            '<div class="eboard_header">'+
                                '<p class="title">'+group.semester+'</p>'+
                            '</div>'+
                            '<div class="eboard_members"></div>'+
                          '</div>');
            $('#eboards .contentbox').prepend(eb);
        }
    });
    
    // Initiate Profile Pictures
    $.each(eboards, function(index, eboard){
    if(index!=0){
            var b = $('<div class="secretary eboard_member">'+
                                '<img class="popper profile" data-popbox="pop'+eboard["secretary"]+'" src="img/family/'+eboard["secretary"]+'.png" />'+
                                '<br /><b>Secretary</b><br />'+brothers[eboard.secretary].name+'</div>');
            $('#eboard'+index+' .eboard_members').append(b);
            var b = $('<div class="internal eboard_member">'+
                                '<img class="popper profile" data-popbox="pop'+eboard["internal"]+'" src="img/family/'+eboard["internal"]+'.png" />'+
                                '<br /><b>Internal</b><br />'+brothers[eboard.internal].name+'</div>');
            $('#eboard'+index+' .eboard_members').append(b);
            var b = $('<div class="president eboard_member">'+
                                '<img class="popper profile" data-popbox="pop'+eboard["president"]+'" src="img/family/'+eboard["president"]+'.png" />'+
                                '<br /><b>President</b><br />'+brothers[eboard.president].name+'</div>');
            $('#eboard'+index+' .eboard_members').append(b);
            var b = $('<div class="external eboard_member">'+
                                '<img class="popper profile" data-popbox="pop'+eboard["external"]+'" src="img/family/'+eboard["external"]+'.png" />'+
                                '<br /><b>External</b><br />'+brothers[eboard.external].name+'</div>');
            $('#eboard'+index+' .eboard_members').append(b);
            var b = $('<div class="treasurer eboard_member">'+
                                '<img class="popper profile" data-popbox="pop'+eboard["treasurer"]+'" src="img/family/'+eboard["treasurer"]+'.png" />'+
                                '<br /><b>Treasurer</b><br />'+brothers[eboard.treasurer].name+'</div>');
            $('#eboard'+index+' .eboard_members').append(b);
        }
    });
});