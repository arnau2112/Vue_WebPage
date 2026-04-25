<template>

<h1 style="text-align: center; font-family: Georgia;">Experience</h1>
<div class="timeline">
    <div class="container right">
    <div v-on:click="jay = !jay" class="content">
      <h2>June 2024 - September 2024</h2>
      <p>Lifeguard at Jay Peak Resort (Vermont) through the Work and Travel 2024 program.</p>
      <div class="experiencia" v-if="jay">• Ensured the safety of swimmers in pools and water parks<br>
                      • Monitored activities to prevent accidents<br>
                      • Provided first aid and emergency response when necessary<br>
                      • Maintained cleanliness and order in aquatic facilities</div>
    </div>
  </div>
  <div class="container left">
    <div v-on:click="icgc = !icgc" class="content">
      <h2>December 2024 - July 2025</h2>
      <p>Internship at ICGC in the geological hazards</p>
      <div class="experiencia" v-if="icgc">• Geospatial analysis using QGIS and ArcGIS Pro <br>
                       • Development and maintenance of plugins with Python <br>
                       • Creation of QGIS Atlas for Flow Debris mapping <br>
                       • Management and querying of geospatial databases with PgAdmin4 (PostgreSQL / PostGIS) <br>
                       • Use of specialized tools such as QField and Flow-R</div>
    </div>
  </div>
  <div class="container right">
    <div v-on:click="gesfoto = !gesfoto" class="content">
      <h2>September 2024 - October 2025</h2>
      <p>Geomatic engineer in GesFoto</p>
      <div class="experiencia" v-if="gesfoto">• Creation of QGIS Plugins using Python <br>
                          • Development of a web viewer using Leaflet <br>
                          • Cartographic review using Mobile Mapping in QGIS and GNSS in the field</div>
    </div>
  </div>
  <div class="container left">
    <div v-on:click="infraplan = !infraplan" class="content">
      <h2>November 2025 - Present</h2>
      <p>Geomatic engineer at Infraplan Geospatial</p>
      <div class="experiencia" v-if="infraplan">• Database maintenance using PostgreSQL (PostGIS) <br>
                          • Fixing bugs in Django and Vue <br>
                          • Using geospatial data with QGIS, Cloud Compare or PDAL</div>
    </div>
  </div>
</div>
    

</template>

<script>
  export default {
  data() {
    return {
      jay: false,
      icgc: false,
      gesfoto: false,
      infraplan: false,

    };
  },
};
</script>

<style scoped >
* {
  box-sizing: border-box;
}

/* Set a background color */
body {
    background-color: white;
  font-family: Helvetica, sans-serif;
}

.experiencia {
    margin-top: 10px;
    line-height: 1.6;
    background-color: #FF9F55;
    padding: 10px;
    border-radius: 8px;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color:  antiquewhite;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent  antiquewhite;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent  antiquewhite transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: antiquewhite;
  position: relative;
  border-radius: 6px;
  cursor: pointer;
}

.content:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px grey;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>