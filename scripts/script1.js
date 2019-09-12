//hides/shows multiple/ single tabs
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
}

function hideSingleMultiReverse() {
	singleLocationTab.style.display = "none";
	multiRevTab.style.display = "";
	multipleLocationsTab.style.display = "none";
	getAddress.style.display = "none";
	multiRev.className = "active";
	singleLoc.className = "";
	multipleLoc.className = "";
	reverseGeoLoc.className = "";
}

//default
singleLoc.click()

//Loads initial map

L.mapquest.key = 'fGlgbVLtBs7z2qOPTVrlcBg5qqpqQ5J3';
var baseLayer = L.mapquest.tileLayer('map');

var map = L.mapquest.map('map', {
center: [32.777977,-96.796215],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
});

L.control.layers({
  'Map': baseLayer,
  'Hybrid': L.mapquest.tileLayer('hybrid'),
  'Satellite': L.mapquest.tileLayer('satellite'),
  'Light': L.mapquest.tileLayer('light'),
  'Dark': L.mapquest.tileLayer('dark')
}).addTo(map);
