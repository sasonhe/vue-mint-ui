<template>
<div class="page-tabbar">
    <div class="page-wrap">
        <div class="page-title">Tabbar</div>
        <div>
            <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>

        <!-- tabcontainer -->
        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="外卖">
                <mt-cell :title="餐厅" />
            </mt-tab-container-item>
            <mt-tab-container-item id="订单">
                <mt-cell :title="订单" />
            </mt-tab-container-item>
            <mt-tab-container-item id="发现">
                <mt-cell :title="发现" />
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                123
                <router-link to="/">
                    <!-- button -->
                    <mt-button type="danger" size="large">退出</mt-button>
                </router-link>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="外卖">
            <img slot="icon" src="../assets/images/vue.png"> 外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
            <img slot="icon" src="../assets/images/vue.png"> 订单
        </mt-tab-item>
        <mt-tab-item id="发现">
            <img slot="icon" src="../assets/images/vue.png"> 发现
        </mt-tab-item>
        <mt-tab-item id="我的">
            <img slot="icon" src="../assets/images/vue.png"> 我的
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>

<script>
export default {
    name: 'page-tabbar',
    data() {
        return {
            selected: '外卖'
        };
    }
};
</script>

<style>
.page-tabbar {
    overflow: hidden;
    height: 100vh;
}

.page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
}
</style>
