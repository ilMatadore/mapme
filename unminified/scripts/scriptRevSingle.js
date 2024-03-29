/* reverse Single */
function reverseSingle() {
    var getLat = document.getElementById("getLat");
    var getLng = document.getElementById("getLng");
    var getIt = document.getElementById("getIt");
    var local = [getLat.value, getLng.value];
    if (getLat.value == '' && getLng.value == '') {
        alert("Please enter location's latitude and longitude");
        return;
    } else {
        map.remove();
        L.mapquest.geocoding().reverse(local, createMap);

        function createMap(error, response) {
            var location = response.results[0].locations[0];
            var latLng = location.displayLatLng;
            map = L.mapquest.map('map', {
                center: latLng,
                layers: L.mapquest.tileLayer('map'),
                zoom: 15
            });
            var customIcon = L.mapquest.icons.marker({
                primaryColor: '#ffa500'
            });
            var popup = L.marker(latLng, {
                draggable: true,
                icon: customIcon
            }).addTo(map);
            popup.on('dragend', function(event) {
                var marker = event.target;
                var position = marker.getLatLng();
                getLat.value = Math.round(position.lat * Math.pow(10, 6)) / Math.pow(10, 6);
                getLng.value = Math.round(position.lng * Math.pow(10, 6)) / Math.pow(10, 6);
                var resetValues = getLat.parentElement.parentElement.childNodes;
                resetValues[2].childNodes[1].textContent = "";
                resetValues[3].childNodes[1].textContent = "";
                resetValues[4].childNodes[1].textContent = "";
                resetValues[5].childNodes[1].textContent = "";
                resetValues[6].childNodes[1].textContent = "";
            });
        };
    };
    L.mapquest.geocoding().reverse(local, geocodingCallback);

    function geocodingCallback(error, result) {
        var got = result.results[0].locations[0];

        function createLi(resp, respValue, respType) {
            if (getAddress.childNodes.length < 8) {
                var gotAddLi = document.createElement("li");
                var gotAddLabel = document.createElement("label");
                var gotAddP = document.createElement("p");
                var gotAddSpan = document.createElement("span");
                gotAddLi.appendChild(gotAddLabel);
                gotAddLi.appendChild(gotAddP);
                gotAddLi.appendChild(gotAddSpan);
                getAddress.insertBefore(gotAddLi, getAddress.childNodes[getAddress.childNodes.length - 1]);
                gotAddP.textContent = respValue;
                gotAddLabel.textContent = respType;
                gotAddSpan.textContent = respType + " returned";
                gotAddLi.setAttribute("class", respType);
            } else {
                getAddress.children[2].children[1].textContent = got.street;
                getAddress.children[3].children[1].textContent = got.adminArea5;
                getAddress.children[4].children[1].textContent = got.adminArea3;
                getAddress.children[5].children[1].textContent = got.postalCode;
                getAddress.children[6].children[1].textContent = got.adminArea1;
            }
        }
        createLi(got, got.street, "Address");
        createLi(got, got.adminArea5, got.adminArea5Type);
        createLi(got, got.adminArea3, got.adminArea3Type);
        createLi(got, got.postalCode, "Postal Code");
        createLi(got, got.adminArea1, got.adminArea1Type);
    }
}
getIt.addEventListener("click", reverseSingle);