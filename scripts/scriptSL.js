/* single location */function mapSingle(){var address=document.getElementById("address");var city=document.getElementById("city");var state=document.getElementById("state");var postal=document.getElementById("postal");var country=document.getElementById("country");const singleLocation={street: address.value, city: city.value, state: state.value, postalCode: postal.value, country: country.value};if (address.value=='' && city.value=='' && state.value=='' && postal.value=='' && country.value==''){alert("Please enter location's information");return;}else{map.remove()L.mapquest.geocoding().geocode(singleLocation, createMap);function createMap(error, response){var location=response.results[0].locations[0]; var latLng=location.displayLatLng; map=L.mapquest.map('map',{center: latLng, layers: L.mapquest.tileLayer('map'), zoom: 12});var customIcon=L.mapquest.icons.marker({primaryColor: '#ffa500'});L.marker(latLng,{icon: customIcon}).addTo(map);};var ul=document.getElementById("list");if (ul.childNodes.length < 14){var lat=document.createElement("li"); var labLat=document.createElement("label"); labLat.textContent="Latitude" var inpLat=document.createElement("p"); inpLat.setAttribute("id","inpLat"); inpLat.setAttribute("type", "text"); var spaLat=document.createElement("span"); spaLat.textContent="Latitude"; lat.appendChild(labLat); lat.appendChild(inpLat); lat.appendChild(spaLat); ul.insertBefore( lat,ul.childNodes[11]); var lng=document.createElement("li"); var labLng=document.createElement("label"); labLng.textContent="Longitude"; var inpLng=document.createElement("p");inpLng.setAttribute("id","inpLng"); inpLng.setAttribute("type", "text"); var spaLng=document.createElement("span"); spaLng.textContent="Longitude"; lng.appendChild(labLng); lng.appendChild(inpLng); lng.appendChild(spaLng); ul.insertBefore( lng,ul.childNodes[12]);};L.mapquest.geocoding().geocode(singleLocation, geoCodingCallback);function geoCodingCallback(error, response){document.getElementById("inpLat").textContent=response.results[0].locations[0].displayLatLng.lat; document.getElementById("inpLng").textContent=response.results[0].locations[0].displayLatLng.lng;};};};var submitSingle=document.getElementById("submitSingle");submitSingle.addEventListener("click",mapSingle);