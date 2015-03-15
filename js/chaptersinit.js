$(document).ready(function(){
	// Initiate Active Chapters
	$.each(chapters_active, function(index, chapter){
		var	c =	$('<a href="'+chapter.website+
							'" target="_blank">'+chapter.letter+
							' - '+chapter.school+'</a><br />');
		$('#chapters_active').append(c);
	});
	
	// Initiate Active Chapters
	$.each(chapters_associate, function(index, chapter){
		var	c =	$('<a href="'+chapter.website+
							'" target="_blank">'+chapter.school+'</a><br />');
		$('#chapters_associate').append(c);
	});
	
	// Initiate Active Chapters
	$.each(chapters_colony, function(index, chapter){
		var	c =	$('<a href="'+chapter.website+
							'" target="_blank">'+chapter.school+'</a><br />');
		$('#chapters_colony').append(c);
	});
});