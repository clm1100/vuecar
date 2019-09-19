<template>
  <div class="cart-item-list">
    <caritem 
    v-for="item in list" 
    v-bind="{...item}" 
    :key="item.id"/>
  </div>
</template>

<script>
import caritem from './caritem'
export default {
  props: {
    list: Array
  },
  components: {
    caritem
  },
  created() {
    console.log(this.list);
  }
};
</script>
