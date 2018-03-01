function initMap() {
	// Create marker at ucsd

	var ucsd_ltlng = {lat:32.878818, lng:-117.235820}

	//create a map object and specify the DOM element for display 

	var map = new google.maps.Map(document.getElementById('map'),{
    	center: ucsd_ltlng,
    	zoom: 15
	}); 

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map, 
		title: "UCSD"
	});

		
}