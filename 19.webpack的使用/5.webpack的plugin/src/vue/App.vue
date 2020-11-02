<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <h2>rmm</h2>
        <h2>npm install html-webpack-plugin --save-dev  </h2>
        <h2>npm install uglifyjs-webpack-plugin@1.1.1 --save-dev 压缩js</h2>
        <h2>npm install webpack-dev-server@2.9.3 --save-dev 本地服务器</h2>
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