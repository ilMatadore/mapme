//Multiple locations
// reads file
function readBlob() {
	var files = document.getElementById('files').files;

	if (!files.length) {
	  alert('Please select a file!');
	  return;
	}

	var file = files[0];
	var start = 0;
	var stop = file.size;

	if (file.name.split('.')[1] !== 'csv') {
		alert('Invalid file type, file must be csv');
		return;
	} 

	map.remove()

	L.mapquest.geocoding().geocode('Dallas,TX',createMap);

	function createMap(error, response) {
	    var location = response.results[0].locations[0];
	    var latLng = location.displayLatLng;
	    map = L.mapquest.map('map', {
	        center: latLng,
	        layers: L.mapquest.tileLayer('map'),
	        zoom: 12
	    });

		//var customIcon = L.mapquest.icons.marker({
	    //    primaryColor: '#FF9531'
	   // });

		//L.marker(latLng, { icon: customIcon }).addTo(map);
	    };



	var reader = new FileReader();

	// generates table based on file data
	reader.onloadend = function(evt) {
	  if (evt.target.readyState == FileReader.DONE) { // DONE == 2
	    var refPts = evt.target.result.split("\n");
	    for (var i = 0; i < refPts.length; i++) {
	    	if (refPts[i].length > 0) {
	    			var table = document.getElementById("tbody");
	    			var trHead = document.getElementById("trHead")
	    			var row = document.createElement("tr");
	    			row.setAttribute("id","row"+(i+1));
	    			var cellgoMap = document.createElement("td"); 
	    			cellgoMap.textContent = ""; 					
//creates map icon button
	    			var goMap = document.createElement("button");
	     			goMap.classList.add("fa");
	    			goMap.classList.add("fa-map-marker");
	    			goMap.classList.add("mapbutton");
	    			goMap.setAttribute("id","mapa"+(i+1));
	    			table.appendChild(row);	   		

	    			goMap.onclick = mapeame;
//map each location function
	    			function mapeame(evt) {
	    				var latitude;
	    				var longitude;
	    				var inputToMap = evt.target.parentElement.parentElement.childNodes[1].childNodes[0].value+","+
	    									 evt.target.parentElement.parentElement.childNodes[2].childNodes[0].value+","+
	    									 evt.target.parentElement.parentElement.childNodes[3].childNodes[0].value+","+
	    									 evt.target.parentElement.parentElement.childNodes[4].childNodes[0].value+","+
	    									 evt.target.parentElement.parentElement.childNodes[5].childNodes[0].value;
	    				if(evt.target.parentElement.nextElementSibling == null) {
	    					latitude = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(latitude);
	    					longitude = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(longitude);
	    					L.mapquest.geocoding().geocode(inputToMap);
	    					L.mapquest.geocoding().geocode(inputToMap, geocodingCallback)
	    					function geocodingCallback(error, result) {
	    						latitude.textContent = result.results[0].locations[0].displayLatLng.lat
	    						longitude.textContent = result.results[0].locations[0].displayLatLng.lng;
	    						}
	    				} else {
	    					L.mapquest.geocoding().geocode(inputToMap);
	    					L.mapquest.geocoding().geocode(inputToMap, geocodingCallback);
	    					function geocodingCallback(error, result) {
	    						evt.target.parentElement.parentElement.childNodes[7].textContent = result.results[0].locations[0].displayLatLng.lat
	    						evt.target.parentElement.parentElement.childNodes[8].textContent = result.results[0].locations[0].displayLatLng.lng;
	    						};
	    			
	    				};
	    			};
	    };

	    var split = refPts[i].split(",");
	    for (var j=0; j < split.length; j++) {
	    	var cell = document.createElement("td");
	    	cell.setAttribute("id",row.id+"td"+(j+1));
	    	var inputCell = document.createElement("input");
	    	inputCell.setAttribute("type", "text");
	    	inputCell.setAttribute("id", "input"+(j+1)+row.id);
	    	row.appendChild(cell);
	    	row.appendChild(cellgoMap);
	    	row.appendChild(goMap);
	    	cell.appendChild(inputCell)
	    	cellgoMap.appendChild(goMap)
	    	inputCell.value = split[j];
	    };	



	};
	//setting input fields size and max length in ML table
	    var nameLength = [], addressLength = [], cityLength = [], stateLength = [], postalLength = [], countryLength = [];
	    for (var a = 1; a <= tbody.childElementCount; a++) {
	    	nameLength.push(document.getElementById("input1"+"row"+a));
	    	addressLength.push(document.getElementById("input2"+"row"+a));
	    	cityLength.push(document.getElementById("input3"+"row"+a));
	    	stateLength.push(document.getElementById("input4"+"row"+a));
	    	postalLength.push(document.getElementById("input5"+"row"+a));
	    	countryLength.push(document.getElementById("input6"+"row"+a));
	    	for (var b=0; b<nameLength.length; b++) {
	    		nameLength[b].size = "28";
	    		nameLength[b].maxLength = "100";	    		
	    	}
	    	for (var b=0; b<addressLength.length; b++) {
	    		addressLength[b].size = "45";
	    		addressLength[b].maxLength = "50";	    		
	    	}
	    	for (var b=0; b<cityLength.length; b++) {
	    		cityLength[b].size = "20";
	    		cityLength[b].maxLength = "20";	    		
	    	}
	    	for (var b=0; b<stateLength.length; b++) {
	    		stateLength[b].size = "2";
	    		stateLength[b].maxLength = "15";	    		
	    	}
	    	for (var b=0; b<postalLength.length; b++) {
	    		postalLength[b].size = "5";
	    		postalLength[b].maxLength = "10";	    		
	    	}
	    	for (var b=0; b<countryLength.length; b++) {
	    		countryLength[b].size = "2";
	    		countryLength[b].maxLength = "2";
	    		console.log(countryLength[b].maxLength);	    		
	    	}	    	
	    	
	
	    }



//function map all locations
		function mapAll() {
			for (var l = 1; l <= tbody.childElementCount; l++) {
				document.getElementById("mapa"+l).click();
			}
		}
		var loadOpts = document.getElementById("loadOptions");
		if (loadOpts.childNodes.length == 7) {
		  var mapIt = document.createElement("button");
		  mapIt.textContent = "Map'em All";
		  mapIt.setAttribute("id","mapIt");
		  loadOpts.appendChild(mapIt);
		  var submit2 = document.getElementById("mapIt");
		  submit2.addEventListener("click",mapAll);
		  };
	};

	};

	var blob = file.slice(start, stop);
	reader.readAsBinaryString(blob);

};
		  
