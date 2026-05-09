<template>
<div style="margin-top: 3%;">
<h1 style="text-align: center; font-family: Georgia;">Codes</h1>
  <div class="centrado">
      <p>PYTHON</p>
      <div class="container">
        <a href="https://es.python.org/">
          <div class="skills python">100%</div>
        </a>
      </div>
  </div>

  <div class="centrado">
      <p>SQL</p>
      <div class="container">
        <a href="https://www.postgresql.org/">
          <div class="skills sql">100%</div>
        </a>
      </div>
  </div>

  <div class="centrado">
      <p>HTML</p>
      <div class="container">
        <a href="https://www.w3schools.com/Html/">
          <div class="skills html">70%</div>
        </a>
      </div>
  </div>

  <div class="centrado">
      <p>CSS</p>
      <div class="container">
        <a href="https://developer.mozilla.org/es/docs/Web/CSS">
          <div class="skills css">70%</div>
        </a>
      </div>
    </div>

  <div class="centrado">
      <p>VUE</p>
      <div class="container">
        <a href="https://vuejs.org/">
          <div class="skills vue">60%</div>
        </a>
      </div>
  </div>

   <div class="centrado">
      <p>DJANGO</p>
      <div class="container">
        <a href="https://www.djangoproject.com/">
         <div class="skills django">50%</div>
        </a>
      </div>
  </div>
</div>


  
    
</template>

<script>

export default {
      props: ['grafics']
  }

</script>

<style scoped>

* {box-sizing:border-box}

a {
    text-decoration: none;
}

p {
    margin-left:20px;
    min-width: 70px;  
    text-align: right; 
}

.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
}


.container {
  width: 50%; 
  background-color: #ddd; 
  margin-left:20px;
  border-radius:12px;

}

.skills {
  text-align: right; 
  padding-top: 10px; 
  padding-right: 5px;
  padding-bottom: 10px; 
  color: rgb(0, 0, 0); 
  border-radius:12px;

}

.skills:hover {
    opacity: 0.8;
}

.python {width: 100%; background-color: rgb(184, 107, 0) ;}  
.sql {width: 100%; background-color: rgb(250, 146, 0) ;}  
.html {width: 70%; background-color: rgb(247, 161, 50) ;}  
.css {width: 70%; background-color: rgb(250, 185, 100) ;}  
.vue {width: 60%; background-color: rgb(252, 215, 170) ;} 
.django {width: 50%; background-color: antiquewhite  ;}  

</style>