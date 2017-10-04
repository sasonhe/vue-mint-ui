<template>
<div>
    <v-header></v-header>
    <swipe></swipe>
</div>
</template>
<script>
import header from './components/header.vue'
import swipe from './components/swipe.vue'
export default{
    components:{
        'v-header':header,
        swipe
    }
}
</script>
<style scoped>

</style>
