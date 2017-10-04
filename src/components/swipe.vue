<template>
    <mt-swipe :auto="4000" class="wrap">
      <mt-swipe-item class="ban1">1</mt-swipe-item>
      <mt-swipe-item class="ban2">2</mt-swipe-item>
      <mt-swipe-item class="ban3">3</mt-swipe-item>
    </mt-swipe>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>
.wrap{
    height: 100px;
    text-align: center;
}
.ban1,.ban2,.ban3{
    width: 100%;
    height: 100px;
    line-height: 100px;
}
.ban1{
    background: yellow;
}
.ban2{
    background: red;
}
.ban3{
    background: #ccc;
}
</style>
