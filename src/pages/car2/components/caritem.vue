<template>
    <div :class="checked?'cart-item check-cart-item':'cart-item'">
      <div class="p-checkbox">
        <input 
        type="checkbox" 
        :checked="checked"
        @change="select($event,id)"
         class="j-checkbox" />
      </div>
      <div class="p-goods">
        <div class="p-img">
          <img :src="img" alt />
        </div>
        <div class="p-msg">{{name}}</div>
      </div>
      <div class="p-price">￥{{price}}</div>
      <div class="p-num">
        <div class="quantity-form">
          <a href="javascript:;" class="decrement"  @click="addcount('-',id)">-</a>
          <input type="text" 
          ref="ipt"
          class="itxt" 
          v-bind:value="count" 

          />
          <a href="javascript:;" class="increment" @click="addcount('+',id)">+</a>
           <a href="javascript:;" class="increment" @click="addcount1('+',id)">测</a>
        </div>
      </div>
      <div class="p-sum">￥{{(price*100*count/100).toFixed(2)}}</div>
      <div class="p-action">
        <a href="javascript:;">删除</a>
      </div>
    </div>
</template>

<script>
export default {
    name:'caritem',
    props:{
        id:String,
        name:String,
        img:String,
        price:String,
        checked:Boolean,
        count:Number
    },
    created(){

    },
    data(){
      return {
        newcount:this.count,
      }
    },
    methods:{
      addcount1(flag,id){
        let num =this.$refs.ipt.value
        console.log(flag,id,num)

        if(flag==="+"){
          num++;
        }else{
          num--;
          if(num<1){
            num = 1;
            return alert("不能在减少了")
          }
        }
        console.log("3333")
        this.$store.dispatch("backupdate",{id,count:num})
      },
      addcount(flag,id){
        if(flag==="+"){
          this.newcount++;
        }else{
          this.newcount--;
          if(this.newcount<1){
            this.newcount = 1;
            return alert("不能在减少了")
          }
        }
        this.$store.dispatch("backupdate",{id,count:this.newcount})
      },
      select(event,id){
        let checked = event.target.checked;
        this.$store.dispatch("frontedupdate",{id,checked})
      }
    }
}
</script>

<style>

</style>