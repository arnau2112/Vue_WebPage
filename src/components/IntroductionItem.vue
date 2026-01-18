<template>
  <div>
    <h1>WHO I AM AND WHY I DO THIS</h1>
    <div class="general" >
      <div class="card">
        <a href="https://www.linkedin.com/in/arnau-sola-sig/" target="_blank">
          <img style=" width: 200px; margin-bottom: -20px; margin-left: 250px;  " v-bind:src="url">   
        </a>     
        <p style="margin-left: 250px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); padding: 20px;"><b>Arnau Solà</b> <br><br> Geoinformation Engineer</p>
      </div>
      <p class="intro">{{ introduccion }}</p>
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
      url: '/img_avatar.png'
    };
  }
};
</script>

<style scoped>

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



</style>
