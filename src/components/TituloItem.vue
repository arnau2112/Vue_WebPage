
<template >
    <div class="titulo">
        <div class="quote">"The application of GIS is limited only by the imagination of those who use it"</div>
        <div  class="hero-left" >
            <h1 style="font-size: 60px; margin-left: 40px; color:chartreuse">{{ nombre }}</h1>
            <h2 style="font-size: 30px; margin-top: 0; margin-left: 40px;">A web page created by me with Vue.js</h2>
            <div class="engineer">Engineer in Geoinformation and Geomatics 🌍</div>
        </div>
        
    </div>
    <div>
        <button style="gap: 20px; margin-left: 20px;" v-on:click="click = !click">☰</button>
            <p v-if="click">
                <button v-on:click="codi_clicado0 = ! codi_clicado0; $emit('toggle-codis'); "  v-bind:style="{ backgroundColor:codi_clicado0 ? 'aliceblue' : '#5799db' }" class="button2" >Codes</button>
                <button v-on:click="codi_clicado1 = ! codi_clicado1; $emit('toggle-experience'); "  v-bind:style="{ backgroundColor:codi_clicado1 ? 'aliceblue' : '#5799db' }" class="button2" >Experience</button>
                <button v-on:click="codi_clicado2 = ! codi_clicado2; $emit('toggle-grafics'); "   v-bind:style="{ backgroundColor:codi_clicado2 ? 'aliceblue' : '#5799db' }" class="button2"  >Graphics</button>
                <!--<button class="button2" >
                    <a v-bind:href="url" target="_blank" style="color: black; text-decoration: none;">Repositorio Antiguo</a>
                </button>
                <button class="button2">
                    <a v-bind:href="url2" target="_blank" style="color: black; text-decoration: none;">Vue Antiguo</a>
                </button> -->
                <button class="button2">
                    <a v-bind:href="url3" target="_blank" style="color: black; text-decoration: none;">⬇️ Bachelor's Thesis</a>
                </button>
                <button class="button2" @click="openPDF">⬇️ Download Curriculum Vitae</button>
                <!--<button class="button2" v-on:click="codi_clicado3 = ! codi_clicado3; $emit('toggle-background'); "  v-bind:style="{ backgroundColor:codi_clicado3 ? 'aliceblue' : '#5799db' }"  >Background color</button>-->
            </p>
        
        
        </div>
        

    
</template>


<script>
export default {
    emits: ['toggle-background','toggle-codis','toggle-experience','toggle-grafics'],
    data() {
        return {
            nombre: 'Web Page Arnau Solà',
            codigo: false,
            url: 'https://arnau2112.github.io/Repositorio_Sullivan/',
            url1: 'https://github.com/arnau2112',
            url2: 'https://arnau2112.github.io/Repositorio_Sullivan/vue.html',
            url3: 'https://www.linkedin.com/feed/update/urn:li:activity:7387518088872800256/',
            click: false,
            sidebar: ['Codis','Repositori Antic'],
            codi_clicado0: false,
            codi_clicado1: false,
            codi_clicado2: false,
            codi_clicado3: false,
        };
    },
    methods: {
        openPDF() {
            window.open('VUE_CV.pdf', '_blank');
        }
    }
};
</script>

<style scoped>

.titulo {
    
    gap: 10px;
    background-image: url('/fondo.jpg');
    background-repeat: no-repeat;   
    background-size: cover;         
    background-position: center;   
    align-content: center;          /* 🔑 clave */
    height: 100%;
    width: 100%;
    margin-bottom: 20px; 
    
    
}

.quote {
    max-width: 1000px;
    margin-bottom: 120px;
    font-size: 40px;
    color:chartreuse;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: bolder;
    font-style: italic;
    background-color:#102736de;
    padding: 30px;
    border-radius: 20px;
    margin-left: auto;

}



.hero-left {
    align-content: center;          /* 🔑 clave */
    align-items: center;
    gap: 30px;              /* separación entre h1 y h2 */
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-left: 60px;
    background-color:#102736de;
    max-width: 800px;
    padding: 30px;
    border-radius: 15px;
    
}

.hero-left h1 {
    font-size: 60px;
    margin: 0;
    color:whitesmoke;
}

.hero-left h2 {
    font-size: 30px;
    margin: 0;
    white-space: nowrap;    /* evita salto de línea */
    color:whitesmoke;
}

/* CONTENEDOR DERECHO */
.hero-right {
    text-align: justify;
    align-content: center;          /* 🔑 clave */  
    max-width: 1000px;
    font-size: 25px;
    line-height: 1.5;
    color:rgb(238, 241, 5);
    margin-left: 40px;
}

.engineer {
    font-size: 20px;
    font-weight: bolder;
    margin-left: 40px;
    margin-top: 20px;
    color:whitesmoke;
    color:chartreuse
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
    margin-right: 10px;
}

.button2 {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color:black;
    background-color: #5799db;
    margin-bottom: 5px;
}

@media (max-width: 768px) {

    .titulo {
        padding: 20px;
        height: auto;
    }

    .quote {
        margin: 0;
        margin-bottom: 20px;
        font-size: 20px;
        padding: 15px;
        text-align: center;
    }

    .hero-left {
        margin: 0;
        padding: 20px;
        width: 100%;
    }

    .hero-left h1 {
        font-size: 32px;
        text-align: center;
    }

    .hero-left h2 {
        font-size: 18px;
        text-align: center;
        white-space: normal; /* permite salto de línea */
    }

    .engineer {
        font-size: 16px;
        text-align: center;
        margin-left: 0;
    }
}


</style>