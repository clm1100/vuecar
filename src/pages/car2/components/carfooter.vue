<template>
  <!-- 结算模块 -->
  <div class="cart-floatbar">
    <div class="select-all">
      <input 
      :checked="isall"
      @change="selectall"
      type="checkbox" 
      class="checkall" />全选
    </div>
    <div class="operation">
      <a href="javascript:;" class="remove-batch">删除选中的商品</a>
      <a href="javascript:;" class="clear-all">清理购物车</a>
    </div>
    <div class="toolbar-right">
      <div class="amount-sum">
        已经选
        <em>{{allcount}}</em>件商品
      </div>
      <div class="price-sum">
        总价：
        <em>￥{{allprice}}</em>
      </div>
      <div class="btn-area">去结算</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "carfooter",
  methods: {
    selectall(e) {
      let checked = e.target.checked;
      this.$store.dispatch("selectall", checked);
    }
  },
  computed: {
    ...mapGetters(["isall","allprice","allcount"])
  }
};
</script>

<style>
</style>