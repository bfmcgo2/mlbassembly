$(document).ready(function(){

	var gallery = [
		{
			"name":"mlbassembly",
			"content":[
				{
					"date": "friday",
					"gallery": [
						{
							"id": 0,
							"img_path": "assets/recap/IMG_0381.jpg",
							"img_caption": " JD Deardourff's mural was in the starting lineup on day 1 of the MLB Assembly. The artist pasted vintage MLB posters against a blank wall which will remain as a colorful backdrop for photos taken by MLB Assembly attendees during the entirety of the event."
						},
						{
							"id": 1,
							"img_path": "assets/recap/IMG_4530.jpg",
							"img_caption": "RSVP Catering's Graffiti Ice Cream Sandwiches were a home-run for MLB Assembly guests."
						},
						{
							"id": 2,
							"img_path": "assets/recap/IMG_4627.jpg",
							"img_caption": " RSVP Catering also served a gluten free option, the refreshing Assembly Popsicle. These Goodie Drops were the perfect treat to beat the heat."
						},
						{
							"id": 3,
							"img_path": "assets/recap/IMG_4652.jpg",
							"img_caption": "Wale closed opening night with an incredible performance. His set packed the District Pier at The Wharf."
						},
						{
							"id": 4,
							"img_path": "assets/recap/IMG_4653.jpg",
							"img_caption": "Friday Night's Light at the District Pier"
						},
						{
							"id": 5,
							"img_path": "assets/recap/IMG_7126.jpg",
							"img_caption": "MLB Assembly participants are greeted by Snarkitcture's 'Field', an evolving installation that invites visitors to observe a shifting landscape over the four days of MLB Assembly."
						},
						{
							"id": 6,
							"img_path": "assets/recap/IMG_7244.jpg",
							"img_caption": " Skyler Grey took over the Levi's Tailor Shop. Attendees were invited to get creative with their onsite purchase of Levi's denim jackets and t's, and add variations of Skyler Grey branded screen prints, along with the artist designed patches for heat pressing."
						}
					]
				}
			]
		},
		{
			"name": "highsnobiety",
			"content": [
			{
				"date": "friday",
				"gallery": [
					{
						"id": 0,
						"img_path": "assets/highsnob/ASTROS-HIGH-SNOB.jpg",
						"img_caption": "The Just Don X Mitchell & Ness MLB Astros shorts were a fan favorite during the Style Drops that happened on Friday."
					},
					{
						"id": 1,
						"img_path": "assets/highsnob/FUTURA-STASH-BASEBALLS-HIGH-SNOB.jpg",
						"img_caption": "Futuradosmil and Stash autographed baseballs and gave them to the first 25 MLB Assembly guests during the 7pm slot. They will continue to award 25 lucky fans every night of the event."
					},
					{
						"id": 2,
						"img_path": "assets/highsnob/JD-DEADROUFF-WALL-HIGH-SNOB.jpg",
						"img_caption": "JD Deardourff's mural was in the starting lineup on day 1 of the MLB Assembly. The artist pasted vintage MLB posters against a blank wall which will remain as a colorful backdrop for photos taken by MLB Assembly attendees during the entirety of the event."
					},
					{
						"id": 3,
						"img_path": "assets/highsnob/PATCHES-HIGH-SNOB.jpg",
						"img_caption": "Patches at the Levi's Tailor Shop were also available to be heat pressed at their multiple stations from Public School New York, No Kings Collective, Willy Chavarria, BBC Ice Cream, and all of the MLB teams."
					},
					{
						"id": 4,
						"img_path": "assets/highsnob/SKRATCH-BASTID-HIGH-SNOB.jpg",
						"img_caption": "Skratch Bastid pitched an amazing sunset session"
					},
					{
						"id": 5,
						"img_path": "assets/highsnob/SKYLAR-GREY-LEVIS-HIGH-SNOB.jpg",
						"img_caption": "Skyler Grey took over the Levi's Tailor Shop. Attendees were invited to get creative with their onsite purchase of Levi's denim jackets and t's, and add variations of Skyler Grey branded screen prints, along with the artist designed patches for heat pressing."
					},
					{
						"id": 6,
						"img_path": "assets/highsnob/SNARKITECTURE-FIELD-HIGH-SNOB.jpg",
						"img_caption": "MLB Assembly participants are greeted by Snarkitcture's 'Field', an evolving installation that invites visitors to observe a shifting landscape over the four days of MLB Assembly."
					},
					{
						"id": 7,
						"img_path": "assets/highsnob/WALE-HIGH-SNOB.jpg",
						"img_caption": "Wale closed opening night with an incredible performance. His set packed the District Pier at The Wharf."
					}
				]
			}
		]
	}


			

	]

	var filterDay = gallery[0].content.filter(function(data) {
		if(data.date === 'friday') {
			return data
		}
	});

	var filterHSDay;

	function createInitGallery() {
		switchGallery([gallery[0].content[0]])
	}
	// <img src=${data.img_path} alt="">
	function switchGallery(arr) {
		arr[0].gallery.map(function(data) {
			var caption = data.img_caption;
			var maxLength = 54;
			var trimmedString = caption.substr(0, caption.lastIndexOf(' ', maxLength));


			$('.imageGalleryFeed').append(
				`
				<div class="imageGalleryFeed__img" data-img-id=${data.id} style=background-image:url(${data.img_path})>
					<div class="imageGalleryFeed__caption" >
						<h6 class="section-one-description">
							<div class="light">${trimmedString}...</div>
						</h6>	
					</div>
				</div>
				`
			);
		})
	}




	function switchGalleryDays() {
		$('.imageDateToggle__date').on('click', function() {
			$('.imageGalleryFeed').html(' ');
			var dayClick = $(this).data("day");
			$('.imageDateToggle__date').removeClass('active-date');
			$(this).addClass('active-date');
			
			filterDay = gallery[0].content.filter(function(data) {
				if(data.date === dayClick) {
					return data
				}
			});

			switchGallery(filterDay)

			return filterDay;

		})
	}

	function switchSlideShow(arr, id) {
		
		var startPos = arr[0].gallery.slice(id).concat(arr[0].gallery.slice(0, id));

		startPos.map(function(data) {
			if(data.id === startPos[0].id){
				$('.gallery-slideshow-inner').append(
					`
					<div class="item active">
						<div class="slide-img-container" style=background-image:url(${data.img_path})>
						</div>
						<div class="imageGalleryFeed__caption">
							<h6 class="section-one-description">
								<div class="light">${data.img_caption}</div>
							</h6>
							<a href="#" class="bold">LEARN MORE</a> 	
						</div>
					</div>
					`
				);
			} else {
				$('.gallery-slideshow-inner').append(
					`
					<div class="item">
						<div class="slide-img-container" style=background-image:url(${data.img_path})>
						</div>
						<div class="imageGalleryFeed__caption">
							<h6 class="section-one-description">
								<div class="light">${data.img_caption}</div>
							</h6>
							<a href="#" class="bold">LEARN MORE</a> 
						</div>
						
					</div>
					`
				);
			}

		})
	}

	function triggerSlideShow() {
		$('.imageGalleryFeed').on('click', '.imageGalleryFeed__img', function() {
			$('body').css({
				"overflow": "hidden"
			})
			$('.gallery-slideshow-inner').html(' ');
			$('.gallery-slideshow').addClass('gallery-active');
			var imageId = $(this).data('img-id');

			switchSlideShow(filterDay, imageId);
			$('.item').first().addClass('active');
			$("#galleryCarousel").carousel()
		})

	}

	function triggerHSSlideShow() {
		$('.hsSlideContainer').on('click', '.hsSlide', function() {
			var currentActiveSlideDate = $(this).parent().data("hs-date");
			filterHSDay = gallery[1].content.filter(function(data) {
				if(data.date == currentActiveSlideDate) {
					return data
				}
			})

			console.log(filterHSDay);
			$('body').css({
				"overflow": "hidden"
			})
			$('.gallery-slideshow-inner').html(' ');
			$('.gallery-slideshow').addClass('gallery-active');
			var imageId = $(this).data('img-id');

			switchSlideShow(filterHSDay, imageId);
			$('.item').first().addClass('active');
			$("#galleryCarousel").carousel()
		})
	}
	// <img src=${content.img_path} alt="">
	function createHSSlideShow() {
		gallery[1].content.map(function(data) {
			var hsGallery = data.gallery.map(function(content) {
				var caption = content.img_caption;
				var maxLength = 54;
				var trimmedString = caption.substr(0, caption.lastIndexOf(' ', maxLength));
				return `
					<div class="hsSlide" data-img-id=${content.id}>
						<div class="hsSlide__content" style=background-image:url(${content.img_path})>
							<div class="imageGalleryFeed__caption">
								<h6 class="section-one-description">
									<div class="light">${trimmedString}...</div>
								</h6>	
							</div>
						</div>
					</div>
				`
			}).join('')

			


			if(data.date === 'friday') {

				$('.secondary-slider > .carousel-inner').append(
					`
					<div class="item active">
						<div class="hsSlideContainer" data-hs-date= ${data.date}>
							${hsGallery}
						</div>
					</div>
					`
				);
			} else {
				$('.secondary-slider > .carousel-inner').append(
					`
					<div class="item">
						<div class="hsSlideContainer" data-hs-date= ${data.date}>
							${hsGallery}
						</div>
					</div>
					`
				);
			}
		})
	}


	// close slide show

	function closeGallery() {
		$('.gallery-slideshow').on('click', function(e) {
			var clicked = $(e.target);
			console.log(clicked.is('.gallery-active'), clicked)
			if (clicked.is('.gallery-active') ) {
				$('.gallery-slideshow').removeClass('gallery-active');
				$('body').css({
					"overflow": "auto"
				})
			} 
		})

		// $('.gallery-slideshow').removeClass('gallery-active');
	}


	   
	function init() {
		createInitGallery();
		createHSSlideShow();	
		switchGalleryDays();
		triggerSlideShow();
		triggerHSSlideShow();
		closeGallery();
	}
	
	init();
	

});