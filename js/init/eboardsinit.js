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
	$.each(eboards, function(index, eboard){
		if(index != 0){
			var	eb =	$('<a class="panel" href="#target'+index+'">'+
									'<span class="subtitle">'+eboard.semester+'</span> '+
									'</a><br />');
			$('#left').append(eb);
		}
	});

	// Initiate Target
	$.each(eboards, function(index, eboard){
		if(index != 0){
			var	target =	$('<div class="panel" id="target'+index+'">'+
											'<div id="eboard'+index+'" style="margin-left: auto; margin-right: auto; padding: 0; text-align: center;">'+
													'<div class="targetheader">'+eboard.semester+'</div>'+
											'</div>'+
											'</div>');
			$('#right').append(target);
		} else {
			var	target =	$('<div class="panel active" id="target0" style="display: block; left: 0px; background-color: #000; text-align: center; color: #fff;">'+
											'<div style="padding: 20px; font-size: 10px;">'+
												'<br><br><br>'+
												'These individuals have dedicated themselves to building this organization and this family. '+
												'Without any one of them, our fraternity would not be where it is today. We thank them '+
												'for all of their time, their effort, and their sacrifices. The contributions of each of these individuals should not be forgotten.'+
												'<br><br>'+
											'</div>'+
											'</div></center>');
			$('#right').append(target);
		}
	});
	
	// Initiate Profile Pictures
	$.each(eboards, function(index, eboard){
	if(index!=0){
			var	b =	$('<div id="secretary" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["secretary"]+'" height="40px" src="images/family/'+eboard["secretary"]+'.png" width="40px" />'+
								'<br /><b>Secretary</b><br />'+brothers[eboard.secretary].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="internal" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["internal"]+'" height="40px" src="images/family/'+eboard["internal"]+'.png" width="40px" />'+
								'<br /><b>Internal</b><br />'+brothers[eboard.internal].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="president" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["president"]+'" height="60px" src="images/family/'+eboard["president"]+'.png" width="60px" />'+
								'<br /><b>President</b><br />'+brothers[eboard.president].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="external" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["external"]+'" height="40px" src="images/family/'+eboard["external"]+'.png" width="40px" />'+
								'<br /><b>External</b><br />'+brothers[eboard.external].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="treasurer" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["treasurer"]+'" height="40px" src="images/family/'+eboard["treasurer"]+'.png" width="40px" />'+
								'<br /><b>Treasurer</b><br />'+brothers[eboard.treasurer].name+'</div>');
			$('#eboard'+index).append(b);
		}
	});
});