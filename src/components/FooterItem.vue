<template > 
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <p >  © Arnau Solà. All rights reserved.</p>
        <p>{{currentDay}}/{{ currentMonth }}/{{ currentYear }}</p>
    </div>
</template>

<script>

    const d = new Date();

	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let day = d.getDate();
	let hours = d.getHours();

export default {
    data() {
        return {
            currentYear: year,
            currentMonth: month,
            currentDay: day,
        };
    }
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

</style>