<template>
  <div id="app">
    <Nav />
      <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/nav.vue";
import Footer from "@/components/footer.vue";
export default {
  name:'app',
  components:{
      Nav,
      Footer
  }
}
</script>

<style lang="less">

</style>
