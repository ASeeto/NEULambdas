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
			$('#fa_l').append(groupname);
		}
	});

	// Initiate Target
	$.each(classInformation, function(index, group){
		if(index != 0){
			if(group.letter == "Charter"){
				var	target =	$('<div class="panel" id="target'+index+'">'+
												'<div class="pdinfo">'+
												'<br><p class="pledgedad">Pledge Dads</p>'+
												'Rob Chan<br><img class="profile" height="30px" src="img/family/0_RobChan.png" width="30px" />'+
												'<br>Mac Mellish<br><img class="profile" height="30px" src="img/family/0_MacMellish.png" width="30px" />'+
												'<br>Hau Tran<br><img class="profile" height="30px" src="img/family/0_HauTran.png" width="30px" />'+
												'</div>'+
												'<div id="'+group.letter+'" class="class_r">'+
														'<div class="targetheader">'+group.letter+' Class</div>'+
												'</div>'+
												'</div>');
				$('#fa_r').append(target);
			} else {
				var	target =	$('<div class="panel" id="target'+index+'">'+
												'<div class="pdinfo">'+
												'<br><p class="pledgedad">Pledge Dad</p>'+
												'<br><img class="profile" height="80px" src="img/family/'+group.pd.num+'.png" width="80px" /><br><br>'+group.pd.name+
												'</div>'+
												'<div id="'+group.letter+'" class="class_r">'+
														'<div class="targetheader">'+group.letter+' Class</div>'+
												'</div>'+
												'</div>');
				$('#fa_r').append(target);
			}
		} else {
			var	target =	$('<div class="panel active" id="target0">'+
												'<div id="target0content">'+
													'<br><br>'+
													'<p>Please select a class from the left hand column.</p>'+
													'<p>Hover over pictures for more information on a brother.</p>'+
													'<img src="img/example.png">'+
												'</div>'+
											'</div>');
			$('#fa_r').append(target);
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
										'<img class="popper profile" data-popbox="pop'+i+'" height="60px" src="img/family/'+i+'.png" width="60px" />'+
										'<br />'+brothers[i].name+'</div>');
					$('#'+group.letter).append(b);
					tempIndex++;
					currentIndex = i+1;
				}
			}
		}
	});
});