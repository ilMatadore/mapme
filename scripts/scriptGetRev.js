function readBlobRev() {
	var filesRev = document.getElementById('filesRev').files;

	if (!filesRev.length) {
	  alert('Please select a file!');
	  return;
	}

	var fileRev = filesRev[0];
	var start = 0;
	var stop = fileRev.size;

	if (fileRev.name.split('.')[1] !== 'csv') {
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

	var readerRev = new FileReader();

	// generates table based on file data
	readerRev.onloadend = function(evt) {
	  if (evt.target.readyState == FileReader.DONE) { // DONE == 2
	    var refPtsRev = evt.target.result.split("\n");
	    var revToMap= [];
	    for (var i = 0; i < refPtsRev.length; i++) {
	    	if (refPtsRev[i].length > 0) {
	    			revToMap.push(refPtsRev[i].split(","));
	    			var tableRev = document.getElementById("tbodyRev");
	    			var trHeadRev = document.getElementById("trHeadRev")
	    			var rowRev = document.createElement("tr");
	    			rowRev.setAttribute("id","rowRev"+(i+1));
	    			rowRev.setAttribute("title", revToMap[i]);
	    			var cellgoMapRev = document.createElement("td");
	    			var goMapRev = document.createElement("button");
	    			goMapRev.setAttribute("id","mapaRev"+(i+1));
	    			goMapRev.classList.add("fa");
	    			goMapRev.classList.add("fa-map-marker");
	    			goMapRev.classList.add("mapbutton");
	    			tableRev.appendChild(rowRev);
	    			goMapRev.onclick = mapeameRev;

	    			function mapeameRev(evt) {
	    				var inputAddress, inputCity, inputState, inputPostal, inputCountry;
	    				var inputToMapRev = [evt.target.parentElement.parentElement.childNodes[1].childNodes[0].value,evt.target.parentElement.parentElement.childNodes[2].childNodes[0].value];
	    				if(evt.target.parentElement.nextElementSibling == null) {
	    					var addressRev = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(addressRev);
	    					var cityRev = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(cityRev);
	    					var stateRev = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(stateRev);
	    					var postalRev = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(postalRev);
	    					var countryRev = document.createElement("td");
	    					evt.target.parentElement.parentElement.appendChild(countryRev);
	    					
	    					//var reverseMap = revToMap[evt.target.id.split('')[evt.target.id.split('').length-1]-1];

	    					L.mapquest.geocoding().reverse(inputToMapRev);
	       					L.mapquest.geocoding().reverse(inputToMapRev, geocodingCallback);

	    					function geocodingCallback(error, result) {
	    						if (result.results[0].locations[0].street != "") {
	    							addressRev.textContent = result.results[0].locations[0].street;
	    						} else {
	    							addressRev.textContent = " ";
	    						}
	    						if (result.results[0].locations[0].adminArea5 != "") {
	    							cityRev.textContent = result.results[0].locations[0].adminArea5;
	    						} else {
	    							cityRev.textContent = " ";
	    						}
	    						if (result.results[0].locations[0].adminArea3 != "") {
	    							stateRev.textContent = result.results[0].locations[0].adminArea3;
	    						} else {
	    							stateRev.textContent = " ";
	    						}
	    						if (result.results[0].locations[0].postalCode != "") {
	    							postalRev.textContent = result.results[0].locations[0].postalCode.split(",")[0];
	    						} else {
	    							postalRev.textContent = " ";
	    						}
	    						if (result.results[0].locations[0].adminArea1 != "") {
	    							countryRev.textContent = result.results[0].locations[0].adminArea1;
	    						} else {
	    							countryRev.textContent = " ";
	    						}
	       						}	       				
	    					} else {   					
		    					L.mapquest.geocoding().reverse(inputToMapRev)
		    					L.mapquest.geocoding().reverse(inputToMapRev, geocodingCallback2);
		    					function geocodingCallback2(error, result) {
		    						if (result.results[0].locations[0].street != "") {
		    							evt.target.parentElement.parentElement.childNodes[4].textContent = result.results[0].locations[0].street;
		    						} else {
		    							evt.target.parentElement.parentElement.childNodes[4].textContent = " ";
		    						}
		    						if (result.results[0].locations[0].adminArea5 != "") {
		    							evt.target.parentElement.parentElement.childNodes[5].textContent = result.results[0].locations[0].adminArea5;
		    						} else {
		    							evt.target.parentElement.parentElement.childNodes[5].textContent = " ";
		    						}
		    						if (result.results[0].locations[0].adminArea3 != "") {
		    							evt.target.parentElement.parentElement.childNodes[6].textContent = result.results[0].locations[0].adminArea3;
		    						} else {
		    							evt.target.parentElement.parentElement.childNodes[6].textContent = " ";
		    						}
		    						if (result.results[0].locations[0].postalCode != "") {
		    							evt.target.parentElement.parentElement.childNodes[7].textContent = result.results[0].locations[0].postalCode.split(",")[0];
		    						} else {
		    							evt.target.parentElement.parentElement.childNodes[7].textContent = " ";
		    						}
		    						if (result.results[0].locations[0].adminArea1 != "") {
		    							evt.target.parentElement.parentElement.childNodes[8].textContent = result.results[0].locations[0].adminArea1;
		    						} else {
		    							evt.target.parentElement.parentElement.childNodes[8].textContent = " ";
		    						}
	    						}
	    				}
	    			};
	    	};
	    var splitRev = refPtsRev[i].split(",");
	    for (var j=0; j < splitRev.length; j++) {
	    	var cellRev = document.createElement("td");
	    	var inputCellRev = document.createElement("input");
	    	inputCellRev.setAttribute("type", "text");
	    	inputCellRev.setAttribute("id", "input"+(j+1)+rowRev.id);
	    	rowRev.appendChild(cellRev);
	    	rowRev.appendChild(cellgoMapRev);
	    	rowRev.appendChild(goMapRev);
	    	cellRev.appendChild(inputCellRev);
	    	cellgoMapRev.appendChild(goMapRev)
	    	inputCellRev.value = splitRev[j];
	    	};	        
		};

		function mapAllRev() {
			for (var l = 1; l <= tbodyRev.childElementCount; l++) {
			document.getElementById("mapaRev"+l).click();
			}
		}

		var loadOptsRev = document.getElementById("loadOptionsRev");
		if (loadOptsRev.childNodes.length < 8) {
		var mapItRev = document.createElement("button");
		mapItRev.textContent = "Map'em All";
		mapItRev.setAttribute("id","mapItRev");
		loadOptsRev.appendChild(mapItRev);
		var submit2Rev = document.getElementById("mapItRev");
		submit2Rev.addEventListener("click",mapAllRev);
		 };
	};

	};

	var blobRev = fileRev.slice(start, stop);
	readerRev.readAsBinaryString(blobRev);

	};

	document.querySelector('#submitRev').addEventListener('click', function(evt) {

	var tbodRev = document.getElementById("tbodyRev")
	if (tbodRev.childNodes.length > 0) {
		while (tbodRev.firstChild) {
			tbodRev.removeChild(tbodRev.firstChild);
			};
	};
	if (evt.target.tagName.toLowerCase() == 'button') {
    readBlobRev();
	}
	}, false);


function loadDataFileRev() {
/*
	var fileLocationRev = [];
	var arrayLocationsRev = [];
	var nbrRowsRev = document.getElementById("tbodyRev");

	for (var z = 0; z < nbrRowsRev.childElementCount; z++) {
		var dataCell = document.getElementById("row"+(z+1))
		fileLocationRev.push(dataCell.getElementsByTagName("td")[1].textContent)
		fileLocationRev.push(dataCell.getElementsByTagName("td")[2].textContent)
		fileLocationRev.push(dataCell.getElementsByTagName("td")[3].textContent)
		fileLocationRev.push(dataCell.getElementsByTagName("td")[4].textContent)
		fileLocationRev.push(dataCell.getElementsByTagName("td")[5].textContent)
		//arrayLocationsRev.push(fileLocationRev.splice(0,5).toString())

	}

	L.mapquest.geocoding().reverse(arrayLocationsRev,createBasicGeocodingLayerRev);

	function createBasicGeocodingLayerRev(err, response) {
    	map.addLayer(L.mapquest.geocodingLayer({
      	geocodingResponse: response
    })); 

    L.mapquest.geocoding().reverse(arrayLocationsRev, geocodingCallback);

    function geocodingCallback(error, result) {
    	console.log(result.results)
    	console.log(response)
    	console.log(err)
    };
 
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
*/
  
};

var LoadRev = document.getElementById("submitRev");
LoadRev.addEventListener("click",loadDataFileRev);