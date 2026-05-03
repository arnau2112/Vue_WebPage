<template>
  <div style="position: absolute; left: 0%; right: 0; top: 0; bottom: 0;">
    <div class="title">
      <h2 style="color: darkgray; margin: 0;">
          🔍 GeoVisor - Leaflet Map
      </h2>
    </div>
    <div style="position: absolute; z-index:1000; bottom:20px; left:60px; background-color:white; padding:10px; border-radius: 10px;">Legend: 
        <a>🔴 Education</a>
        <a>🟢 Work</a>
    </div>
    <div id="sidebar" class="leaflet-sidebar collapsed" style="height: 400px;">
        <div class="leaflet-sidebar-tabs">
            <ul role="tablist">
                <li><a href="#home" role="tab">🏠</a></li>
                <li><a href="#profile" role="tab">👤</a></li>
                <li><a href="#leyenda" role="tab">🧾</a></li>
                <li><a href="#places" role="tab">📍</a></li>
            </ul>
        </div>
        <div class="leaflet-sidebar-content">
            <div class="leaflet-sidebar-pane" id="home">
                <h1>Welcome to GeoVisor</h1>
                <p>This is a simple Leaflet map integrated into a Vue.js application where I show the places I have studied and worked.</p>
            </div>
            <div class="leaflet-sidebar-pane" id="profile">
                <h1>Leaflet</h1>
                <p>Leaflet is a modern, lightweight open-source JavaScript library for mobile-friendly interactive maps. Version: "leaflet": "^1.9.4",
                </p>
            </div>  
            <div  class="leaflet-sidebar-pane" id="leyenda" >
                <h1>Legend</h1>
                <p>🔴 Education locations<br>🟢 Work locations</p>
            </div>

            <div class="leaflet-sidebar-pane" id="places">
                <h1>Places</h1>
                <div v-for="location in fotos_locations(ubicaciones)" :key="location.Nombre" class="card">
                    <a :href="location.Link" target="_blank" style="text-align: left;">
                        <img class="imatge"  :src="location.Foto" alt="Location Image" style="width:100%;height:100%;">
                        <p class="tooltiptext">{{ location.Nombre }}</p>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div id="map" style="height:100%;"></div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import "leaflet-sidebar-v2/css/leaflet-sidebar.min.css";
import "leaflet-sidebar-v2/js/leaflet-sidebar.min.js";




const initialMap = ref(null);


let anchoPantalla = window.innerWidth;;

const content = `
        <div style="text-align: center;">
            <h3>UPC</h3>
            <p>EPSEB</p>
            <img src="EPSEB.jpg" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://epseb.upc.edu/es" target="_blank" style="color: blue; text-decoration: underline;">Visit UPC EPSEB</a>
        </div>
    `;
    const content2 = `
        <div style="text-align: center;">
            <h3>High School</h3>
            <p>IES Sant Just Desvern</p>
            <img src="santjust.jpg" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://agora.xtec.cat/iessantjust/" target="_blank" style="color: blue; text-decoration: underline;">Visit IES Sant Just Desvern</a>
        </div>
    `;

    const content3 = `
        <div style="text-align: center;">
            <h3>ICGC</h3>
            <p>Institu Cartogràfic de Catalunya</p>
            <img src="icgc.jpg" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://www.icgc.cat/" target="_blank" style="color: blue; text-decoration: underline;">Visit ICGC</a>
        </div>
    `;
    const content4 = `
        <div style="text-align: center;">
            <h3>Infraplan</h3>
            <p>Infraplan Geospatial</p>
            <img src="infraplan.png" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://infraplan-geospatial.com/es" target="_blank" style="color: blue; text-decoration: underline;">Visit Infraplan</a>
        </div>
    `;
    const content5 = `
        <div style="text-align: center;">
            <h3>GesFoto</h3>
            <p>Gestión y servicios fotogramétricos</p>
            <img src="gesfoto.png" alt="Italian Trulli" style="max-width:70%;max-height:70%;"><br>
            <a href="https://gesfoto.com/" target="_blank" style="color: blue; text-decoration: underline;">Visit GesFoto</a>
        </div>
    `;
    const content6 = `
        <div style="text-align: center;">
            <h3>Jay Peak Resort</h3>
            <p>Mountain resort in Vermont</p>
            <img src="jaypeakwintr.jpg" alt="Italian Trulli" style="max-width:70%;max-height:70%;"><br>
            <a href="https://jaypeakresort.com/" target="_blank" style="color: blue; text-decoration: underline;">Visit Jay Peak Resort</a>
        </div>
    `;

    
    const ubicaciones = [content, content2, content3, content4, content5, content6];

    function fotos_locations(ubicaciones) {
        const src = [];
        var json = JSON.stringify(ubicaciones);
        const parser = new DOMParser();
        const doc = parser.parseFromString(json, 'text/html');
        for (let i = 0; i < ubicaciones.length; i++) {
            const fotos_sucias = doc.querySelectorAll('img')[i].attributes.src.value;   
            const nom = doc.querySelectorAll('p')[i].textContent;
            const foto = fotos_sucias.match(/[a-zA-Z0-9.]+/g).join('');
            const link = doc.querySelectorAll('a')[i].href.split('%22')[1];
            src.push({ Foto: foto, Nombre: nom, Link: link });
        }
        return src
    };

    fotos_locations(ubicaciones);

