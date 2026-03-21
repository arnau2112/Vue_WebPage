<template>
  <div style="position: absolute; left: 0%; right: 0; top: 0; bottom: 0;">
    <div class="title">
      <h2 style="color: darkgray; margin: 0;">
          🔍 GeoVisor - Leaflet Map
      </h2>
    </div>
    <div style="position: absolute; z-index:1000; bottom:20px; left:20px; background-color:white; padding:10px; border-radius: 10px;">Llegenda: 
        <a>🔴 Education</a>
        <a>🟢 Work</a>
    </div>
    <div id="map" style="height:100%;"></div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

const initialMap = ref(null);



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

    const content = `
        <div style="text-align: center;">
            <h3>UPC</h3>
            <p>EPSEB</p>
            <img src="/public/EPSEB.jpg" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://epseb.upc.edu/es" target="_blank" style="color: blue; text-decoration: underline;">Visit UPC EPSEB</a>
        </div>
    `;
    const content2 = `
        <div style="text-align: center;">
            <h3>High School</h3>
            <p>IES Sant Just Desvern</p>
            <img src="/public/santjust.jpg" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://agora.xtec.cat/iessantjust/" target="_blank" style="color: blue; text-decoration: underline;">Visit IES Sant Just Desvern</a>
        </div>
    `;

    const content3 = `
        <div style="text-align: center;">
            <h3>ICGC</h3>
            <p>Institu Cartogràfic de Catalunya</p>
            <img src="/public/icgc.jpg" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://www.icgc.cat/" target="_blank" style="color: blue; text-decoration: underline;">Visit ICGC</a>
        </div>
    `;
    const content4 = `
        <div style="text-align: center;">
            <h3>Infraplan</h3>
            <p>Infraplan Geospatial</p>
            <img src="/public/infraplan.png" alt="Italian Trulli" style="width:100%;height:100%;">
            <a href="https://infraplan-geospatial.com/es" target="_blank" style="color: blue; text-decoration: underline;">Visit Infraplan</a>
        </div>
    `;

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

    var education = L.layerGroup([marker1, marker2]);
    var work = L.layerGroup([marker3, marker4]);


    var baseMaps = {
    "OpenStreetMap": OSM,
    "OSM Hot": HOT
    };

    var overlayMaps = {
    "Education 📖": education,
    "Work 💼": work
    };

    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(initialMap.value);
    
});

</script>



<style scoped>
/* El DIV con clase "title" se muestra normalmente */
.title {
    position: absolute;
    top: 10px;
    left: 20%;
    transform: translateX(-50%);
    z-index: 1000; 
    display: flex; 
    gap: 20px; 
    background: white; 
    padding: 10px; 
    border-radius: 20px;
}

/* Pero en móvil, ocultamos el DIV completo */
@media screen and (max-width: 768px) {
    .title {
        display: none;
    }
}

</style>