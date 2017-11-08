<template>
    <div id="dashboard">
      <Slider v-model="value8" show-input></Slider>
      <button>fetch</button>
     
    </div>
</template>
<style>
    #dashboard{padding:30px;}
</style>


<script>
    import { mapMutations } from 'vuex'
    export default {
        data () {
            return {
                value8: 25,
                articles:[]
            }
        },
        

    }
</script>
