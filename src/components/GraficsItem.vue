<template>

    <p>PYTHON</p>
    <div class="container">
    <div class="skills python">100%</div>
    </div>

    <p>SQL</p>
    <div class="container">
    <div class="skills sql">100%</div>
    </div>

    <p>HTML</p>
    <div class="container">
    <div class="skills html">70%</div>
    </div>

    <p>CSS</p>
    <div class="container">
    <div class="skills css">70%</div>
    </div>

    <p>VUE</p>
    <div class="container">
    <div class="skills vue">60%</div>
    </div>

  
    
</template>

<script>

</script>

<style>

* {box-sizing:border-box}

p {
    margin-left:20px
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

.python {width: 100%; background-color: antiquewhite ;} 
.sql {width: 100%; background-color: rgb(252, 215, 170) ;} 
.html {width: 70%; background-color: rgb(250, 185, 100) ;} 
.css {width: 70%; background-color: rgb(247, 161, 50) ;} 
.vue {width: 60%; background-color: rgb(250, 146, 0) ;}
</style>