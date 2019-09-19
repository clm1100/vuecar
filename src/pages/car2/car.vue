
<template>
  <div>
      <h1>{{$store.state.car.carlist}}</h1>
     <div class="car-header">
        <div class="w">
            <div class="car-logo">
                <img src="img/logo.png" alt=""> <b>购物车</b>
            </div>
        </div>
    </div>
    <div class="c-container">
        <div class="w">
            <div class="cart-filter-bar">
                <em>全部商品</em>
            </div>
            <!-- 购物车主要核心区域 -->
            <div class="cart-warp">
                <Carheader/>
                <!-- 商品详细模块 -->
                <Carbody />

                <Carfooter/>
            </div>
        </div>          
    </div>
  </div>
</template>

<script>
import '@/source/css/car.css'
import Carheader from './components/carheader'
import Carfooter from './components/carfooter'
import Carbody from './components/carbody'
export default {
    components:{
        Carheader,
        Carbody,
        Carfooter
    }
}
</script>

<style>

</style>