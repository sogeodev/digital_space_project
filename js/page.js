(function() {

  
  window.onload = function() {

  // creating map
    var options = {
     zoom: 2,
     center: new google.maps.LatLng(31.39, -174.09),
     mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    var map = new google.maps.Map(document.getElementById('map'), options); 

  // setting variables and making arrays 
   // locations
    var places = [];

	places.push(new google.maps.LatLng(34.148, -118.353)); // hollywood
	places.push(new google.maps.LatLng(28.473, -81.463)); // florida
	places.push(new google.maps.LatLng(34.665, 135.433)); // osaka
	places.push(new google.maps.LatLng(1.2541, 103.8238)); // singapore
	places.push(new google.maps.LatLng(39.910, 116.659)); // beijing
   
   // names 
	var placeNames = ['Universal Hollywood', 'Universal Florida', 'Universal Osaka' , 'Universal Singapore', 'Universal Beijing']; 


	
   // infowindow contents
	var infoContents = [
	    [
	
		'Universal Hollywood',
		'<img src="img/hollywood.jpg"/> <h2>Explore the magical world!</h2><p><a href="https://www.universalorlando.com/web/en/us/index.html">Buy tickets here</a></p>'
		
		],
		[
		
		'Universal Florida',
		'<img src="img/florida.jpg"/> <h2>Make your dreams come true!<br>Three amazing parks are waiting you!</h2><p><a href="https://www.universalorlando.com/web/en/us/tickets-packages/park-tickets/index.html?__source=ps..psta..dr..cuors..ctpk..vnof..len..adv..ipna..exna..pna..pooo..cuo..pgl..trna..onof.&s_kwcid=AL!4228!3!249643684525!e!!g!!universal%20florida&gclid=Cj0KCQiAxNnfBRDwARIsAJlH29C4rpTSm4F6WP0oJ2ZDHcd67uqcM3Nes_znzSkzeNblUwXpTYaVwggaAjykEALw_wcB">Buy tickets here</a></p>'
		
		],
		[
		
		'Universal Osaka',
		'<h2>Come to the world class theme park!<br>Newly introduce <U>the MINION park</U>!</h2><div style="position:relative;padding-bottom:56.25%;height:0px"><iframe type="text/html" allowtransparency="true" frameborder="0" width="100%" height="100%" src="http://www.youtube.com/embed/FewvVjMNbBE?controls=1&amp;rel=1&amp;autohide=1" style="position: absolute; top: 0px; left: 0px;"></iframe></div><p><a href="https://www.usj.co.jp/kr/">Buy tickets here</a></p>'
		
		],
		[
		
		'Universal Singapore',
		'<img src="img/singapore.png"/> <h2>Celebrate your holidays at Universal Studios Singapore!</h2><p><a href="https://www.rwsentosa.com/en/shows-and-events/christmas/universal-christmas?gclsrc=aw.ds&ds_rl=1255897&ds_rl=1255897&gclid=Cj0KCQiAxNnfBRDwARIsAJlH29B8sK2DLnCSV97Putshz0g80ChcEr0UoNEU-5iG-DSJkXYZiga92xkaArWQEALw_wcB&gclsrc=aw.ds">Buy tickets here</a></p>'
		
		],
		[
		
		'Wait!',
		'<img src="img/constr.jpg"/> <h2>We are under construction yet...</h2>'
		
		]
		];
	
	
	// defining icons
	var orng = new google.maps.MarkerImage(
	  'img/wheel1.png'
	);
	var orngHover = new google.maps.MarkerImage(
	  'img/wheel2.png'
	);
	var grn = new google.maps.MarkerImage(
	  'img/wheel3.png'
	);
	var grnHover = new google.maps.MarkerImage(
	  'img/wheel4.png'
	);
	
	var whiteHover = new google.maps.MarkerImage(
	  'img/white.png'
	  );
	
	var white = new google.maps.MarkerImage(
	  'img/purple.png'
	  );

	
		
	var infowindow;
   
   
   //plotting markers and infowindows
    for (var i = 0; i < places.length; i++) {
      
     //diff color to distinguish places
	  // orange marker
	  if(i != 4){
		  var marker = new google.maps.Marker({
            position: places[i], 
            map: map,
            icon: orng,
			title: placeNames[i]          
		  });
		
          // Hover event		
		  google.maps.event.addListener(marker, 'mouseover', function(){
			  this.setIcon(orngHover);
		  });
		  google.maps.event.addListener(marker, 'mouseout', function(){
			  this.setIcon(orng);
		  });
		  
	    }
	  // green marker
	  else {
          var marker = new google.maps.Marker({
            position: places[i], 
            map: map,
            icon: grn,
			title: placeNames[i]
		});
		
	      // Hover event			
		  google.maps.event.addListener(marker, 'mouseover', function(){
		      this.setIcon(grnHover);
		  });
		  google.maps.event.addListener(marker, 'mouseout', function(){
			  this.setIcon(grn);
		  });			
      
	   }
	   

	
	// infowindow   
    (function(i, marker){
			google.maps.event.addListener(marker, 'click', function(){
			
	  
		if(!infowindow){
			infowindow = new google.maps.InfoWindow();
		}
				
		infowindow.setContent(infoContents[i][1]);
		infowindow.setOptions({maxWidth: 500});
		infowindow.open(map, marker);
				
		});
				
	})(i, marker);
	

	
	};	
	
	// hwaseong marker
	var markerK = new google.maps.Marker({
      position: new google.maps.LatLng(37.287, 126.805),
      map: map,
	  icon: white,
      title: 'Hwaseong, Korea'
    });
	
	
	//hover event
	google.maps.event.addListener(markerK, 'mouseover', function(){
		this.setIcon(whiteHover);
	});
    google.maps.event.addListener(markerK, 'mouseout', function(){
		this.setIcon(white);
	}) ;		  
			  
	google.maps.event.addListener(markerK, 'click', function() {
    
      // Creating the div that will contain the detail map
      var detailDiv = document.createElement('div');
      detailDiv.style.width = '200px';
      detailDiv.style.height = '200px';
      document.getElementById('map').appendChild(detailDiv);
      
      // Creating MapOptions for the overview map
      var overviewOpts = {
        zoom: 11,
        center: markerK.getPosition(),
        mapTypeId: map.getMapTypeId(),
        disableDefaultUI: true
      };
      
      var detailMap = new google.maps.Map(detailDiv, overviewOpts);
      
      // Create polygon that will show in the detail map
	var points = [
	  new google.maps.LatLng(37.280682, 126.811385),
	  new google.maps.LatLng(37.282669, 126.817883),
	  new google.maps.LatLng(37.292123, 126.813751),
	  new google.maps.LatLng(37.292957, 126.807295),
	  new google.maps.LatLng(37.292306, 126.800368),
	  new google.maps.LatLng(37.290175, 126.791035),
	];
	
	var polygon = new google.maps.Polygon({
		paths: points,
		map: detailMap,
		strokeColor: '#0000ff',
		strokeOpacity: 0.6,
		strokeWeight: 1,
		fillColor: '#0000ff',
		fillOpacity: 0.35
	});
      
      // Check to see if an InfoWindow already exists
 //     if (!infoWindow) {
        infoWindow1 = new google.maps.InfoWindow();
  //    }
      
      // Setting the content of the InfoWindow to the detail map
      infoWindow1.setContent(detailDiv);
      
      // Opening the InfoWindow
      infoWindow1.open(map, markerK);
    
    });

	
	
	
	// polygon

		
  }
})();