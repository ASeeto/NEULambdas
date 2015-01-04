$(document).ready(function(){

	// Initiate Left Panel
	$.each(eboards, function(index, eboard){
		if(index != 0){
			var	eb =	$('<a class="panel" href="#ebtarget'+index+'">'+
									'<span class="subtitle">'+eboard.semester+'</span> '+
									'</a><br />');
			$('#eb_l').append(eb);
		}
	});

	// Initiate Target
	$.each(eboards, function(index, eboard){
		if(index != 0){
			var	target =	$('<div class="panel" id="ebtarget'+index+'">'+
											'<div id="eboard'+index+'" class="board_r">'+
													'<div class="targetheader">'+eboard.semester+'</div>'+
											'</div>'+
											'</div>');
			$('#eb_r').append(target);
		} else {
			var	target =	$('<div class="panel active" id="ebtarget0">'+
												'<div id="ebtarget0content">'+
													'<p>These individuals have dedicated themselves to building this organization and this family. '+
													'Without any one of them, our fraternity would not be where it is today. We thank them '+
													'for all of their time, their effort, and their sacrifices. The contributions of each of these individuals should not be forgotten.</p>'+
												'</div>'+
											'</div></center>');
			$('#eb_r').append(target);
		}
	});
	
	// Initiate Profile Pictures
	$.each(eboards, function(index, eboard){
	if(index!=0){
			var	b =	$('<div id="secretary" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["secretary"]+'" height="40px" src="img/family/'+eboard["secretary"]+'.png" width="40px" />'+
								'<br /><b>Secretary</b><br />'+brothers[eboard.secretary].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="internal" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["internal"]+'" height="40px" src="img/family/'+eboard["internal"]+'.png" width="40px" />'+
								'<br /><b>Internal</b><br />'+brothers[eboard.internal].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="president" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["president"]+'" height="60px" src="img/family/'+eboard["president"]+'.png" width="60px" />'+
								'<br /><b>President</b><br />'+brothers[eboard.president].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="external" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["external"]+'" height="40px" src="img/family/'+eboard["external"]+'.png" width="40px" />'+
								'<br /><b>External</b><br />'+brothers[eboard.external].name+'</div>');
			$('#eboard'+index).append(b);
			var	b =	$('<div id="treasurer" class="profile eboard">'+
								'<img class="popper profile" data-popbox="pop'+eboard["treasurer"]+'" height="40px" src="img/family/'+eboard["treasurer"]+'.png" width="40px" />'+
								'<br /><b>Treasurer</b><br />'+brothers[eboard.treasurer].name+'</div>');
			$('#eboard'+index).append(b);
		}
	});
});