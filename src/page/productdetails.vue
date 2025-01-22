
<template>
     <Header/> 
    <div id="main">
        <div id="section1">
           <div id="slideBox" class="slideBox">
                <div class="bd">
                  <ul>
                    <li>
                        <img :src="'http://192.168.1.7:3000/'+imgSrc+'.png'"/>
                        
                    </li>
                  </ul>
                </div>
                <div class="hd">
                  <ul></ul>
                </div>
            </div>
            <div class="shopping_box">
                <h2>{{imgName}}</h2>
                <div class="shopping_box_bottom">
                    <div class="unit_price"><span> $ {{imgPrice}}</span></div>
                    <div class="number">剩余数量：<span>{{imgCount}}</span></div>
                </div>
            </div>
        </div>
        <div id="section2">
            <div class="pro_content clearfix">
                <div class="purchase_numtxt fl">购买数量</div>
                <div class="purchase_num_box fr">
                    <div class="minus_icon js_minus" @click="minus"></div>
                    <div id="prd-num" class="number_edit js_num">{{num}}</div>
                    <div class="add_icon js_add" @click="add"></div>
                </div>
            </div>
        </div>
        <div id="section3">
            <div id="graphic_details">
                <h2>图文详情</h2>
                <div id="graphic_content">
                    自己编辑的内容
                </div>
            </div>
        </div>
    </div>
    <div id="floatbar_bottom">
        <div id="floatbar_bottom_cart" @click="goShoppingCar">
            <a></a>
            <div class="car_trolley dsn">{{orderNum}}</div>
        </div>
        <div id="join_car" @click="addShoppingCar">加入购物车</div>
        <div id="buy_now" @click="orderNow"><a>立即购买</a></div>
    </div>
    <!--+-数量弹框-->
    <div class="pop_wrapper dsn" id="add_minus_Pop">
        <div class="pop_con">
            <h2>请输入数量</h2>
            <div class="number_box">
                <div class="number_minus js_minus"></div>
                <input type="number" id="number_input" class="po_num">
                <div class="number_add js_add"></div>
            </div>
            <div class="pop_btn" id="number_Btn">
                <div class="pop_remove_btn">取消</div>
                <div class="pop_sure_btn">确定</div>
            </div>
        </div>
    </div>
    <div class="pop_wrapper dsn" id="hasAdd">
        <div class="pop_con">
            <h2>已成功加入购物车!</h2>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';
import { ref,inject } from 'vue';
export default {
  components: {
    Header
  },
  setup(){
    const imgSrc=ref('')
    const imgName=ref('')
    const imgPrice=ref('')
    const imgCount=ref(0)
    const num=ref(1)
    const router = useRouter(); 
    const orderNum=ref('')
    const store = inject('$store');
    const isAuthenticated=store.state.user.user.token
        imgName.value=router.currentRoute.value.query.name
        imgPrice.value=router.currentRoute.value.query.price
        imgSrc.value=router.currentRoute.value.query.src
        imgCount.value=router.currentRoute.value.query.count
        const addShoppingCar=()=>{
            console.log('addShoppingCar')
            if(isAuthenticated){
                store.commit('set_cartList', {count:imgCount,name: imgName,price:imgPrice,src:imgSrc})
            }else{
                router.push("/login")
            }
            
        }
        const orderNow=()=>{
            console.log('orderNow')
            router.push("/myorderlist")
        }
        const goShoppingCar=()=>{
            router.push('/shoppingcar')
        }
        const add=()=>{
            if(router.currentRoute.value.query.count>0){
                num.value++
                imgCount.value=router.currentRoute.value.query.count--
                imgPrice.value=num.value*router.currentRoute.value.query.price
                console.log(router.currentRoute.value.query.count)
                return num
            }
        }
        const minus=()=>{
            num.value--
            if(num.value--<1){
                return num.value=1
            }else{
                return num
            }
            
        }
        return {
            imgName,imgPrice,imgSrc,addShoppingCar,
            orderNow,add,minus,num,imgCount,orderNum,goShoppingCar
        }
  }
};
</script>