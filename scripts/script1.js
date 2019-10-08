/*hides/shows multiple/ single tabs*/
var singleLocationTab = document.getElementById("form");
var multipleLocationsTab = document.getElementById("multipleLocationsTab");
var getAddress = document.getElementById("getAddress");
var singleLoc = document.getElementById("singleLoc");
var multipleLoc = document.getElementById("multipleLoc");
var reverseGeoLoc = document.getElementById("reverseGeoLoc");
var multiRev = document.getElementById("multipleReverse");

singleLoc.addEventListener('click', hideMultipleTab);
multipleLoc.addEventListener('click', hideSingleTab);
reverseGeoLoc.addEventListener('click', hideSingleAndMultiTab);
multiRev.addEventListener('click', hideSingleMultiReverse);

function hideMultipleTab() {
	multipleLocationsTab.style.display = "none";
	getAddress.style.display = "none";
	multiRevTab.style.display = "none";
	singleLocationTab.style.display = "";
	singleLoc.className = "active";
	multipleLoc.className = "";
	reverseGeoLoc.className = "";
	multiRev.className = "";
};

function hideSingleTab() {
	singleLocationTab.style.display = "none";
	getAddress.style.display = "none";
	multiRevTab.style.display = "none";
	multipleLocationsTab.style.display = "";
	multipleLoc.className = "active";
	singleLoc.className = "";
	reverseGeoLoc.className = "";
	multiRev.className = "";
};

function hideSingleAndMultiTab() {
	singleLocationTab.style.display = "none";
	multiRevTab.style.display = "none";
	multipleLocationsTab.style.display = "none";
	getAddress.style.display = "";
	reverseGeoLoc.className = "active";
	singleLoc.className = "";
	multipleLoc.className = "";
	multiRev.className = "";
};

function hideSingleMultiReverse() {
	singleLocationTab.style.display = "none";
	multiRevTab.style.display = "";
	multipleLocationsTab.style.display = "none";
	getAddress.style.display = "none";
	multiRev.className = "active";
	singleLoc.className = "";
	multipleLoc.className = "";
	reverseGeoLoc.className = "";
};

/*default*/
singleLoc.click();

/*Loads initial map*/

L.mapquest.key = 'kj9G6HilbYNV3OLCyOgwEgi332xADIkN';
/*L.mapquest.key = 'fGlgbVLtBs7z2qOPTVrlcBg5qqpqQ5J3';*/

	var map = L.mapquest.map('map', {
	center: [32.777977,-96.796215],
		layers: L.mapquest.tileLayer('map'),
		zoom: 2
	});

/* Get the modal*/
var modal = document.getElementById("myModal");

/* Get the button that opens the modal */
var btn = document.getElementById("help");

/* Get the <span> element that closes the modal */
var span = document.getElementsByClassName("close")[0];

/* When the user clicks the button, open the modal */
btn.onclick = function() {
  modal.style.display = "block";
};

/* When the user clicks on <span> (x), close the modal */
span.onclick = function() {
  modal.style.display = "none";
};

/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
};

var resetMap = document.getElementById("resetMap");

resetMap.onclick = function() {
	map.remove();

	L.mapquest.geocoding().geocode('Dallas,TX',createMap);

	function createMap(error, response) {
	    var location = response.results[0].locations[0];
	    var latLng = location.displayLatLng;
	    map = L.mapquest.map('map', {
	        center: latLng,
	        layers: L.mapquest.tileLayer('map'),
	        zoom: 2
	    });
	    };
	if(list.childNodes.length > 13) {
		address.value = '';
	    city.value = '';
	    state.value = '';
	    postal.value = '';
	    country.value = '';
	    inpLat.textContent = ' ';
  		inpLng.textContent = ' ';
  	} else {
 		address.value = '';
	    city.value = '';
	    state.value = '';
	    postal.value = '';
	    country.value = ''; 		
  	};

 	if(getAddress.childNodes.length > 7) {
 		getLat.value = '';
    	getLng.value = '';
	    getAddress.children[2].children[1].textContent = '';
	    getAddress.children[3].children[1].textContent = '';
	    getAddress.children[4].children[1].textContent = '';
	    getAddress.children[5].children[1].textContent = '';
	    getAddress.children[6].children[1].textContent = '';
 	} else {
 		getLat.value = '';
    	getLng.value = '';		
 	};
};
