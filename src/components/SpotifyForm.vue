<template>
  <nav style="margin: 20px;">
  <img class="logo" draggable="false" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify">
  <hr class="hr1">
  <div>
    <p class="home-p pages">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img"  class="Svg-sc-1bi12j5-0 gSLhUO home-active-icon" viewBox="0 0 24 24">
        <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"></path>
      </svg>
      Home
    </p>
    <p class="pages">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" class="Svg-sc-1bi12j5-0 gSLhUO search-active-icon" viewBox="0 0 24 24">
        <path d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z" fill="#B3B3B3"></path>
      </svg>
      Search
    </p>
    <p class="pages">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" class="Svg-sc-1bi12j5-0 gSLhUO collection-active-icon" viewBox="0 0 24 24">
        <path d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z"></path>
      </svg>
      Your Library
    </p>
    <p class="pages">
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 16 16" class="Svg-sc-1bi12j5-0 gSLhUO">
        <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"></path>
      </svg>
      Favorite Songs
    </p>
  </div>
  <hr class="hr2">
  <div class="list" style=" margin-left: 40px;">

    <div v-for="x in data.songs" :key="x.id" v-if ="data">
    <a :href="x.spotify" target="_blank">
        <img :src="x.cover" alt="#">
      </a>
      <p style=" font-size: 14px; ">{{ x.title }}</p>
      <a style=" font-size: 14px; ">{{ x.artist }}</a>
    </div>

   
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
        data : null
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
        const response = await fetch("/songs.json");
        const data = await response.json();
        this.data = data;
        console.log("Songs data:", data);
        console.log("API", data.songs);
    }
  }
};
</script>


<style scoped>




html{
    width:100vw;
    font-family:sans-serif;
    height:100vh;
    color:lightgray;
    overflow: hidden;
    user-select:none;
}
body{
    margin:0px;
    padding:0px;
    max-width:100%;
    height:100%;
    background-image:url("https://images.hdqwalls.com/download/windows-11-blue-material-3y-2560x1440.jpg");
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow: hidden;
}
nav{
    width:60vw;
    height:2150px;
    max-width:900px;
    min-width:250px;
    min-height:400px;
    background:rgba(000, 000, 000, 0.65);
    align-self:center;
    justify-self:center;
    border-radius:20px;
    position:relative;
    padding:10px;
}
.logo{
    width:95px;
    position:absolute;
    inset:15px;
    filter:grayscale(100%);
    -webkit-filter:grayscale(100%);
}
hr, .hr1{
    width:100%;
    height:1px;
    border:none;
    border-bottom:1px solid rgba(111, 111, 111, 0.60);
    margin-top:43px;
}
.pages{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size:14px;
    box-sizing:border-box;
    cursor:pointer;
    user-select:none;
    padding:7px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    margin:6px 0px;
}
.pages svg{
    height:21px;
    margin-right: 10px;
}
.pages svg path{
    fill:lightgray;
}
.home-p svg path{
    fill:white;
}
.home-p, .pages:hover{
    color:white;
    background:rgba(000, 000, 000, 0.30);
}
.pages:hover svg path{
    fill:white;
}
.hr2{
    margin-top: 6px;
}
.list{
    display: flex;
    flex-wrap: wrap;  
    width:100%;
    overflow: auto;
    padding: 5px 0px;
}
.list div{
    width:140px;          
    height: 170px;         
    margin: 10px;
}
.list div img{
    width:120px;
    filter:grayscale(60%);
    -webkit-filter:grayscale(60%);
}
.list div:hover img{
    filter:grayscale(0%);
    -webkit-filter:grayscale(0%);
}
.list div p{
    font-size: 10px;
    margin-top: 5px;
    font-weight: bolder;
    margin-bottom: 0px;
}
.list div a{
    font-size: 9px;
    margin-top: 3px;
}
.list div:hover{
    color:white;
}
.hr3{
    margin-top: 10px;
}
.play{
    max-width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.play img{
    width: 55px;
    margin-right: 5px;
}
.play .container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
.play .songName{
    font-weight: bolder;
    font-size: 12px;
    margin-top: 0px;
}
.play .name{
    font-size: 9px;
    margin-top: -10px;
}
.play .container div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.play .container div span{
    width: 100%;
    height: 2px;
    position: relative;
    display: block;
    background-color: rgba(111, 111, 111, 0.90);
    margin: 0px 5px;
    display: flex;
    align-items: center;
}
.play .container div span::after{
    position: absolute;
    content: "";
    width:60%;
    height: 100%;
    background-color: #1ed760;
}
.play .container div span::before{
    width:10px;
    height: 10px;
    position: absolute;
    content: "";
    background-color: #1ed760;
    opacity: 0;
    left: 60%;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}
.play:hover .container div span::before{
    opacity: 1;
}
.play .container div p{
    font-size: 8px;
}
.play .container .controls{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2px;
}
.play .container .controls svg{
    fill:lightgray;
    border-radius: 50%;
    width: 14px;
    margin: 0px 5px;
    height: 14px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    cursor: pointer;
}
.play .container .controls svg.play-btn{
    background-color: lightgray;
    fill:black;
    padding: 2px;
}
.play .container .controls svg:hover{
    fill: #1ed760;
}
.play .container .controls svg.play-btn:hover{
    background-color: #1ed760;
    fill:lightgray;
}
::-webkit-scrollbar{
    height: 6px;
}
::-webkit-scrollbar-track{
    background: transparent;
}
::-webkit-scrollbar-thumb{
    background-color: rgba(111, 111, 111, 0.60);
    border-radius: 40px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    -ms-border-radius: 40px;
    -o-border-radius: 40px;
}
::-webkit-scrollbar-thumb:hover{
    background-color: rgba(111, 111, 111, 0.80);
}
</style>