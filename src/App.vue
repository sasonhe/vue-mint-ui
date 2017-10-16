<template>
<div>
    <v-header></v-header>
    <swipe></swipe>
    <tabar></tabar>
</div>
</template>
<script>
import header from './components/header.vue'
import swipe from './components/swipe.vue'
import tabar from './components/tabar.vue'
export default {
    components: {
        'v-header': header,
        swipe,
        tabar
    }
}
</script>
<style scoped>

</style>
