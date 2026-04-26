<template>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="header">
        <header>
            <h1>Outdoors Photos</h1>
            <div >
                <p>Outdoors photos made by me. You can also follow me on instagram: @outdoors_suli</p>
             </div>
        </header>
    </div>
    <div class="button_row">
        <button v-on:click="filterButton = !filterButton">☰</button>
        <div v-if="filterButton">
            <button class="button2" v-on:click="stationFilterSummer(imageModules)">☀️ Summer</button>
            <button class="button2" v-on:click="stationFilterWinter(imageModules)">❄️ Winter</button>
            <button class="button2" v-on:click="stationFilterSpring(imageModules)">🌱 Spring</button>
            <button class="button2" v-on:click="stationFilterAutumn(imageModules)">🍂 Autumn</button>
            <button class="button2" v-on:click="stationFilterAll()">🌍 All</button>
        </div>
    </div>
    <div class="content" >
        <div v-for="url in (displayImages || Object.values(imageModules))" :key="url">
            <img @click="openPDF(url)" :src="url" class="imatge">
        </div>
    </div>

</body>

</template>


<script>

export default {
  data() {
    const imageModules = import.meta.glob(
        '/src/assets/mountain_images/*.{png,jpg,jpeg,webp,PNG,JPG}',
        { eager: true, import: 'default' }
    );
    const filterButton = false;
    const color = '#5799db';
    const displayImagesS = [];
    const displayImagesW = [];
    const displayImagesSp = [];
    const displayImagesA = [];
    const displayImages = null;
    return { imageModules, color, filterButton, displayImagesS, displayImagesW, displayImagesSp, displayImagesA, displayImages };
  },
  methods: {
    openPDF(mountainUrl) {
        window.open(mountainUrl, '_blank');
    },
    filter(imageModules) {
        console.log('Filtering images');
        const dict = {};
        const urlImages = Object.keys(imageModules); 
        for(let i=0; i< urlImages.length; i++){
            console.log('Processing image URL:', urlImages[i]);
            let station = urlImages[i].split('/')[4].split('_')[2].split('.')[0];
            console.log('Station:', station);
            const newPath = urlImages[i]
            // Cambiar aquesta linia sense el replace per a localhost, ja que el path de les imatges és diferent en local i en producció
            const image = newPath.replace('/src/', '/').replace('/mountain_images/', '/');
            console.log('SRC image:', image);
            if (!dict[station]) {
                dict[station] = [];
            }
            dict[station].push(image);
            }
        return dict;
    }, 
    stationFilterSummer(imageModules) {
        const dictS = this.filter(imageModules)
        this.displayImages = dictS['s'];
        console.log('Summer images:',  dictS['s']);
    },
    stationFilterWinter(imageModules) {
        const dictW = this.filter(imageModules)
        this.displayImages = dictW['w'];
        console.log('Winter images:', dictW['w']);
    },
    stationFilterSpring(imageModules) {
        const dictSp = this.filter(imageModules)
        this.displayImages = dictSp['sp'];
        console.log('Spring images:', dictSp['sp']);
    },
    stationFilterAutumn(imageModules) {
        const dictA = this.filter(imageModules)
        this.displayImages = dictA['a'];
        console.log('Autumn images:', dictA['a']);
    },
    stationFilterAll() {
        this.displayImages = null;
    }
  }
}

</script>



<style scoped>
body {
    font-family: 'Lato', sans-serif;
    background-color: #ffffff;
}

.header {
  padding: 5px;
  text-align: center;
  background: #ffffff;
  color: rgb(0, 0, 0);
  font-size: 20px;
}


.content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
    background-color: #ffffff;
}

.imatge {
    width: 100%;
    height: auto;
    transition: opacity 0.5s ease;
}

.imatge:hover {
    opacity: 0.8;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #195b81;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    gap: 20px; 
    margin-left: 10px;
    margin-bottom: 10px;
}

.button2 {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color:#5799db;
    margin-bottom: 10px;
}

.button_row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.instagram_button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

</style>