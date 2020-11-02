<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <h2>rmm</h2>
        <h2>npm install vue-loader vue-template-compiler --save-dev</h2>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                message: "Hello webpack"
            }
        }
    }
</script>

<style scoped>
    .title {
        color: red;
    }
</style>