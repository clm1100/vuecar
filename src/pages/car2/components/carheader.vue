<template>
  <!-- 头部全选模块 -->
    <div class="cart-thead">
        <div class="t-checkbox">
            <input
            :checked="isall"
            @change="selectall($event)"
            type="checkbox" 
            class="checkall"> 全选
        </div>
        <div class="t-goods">商品</div>
        <div class="t-price">单价</div>
        <div class="t-num">数量</div>
        <div class="t-sum">小计</div>
        <div class="t-action">操作</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:"carheader",
    methods:{
        selectall(e){
            let checked = e.target.checked;
            this.$store.dispatch("selectall",checked);
        }
    },
    computed:{
        ...mapGetters([
            'isall'
        ])
    }
}
</script>

<style>

</style>