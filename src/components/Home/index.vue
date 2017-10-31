<template>
    <div id="dashboard">
    <Slider v-model="value8" show-input></Slider>
    </div>
</template>
<style>
    #dashboard{padding:30px;}
</style>
<script>
    export default {
        data () {
            return {
                value8: 25
            }
        }
    }
</script>
