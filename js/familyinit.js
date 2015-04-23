$(document).ready(function(){
    // Initiate Popup Boxes
    $.each(brothers, function(index, brother){
        if(index != 0){
            var brotherpopup =  $('<div class="popbox" id="pop'+index+'">'+
                                            '<h2>'+brother.name+'</h2>'+
                                            '<p><strong>House Roster #:</strong> '+index+'</p>'+
                                            '<p><strong>Nickname:</strong> '+brother.nickname+'</p></div>');
            $('#hiddenpopboxes').append(brotherpopup);
        }
    });

    // Initiate Class Header
    $.each(classInformation, function(index, group){
        if(index != 0){
            var groupname = $('<div id="'+group.letter+'" class="group">'+
                                '<div class="class_header">'+
                                    '<p class="title">'+group.letter+' Class</p>'+
                                    '<p class="subtitle">'+group.semester+'</p> '+
                                    '<br />'+
                                '</div>'+
                              '</div>');
            $('#family .contentbox').append(groupname);
        }
    });

    // Initiate Class Dad
    $.each(classInformation, function(index, group){
        if(index != 0){
            if(group.letter == "Charter"){
                var target =    $('<div class="class_dad">'+
                                        '<b>New Member Educators</b><br><br>'+
                                        '<div><img class="profile" src="img/family/0_RobChan.png" /><br>Rob Chan</div>'+
                                        '<div><img class="profile" src="img/family/0_MacMellish.png" /><br>Mac Mellish</div>'+
                                        '<div><img class="profile" src="img/family/0_HauTran.png" /><br>Hau Tran</div>'+
                                  '</div>'+
                                  '<div class="class_members"></div>');      
                $('#family .contentbox #'+group.letter).append(target);
            } else {
                var target =    $('<div class="class_dad">'+
                                        '<img class="popper profile" data-popbox="pop'+group.pd.num+'" src="img/family/'+group.pd.num+'.png" /><br><b>New Member Educator</b><br />'+group.pd.name+
                                  '</div>'+
                                  '<div class="class_members"></div>');
                $('#family .contentbox #'+group.letter).append(target);
            }
        }
    });
    
    // Initiate Members of Each Class
    var currentIndex = 1;
    $.each(classInformation, function(index, group){
        var tempIndex = 1;
        if(index != 0){
            for(i=currentIndex; i<brothers.length; i++){
                if(tempIndex <= group.size){
                    
                    var b = $('<div class="class_member">'+
                                '<img class="popper profile" data-popbox="pop'+i+'" src="img/family/'+i+'.png" />'+
                                '<br />'+brothers[i].name+
                              '</div>');
                    $('#family .contentbox #'+group.letter+' .class_members').append(b);
                    tempIndex++;
                    currentIndex = i+1;
                }
            }
        }
    });
});