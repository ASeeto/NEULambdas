$(document).ready(function(){
	// Initiate Popup Boxes
	$.each(brothers, function(index, brother){
		if(index != 0){
			var	brotherpopup =	$('<div class="popbox" id="pop'+index+'">'+
											'<h2>'+brother.name+'</h2>'+
											'<p><strong>House Roster #:</strong> '+index+'</p>'+
											'<p><strong>Nickname:</strong> '+brother.nickname+'</p></div>');
			$('#hiddenpopboxes').append(brotherpopup);
		}
	});

	// Initiate Left Panel
	$.each(classInformation, function(index, group){
		if(index != 0){
			var	groupname =	$('<a class="panel" href="#target'+index+'">'+
												'<span class="subtitle">'+group.semester+'</span> '+
												'<span class="title">\('+group.letter+'\)</span>'+
												'</a><br />');
			$('#left').append(groupname);
		}
	});

	// Initiate Target
	$.each(classInformation, function(index, group){
		if(index != 0){
			if(group.letter == "Charter"){
				var	target =	$('<div class="panel" id="target'+index+'">'+
												'<div id="pdInfo" '+
												'style="float: left; background-color: #2b2b2b; width: 30%; height: 100%; text-align: center; margin-left: auto; margin-right: auto; color: #fff; font-size: 10px;">'+
												'<br><font size="6px">Pledge Dads</font>'+
												'<br>Rob Chan<br><img class="profile" height="30px" src="images/family/0_RobChan.png" width="30px" />'+
												'<br>Mac Mellish<br><img class="profile" height="30px" src="images/family/0_MacMellish.png" width="30px" />'+
												'<br>Hau Tran<br><img class="profile" height="30px" src="images/family/0_HauTran.png" width="30px" />'+
												'</div>'+
												'<div id="'+group.letter+'" style="float: right; width: 70%; margin-left: auto; margin-right: auto; padding: 0; text-align: center;">'+
														'<div class="targetheader">'+group.letter+' Class</div>'+
												'</div>'+
												'</div>');
				$('#right').append(target);
			} else {
				var	target =	$('<div class="panel" id="target'+index+'">'+
												'<div id="pdInfo" '+
												'style="float: left; background-color: #2b2b2b; width: 30%; height: 100%; text-align: center; margin-left: auto; margin-right: auto; color: #fff;"'+
												'><br><br>Pledge Dad<br><br>'+
												'<img class="profile" height="80px" src="images/family/'+group.pd.num+'.png" width="80px" /><br><br>'+group.pd.name+
												'</div>'+
												'<div id="'+group.letter+'" style="float: right; width: 70%; margin-left: auto; margin-right: auto; padding: 0; text-align: center;">'+
														'<div class="targetheader">'+group.letter+' Class</div>'+
												'</div>'+
												'</div>');
				$('#right').append(target);
			}
		} else {
			var	target =	$('<div class="panel active" id="target0" style="display: block; left: 0px; background-color: #fff; text-align: center; color: #000;">'+
											'<div style="padding: 20px; font-size: 10px;">'+
												'<br>Please select a class from the left hand column. <br>Hover over pictures for more information on a brother.<br>'+
												'<img src="images/example.png">'+
											'</div>'+
											//<!--
											// <p align="center"><iframe allowfullscreen="" frameborder="0" height="281" id="video" mozallowfullscreen="" src="//player.vimeo.com/video/107407328?api=1;autoplay=1&amp;loop=1" webkitallowfullscreen="" width="500"></iframe></p>
											// -->
											'</div>');
			$('#right').append(target);
		}
	});
	
	// Get Total Number of Brothers
	var TOTAL_NUMBER_BROTHERS = 0;
	$.each(classInformation, function(i, group){TOTAL_NUMBER_BROTHERS+=group.size});
	// console.log(TOTAL_NUMBER_BROTHERS);
	
	// Initiate Profile Pictures
	var currentIndex = 1;
	$.each(classInformation, function(index, group){
		var tempIndex = 1;
		if(index != 0){
			for(i=currentIndex; i<brothers.length; i++){
				if(tempIndex <= group.size){
					
					var	b =	$('<div class="profile">'+
										'<img class="popper profile" data-popbox="pop'+i+'" height="60px" src="images/family/'+i+'.png" width="60px" />'+
										'<br />'+brothers[i].name+'</div>');
					$('#'+group.letter).append(b);
					tempIndex++;
					currentIndex = i+1;
				}
			}
		}
	});
});