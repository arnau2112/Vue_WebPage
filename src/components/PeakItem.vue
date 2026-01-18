<template>
   <div>
    <h3>{{ peakName }}</h3>
    <a :href="peakUrl2" target="_blank">
      <img style="width: 140px;" :src="peakUrl" />
    </a>
  </div>
</template>

<script>
export default {
  props : ['peakName', 'peakUrl', 'peakUrl2']
};
</script>

<style scoped>

div {
    border: 1px solid black;

    text-align: center;
    margin: 20px;
    padding: 10px;
    border-radius: 12px;
    border-color: grey;
    background-color: antiquewhite;
    max-width: 170px;
}

div:hover {
    transform: scale(1.2);
    box-shadow: 5px 5px 15px grey;
}
</style>