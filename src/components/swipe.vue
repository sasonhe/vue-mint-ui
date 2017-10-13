<template>
    <mt-swipe :auto="4000" class="wrap">
      <mt-swipe-item class="ban1"><img src="http://c.hiphotos.baidu.com/image/pic/item/f2deb48f8c5494ee321ef3d824f5e0fe99257e37.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="ban2"><img src="http://c.hiphotos.baidu.com/image/pic/item/024f78f0f736afc333faafa5ba19ebc4b645127f.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="ban3"><img src="http://e.hiphotos.baidu.com/image/pic/item/b999a9014c086e065195c08a0b087bf40ad1cb36.jpg" alt=""></mt-swipe-item>
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
    background: #555;
}
.ban2{
    background: #999;
}
.ban3{
    background: #ccc;
}
img{
    background-size: 100% 100%;
}
</style>