document.querySelector('#submit').addEventListener('click', function(evt) {
//removes rows when loading a new file
	var tbod = document.getElementById("tbody")
	if (tbod.childNodes.length > 0) {
			while (tbod.firstChild) {
				tbod.removeChild(tbod.firstChild);
				};
		};
	if (evt.target.tagName.toLowerCase() == 'button') {
	    readBlob();
	}
}, false);

/*
function loadDataFile() {

	var fileLocation = [];
	var arrayLocations = [];
	var nbrRows = document.getElementById("tbody");

	for (var z = 0; z < nbrRows.childElementCount; z++) {
		var dataCell = document.getElementById("row"+(z+1))
		fileLocation.push(dataCell.getElementsByTagName("td")[1].textContent)
		fileLocation.push(dataCell.getElementsByTagName("td")[2].textContent)
		fileLocation.push(dataCell.getElementsByTagName("td")[3].textContent)
		fileLocation.push(dataCell.getElementsByTagName("td")[4].textContent)
		fileLocation.push(dataCell.getElementsByTagName("td")[5].textContent)
		arrayLocations.push(fileLocation.splice(0,5).toString())

	}

	map.remove()

	L.mapquest.geocoding().geocode(arrayLocations, createMap)

	function createMap(error, response) {
  	// Initialize the Map
   		var map = L.mapquest.map('map', {
    		layers: L.mapquest.tileLayer('map'),
    		center: [0, 0],
   			zoom: 1
  			});

        function generatePopupContent(error, response) {
          var location = response.results[0].locations[0];
          var street = location.street;
          var city = location.adminArea5;
          var state = location.adminArea3;
          popup.setContent(street + ', ' + city + ', ' + state);
        }

	// Generate the feature group containing markers from the geocoded locations
          var featureGroup = generateMarkersFeatureGroup(response);

      // Add markers to the map and zoom to the features
	      featureGroup.addTo(map);
    	  map.fitBounds(featureGroup.getBounds());
    
    }

    function generateMarkersFeatureGroup(response) {
      var group = [];
      for (var i = 0; i < response.results.length; i++) {
        var location = response.results[i].locations[0];
        var locationLatLng = location.latLng;
        // Create a marker for each location
        var marker = L.marker(locationLatLng, {icon: L.mapquest.icons.circle()})
          .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

        group.push(marker);
      }
      return L.featureGroup(group);
    }
};
*/