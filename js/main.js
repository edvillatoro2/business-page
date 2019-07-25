function initMap() {
  const loc = { lat: 38.855713, lng: -77.139433 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  const marker = new google.map.Marker({ position: loc, map: map });
}
