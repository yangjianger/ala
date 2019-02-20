<template>
    <div class="gear"></div>
</template>

<script>
    export default {
        name: "Gear"
    }
</script>

<style scoped lang="stylus">
    @import "~@/assets/style/varibles.styl"
    .gear {
        height: .6rem;
        position: relative;
    }

    .gear:after {
        content: " ";
        display: block;
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 36px;
        background: -webkit-linear-gradient(#fff 0%, transparent 0%),
                -webkit-linear-gradient(135deg, $bgGrayColor 33.33%, transparent 33.33%) 0 0%,
                transparent -webkit-linear-gradient(45deg, $bgGrayColor 33.33%, #fff 33.33%) 0 0%;
        background-repeat: repeat-x;
        background-size: 0px 100%, 15px 27px, 15px 27px;
    }

</style>