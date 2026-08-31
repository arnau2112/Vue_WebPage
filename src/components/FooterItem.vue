<template > 
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <p >  © Arnau Solà.</p>
          <!-- <button style="margin-left: -30px;" @click="irACorreo">Get in touch!</button> -->
        <p>{{currentDay}}/{{ currentMonth }}/{{ currentYear }}</p>
        <p>  Barcelona temperature: {{ weather }} º</p>
    </div>
</template>

<script>
const apiKey = 'c8a23bb955e3e01de0203827ea256922';
const city = 'Barcelona';

async function forecast(apiKey, city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

const d = new Date();

export default {
  data() {
    return {
      currentYear: d.getFullYear(),
      currentMonth: d.getMonth() + 1,
      currentDay: d.getDate(),
      weather: null,
    };
  },
  mounted() {
    forecast(apiKey, city).then((data) => {
      this.weather = data;
      this.weather = data.main.temp
    });
  },
  methods: {
    irACorreo() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>

    div {
        text-align: center; 
        padding: 20px; 
        background-color: antiquewhite; 
        margin-top: 20px;
        align-content: end;
    }

    button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #195b81;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
}

</style>