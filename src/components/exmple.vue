<template>
 <div class="">
     <h1>mint-ui-example</h1>
     <mt-button
       type="primary"
       @click="sheetVisible = true">
       选择操作
     </mt-button>
     <mt-actionsheet
       cancel-text=""
       :actions="actions"
       :visible.sync="sheetVisible">
     </mt-actionsheet>
 </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'app',

    data() {
      return {
        sheetVisible: false,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      };
    },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    }
  };
</script>
<style scoped>

</style>
