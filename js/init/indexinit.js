// Initiate Slides$
// $(document).ready(function(){
	google.load("feeds", "1"); 
	function loadFeeds()
	{
			var feedControl = new google.feeds.FeedControl();             
			feedControl.setNumEntries(4); 

			// Designate Feed Location
			var floc = "http://neulambdas.tumblr.com/rss";
			
			// Initiate new feed, adding randomized value to bypass use of cached feeds
			var feed = new google.feeds.Feed(floc+"?bypass_cache="+Date.now());
			
			// Load RSS feed result
			feed.load(function(result) {
				if (!result.error) {
					var entries = result.feed.entries;
					// Parse result to Initiate Slides
					$.each(entries, function(index, element){
						var title = element.title;
						var content = $(element.content);
						var src = content[0].children[0].src;
						var txt = '';
						for(i=2; i<content.length; i++){
							if(content[i].innerHTML){ txt += content[i].innerHTML; }
						}
						var	e =	$('<div class="slidecontainer">'+
												'<div id="slidetitle"><strong>'+title+'</strong></div>'+
												'<div class="slidecontent">'+
													'<div id="slidedivleft"><img src="'+src+'"></div>'+
													'<div id="slidedivright"><p class="slidetxt">'+txt+'</p></div>'+
												'</div>'+
											'</div>');
						$('#slides').append(e);
					});
					var nav = $('<a href="#" class="slidesjs-previous slidesjs-navigation"><i class="icon-chevron-left icon-large"></i></a>'+
											'<a href="#" class="slidesjs-next slidesjs-navigation"><i class="icon-chevron-right icon-large"></i></a>');
					$('#slides').append(nav);
				}
				// Initiate Slideshow
				$('#slides').slidesjs({
					width: 700,
					height: 319,
					play: {
						active: false,
						auto: true,
						effect: "fade",
						interval: 3000,
						swap: true,
						pauseOnHover: true,
						restartDelay: 2500
					},
					navigation: {
						effect: "fade"
					},
					pagination: {
						effect: "fade"
					},
					effect: {
						fade: {
							speed: 400
						}
					}
				});
			});
	}
	google.setOnLoadCallback(loadFeeds);
// });   