onMounted(()=> {
    initialMap.value = L.map('map').setView([41.38879, 2.15899 ], 13);
    var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(initialMap.value);

    var HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19, 
        attribution: '&copy; <a href="http://www.icgc.cat/condicions">OpenStreetMap</a>'
    });

    

    let ColorIcon =  L.Icon.extend({
    options: {
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    }
    });

    let greenIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png'});

    let redIcon = new ColorIcon({iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'});


    
    var marker1 = L.marker([41.3839, 2.1128],{icon: redIcon}).addTo(initialMap.value).bindPopup(content) 
    var marker2 = L.marker([41.3884831, 2.0748443],{icon: redIcon}).addTo(initialMap.value).bindPopup(content2) 
    var marker3 = L.marker([41.370260, 2.155711], {icon: greenIcon}).addTo(initialMap.value).bindPopup(content3) 
    var marker4 = L.marker([41.396752, 2.154645], {icon: greenIcon}).addTo(initialMap.value).bindPopup(content4)
    var marker5 = L.marker([41.381261, 2.144349], {icon: greenIcon}).addTo(initialMap.value).bindPopup(content5)
    var marker6 = L.marker([44.938067, -72.503652], {icon: greenIcon}).addTo(initialMap.value).bindPopup(content6)



    var education = L.layerGroup([marker1, marker2]);
    var work = L.layerGroup([marker3, marker4, marker5, marker6]);


    var baseMaps = {
    "OpenStreetMap": OSM,
    "OSM Hot": HOT
    };

    var overlayMaps = {
    "Education 📖": education,
    "Work 💼": work
    };

    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(initialMap.value);


    var sidebar = L.control.sidebar('sidebar', {
    position: 'left'
    });

    initialMap.value.addControl(sidebar);

    var sidebar = L.control.sidebar({
		  container: 'sidebar',
		  position: 'left'
		}).addTo(initialMap.value);

    

    if (anchoPantalla > 768) {
        var geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
        geocoder: L.Control.Geocoder.nominatim({
            serviceUrl: 'https://nominatim.openstreetmap.org' 
        })
    })
    .on('markgeocode', function (e) {
        var bbox = e.geocode.bbox; //
        if (bbox) {
            var poly = L.polygon([
                bbox.getSouthEast(),
                bbox.getNorthEast(),
                bbox.getNorthWest(),
                bbox.getSouthWest()
            ]);
            initialMap.value.fitBounds(poly.getBounds()); 
        }
    })
    .addTo(initialMap.value); 
    }
    

    });

</script>



<style scoped>

.title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000; 
    display: flex; 
    gap: 20px; 
    background: white; 
    padding: 10px; 
    border-radius: 20px;
}

.card {
    width: 50%;  
    height: 200px;
    margin: 0 auto;
    margin: 0 auto; 
    border-radius: 10px; padding: 5px; 
    margin-bottom: 10px;
}

.imatge {
    display: flex;           /* Añade esto */
    justify-content: center; /* Centra horizontalmente */
    align-items: center;     /* Centra verticalmente (opcional) */
    margin: 0 auto; 
    border-radius: 10px; 
    padding: 5px; 
    max-width: 180px;
    max-height: 120px;
}
.card img:hover {
    transform: scale(1.05);  /* Aumenta el tamaño de la imagen */
    transition: transform 0.3s ease;  /* Transición suave */
}

.tooltiptext {
  width: 45%;
  background-color: rgb(187, 173, 173);
  color: #000000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1000;
}


/* Pero en móvil, ocultamos el DIV completo */
@media screen and (max-width: 768px) {
    .title {
        display: none;
    }
    .leaflet-sidebar.collapsed {
        display: none;
    }
}

</style>


