<template>
    <div class="main">
        <info-header></info-header>
        <info-map></info-map>
        <info-room></info-room>
    </div>
</template>

<script>
    import InfoHeader from './components/Header';
    import InfoMap from './components/Map';
    import InfoRoom from './components/Room';

    export default {
        name: "Info",
        data(){
          return {
              active: 0,
          }
        },
        components: {
            InfoHeader,
            InfoMap,
            InfoRoom
        }
    }
</script>

<style scoped>
    .main{
        background: #cacaca;
    }
</style>