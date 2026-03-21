<template>
    <form>
    <p>Contact Form</p>
    <p>Gmail: <input type="email" v-model="email" placeholder="ejemplo@dominio.com"></p>
    <p>Description: <input type="text"  size="45"></p>
    <button type="submit">Send!</button>
    </form>
</template>

<script>
</script>



<style>

form {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    justify-content: center;
}
</style>