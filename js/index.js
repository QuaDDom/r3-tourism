function initMap() {
  // Coordenadas de Río Tercero
  var rioTercero = { lat: -32.17537433911555, lng: -64.11230163788255 };

  // Crea un nuevo mapa centrado en Río Tercero
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: rioTercero,
  });

  // Crea un marcador en la ubicación de Río Tercero
  var marker = new google.maps.Marker({
    position: rioTercero,
    map: map,
    title: "Río Tercero, Córdoba, Argentina",
  });
}
