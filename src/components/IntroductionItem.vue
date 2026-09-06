<template>
  <div>
    <h1>WHO I AM AND WHY I DO THIS</h1>
    <div class="general" >
      <div class="card">
        <a href="https://www.linkedin.com/in/arnau-sola-sig/" target="_blank">
          <span class="tooltiptext">Linkedin Profile</span>
          <img style=" width: 200px; margin-bottom: -20px; margin-left: 250px;  " v-bind:src="url">   
        </a>     
        <p style="margin-left: 250px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); padding: 20px;"><b>Arnau Solà</b> <br><br> Geoinformation Engineer</p>
      </div>
      <p class="intro">{{ introduccion }}</p>
    </div>
    <div class="contenedor-padre">
      <div class="caja-1">
        <b>ICGC</b><br><br>
                          I have had the opportunity to work with Arnau over the past few months during his collaboration with the Institut Cartogràfic i Geològic de Catalunya, 
                          and his performance has been excellent. I am very pleased with his attitude and commitment. He is a highly talented professional with a great capacity for learning.
                          He has solid knowledge of geographic information systems (GIS), SQL, and Python programming, and knows how to make the most of the best tools for each assigned task, providing new solutions whenever necessary.
                          <br><br>Without a doubt, he is a valuable asset to any company, and I am confident he has a great future ahead as a GIS technician.
          <p style="font-style: italic;">GIS Technician at Geological Hazards Department</p>
        </div>
        
      <div class="caja-2">
         <b>ICGC</b><br><br>
                          Arnau Solà completed 530 hours of university internships at the Cartographic and Geological Institute of Catalonia (ICGC) during the 2024–2025 academic year, within the Geological Risk and Engineering Area (AERG).<br><br>
                          During this period, he collaborated in the organization, processing, and representation of geospatial data in the context of the natural and social environment. The work was carried out using GIS software environments such as ArcGIS Pro, QGIS, and QField, as well as PostgreSQL/PostGIS databases, with support from Python and SQL programming.<br><br>
                          Throughout the internship, he worked on the representation of thematic data, the construction of information workflows, and the development of plugins, providing support for various tasks related to geographic information systems carried out at AERG.<br><br>
                          During the internship, he demonstrated excellent adaptability to the team, a strong ability to learn, and a high sense of responsibility towards his work.
          <p style="font-style: italic;">Head of the Geological Hazards Department</p>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introduccion: `I graduated in 2025 with a degree in Geoinformation and Geomatics Engineering from UPC. I am passionate about Geographic Information Systems (GIS), especially QGIS and ArcGIS, and their integration with Python. I believe GIS is one of the most powerful tools we have today, capable of solving challenges ranging from transport logistics to environmental issues. Time flies when I’m working with spatial data, and I’m proud to have chosen this career. 
                    During my internship at ICGC, in the Geological Hazards department, I contributed with my GIS knowledge—developing and repairing QGIS plugins with Python, and creating an Atlas of debris flows in Catalonia.
                    I consider myself a collaborative and hard-working professional who is always striving to improve. Outside of work, I enjoy hiking in the mountains, combining my love for nature, sport, and breathtaking landscapes.
                    If you’d like to know more, feel free to reach out via message or email—I’d be happy to connect.`,
      url: 'img_avatar.png'
    };
  }
};
</script>

<style scoped>

.contenedor-padre {
  display: flex; /* Activa el diseño en línea */
  gap: 20px;     /* Espacio opcional entre los contenedores */
}

/* Estilos visuales para que se noten los contenedores */
.caja-1, .caja-2 {
  background-color: #f0f0f0;
  padding: 20px;
  width: 50%; /* Ocupan la mitad del espacio cada uno */
  border-left: 6px solid rgb(224, 158, 14);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 3%;
  border-radius: 20px;
}

.caja-1:hover {
  transform: scale(1.01); /* Makes the div 20% bigger */
  border-left: 6px solid rgb(0, 0, 0);
}

.caja-2:hover {
  transform: scale(1.01); /* Makes the div 20% bigger */
  border-left: 6px solid rgb(0, 0, 0);
}

.general {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-bottom: 20px;
}


h1 {
    text-align: center;
    font-family: Georgia;
    margin-bottom: 20px;
    color: rgb(0, 0, 0);
}

.intro {
    font-family: Arial, sans-serif;
    line-height: 3;
    text-align: justify;
    color: #333;
    font-size: 20px;
    margin-left: 50px;
    margin-right: 200px;
}

.card{
  text-align: center; 
  margin-right: 20px; 
  transition: 0.3s;
}

.tooltiptext {
  visibility: hidden;
  width: 130px;
  background-color: rgb(187, 173, 173);
  color: #000000;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1000;
  margin-left: 250px;
}

.card:hover .tooltiptext {
  visibility: visible;
}

@media (max-width: 1000px) {
  .general {
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
  }
  
  .intro {
    margin-left: 20px;
    margin-right: 20px;
  }
  
  .card {
    margin-bottom: 20px; 
    margin-left:-200px;
  }

  h1 {
    font-size: 24px;
  }
}

</style>
