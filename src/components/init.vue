<template>
    <div class="container">
        <p>{{$store.state.count}}</p>
        Hello World
        <h1>{{a}}</h1>
    </div>
</template>
<script>
export default {
    data:{
        a:1
    }
}
</script>
<style lang="scss">
    @import "@/assets/scss/reset.scss";
    .container{
        text-align: center;
        font-size: r(16px);
        width: r(200px);
        height: r(100px);
        margin: 0 auto;
    }
</style>

