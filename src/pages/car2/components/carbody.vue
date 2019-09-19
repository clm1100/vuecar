<template>
  <div class="cart-item-list">
    <caritem v-for="item in list" v-bind="{...item}" :key="item.id" />
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import caritem from "./caritem";
export default {
  components: {
    caritem
  },
  computed: {
    ...mapState({
      list: state => state.car.carlist
    })
  },
  created() {
    this.getcarlist();
  },
  mounted() {},
  methods: {
    ...mapActions(["getcarlist"])
  }
};
</script>
