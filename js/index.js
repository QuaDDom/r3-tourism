function initMap() {
  // Coordenadas de Río Tercero
  let rioTercero = { lat: -32.17537433911555, lng: -64.11230163788255 };

  // Crea un nuevo mapa centrado en Río Tercero
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: rioTercero,
  });

  // Crea un marcador en la ubicación de Río Tercero
  let marker = new google.maps.Marker({
    position: rioTercero,
    map: map,
    title: "Río Tercero, Córdoba, Argentina",
  });
}

const formButton = document.querySelector("#formButton");

function redirect() {
  let currentURL = window.location.href;
  let newURL = currentURL + "/form.html";
  window.open("/form.html", "_blank");
}

if (formButton) {
  formButton.addEventListener("click", redirect);
}
