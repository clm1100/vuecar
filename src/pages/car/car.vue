
<template>
  <div>
      
     <div class="car-header">
        <div class="w">
            <div class="car-logo">
                <img src="img/logo.png" alt=""> <b>购物车</b>
            </div>
        </div>
    </div>
    <div class="c-container">
        <h1>数量{{list.length}} {{list}}</h1>
        <div class="w">
            <div class="cart-filter-bar">
                <em>全部商品</em>
            </div>
            <!-- 购物车主要核心区域 -->
            <div class="cart-warp">
                <Carheader/>
                <!-- 商品详细模块 -->
                <Carbody :list="list"/>

                <Carfooter/>
            </div>
        </div>          

    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import '@/source/css/car.css'
import Carheader from './components/carheader'
import Carfooter from './components/carfooter'
import Carbody from './components/carbody'
export default {
    
    components:{
        Carheader,
        Carbody,
        Carfooter
    },
    computed:{
        ...mapState({
            list:state=>state.car.carlist
        })
    },
    created(){
        
        this.getcarlist();
    },
    mounted(){
    },
    methods:{
        ...mapActions([
            'getcarlist'
        ])
    }
}
</script>

<style>

</style>