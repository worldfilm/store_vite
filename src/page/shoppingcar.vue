<template>
    <div id="header">
    <div id="home"><router-link to="home">好邻居便利店</router-link></div>
    <div class="car_theme" id="car_edit">编辑</div>
    <div id="my"><router-link to="personalcenter"></router-link></div>
</div>
<div id="shoppingcar">
    <div id="main">
        <ul id="shopping_list">
            <li v-for="(item,index) in cartList" :key="item">
                <div name="checkAll" class="select no_select select_ok"></div>
                <div class="shopping_img">
                    <router-link to="productdetails"><img :src="'http://192.168.1.7:3000/'+item.src+'.png'"></router-link>
                </div>
                <div class="shopping_box">
                    <h2>{{item.name}}</h2>
                    <div class="shopping_box_bottom">
                        <div class="unit_price">￥<span>{{item.price}}</span></div>
                        <div class="number">x<span>{{item.count}}</span></div>
                    </div>
                </div>
                <div class="delete_btn" @click="deleteItem(item,index)"> <span ></span></div>
            </li>
        </ul>
    </div>
    <div id="floatbar_bottom">
        <div id="select_all" class="select">
            <div name="checkAll" class="select_all no_select select_ok"></div>
            <div class="select_all_txt">全选</div>
        </div>
        <div id="total_box"><!---->
            <div>￥<span id="pay_account">0.00</span></div>
            <div id="total_txt">合计</div>
        </div>
        <div id="account_btn"><a>去结算</a></div>
        <div id="delete_btn" class="dsn">删除</div>
    </div>
    <!--+-数量弹框-->
    <div class="pop_wrapper dsn" id="add_minus_Pop">
        <div class="pop_con">
            <h2>请输入数量</h2>

            <div class="number_box">
                <div class="number_minus js_minus"></div>
                <input type="number" id="number_input" value="0">

                <div class="number_add js_add"></div>
            </div>
            <div class="pop_btn" id="number_Btn">
                <div class="pop_remove_btn">取消</div>
                <div class="pop_sure_btn">确定</div>
            </div>
        </div>
    </div>
    <div class="pop_wrapper dsn" id="sure_Del">
        <div class="pop_con">
            <h2>确定删除这<span></span>件商品吗？</h2>

            <div class="pop_btn" id="sure_Del_btn">
                <div class="pop_remove_btn">考虑一下</div>
                <div class="pop_sure_btn">确定</div>
            </div>
        </div>
    </div>
    <div class="pop_wrapper dsn" id="none_Select">
        <div class="pop_con">
            <h2>您还没有选择商品哦！</h2>
        </div>
    </div>
</div>
<!--购物车为空-->
<div id="empty_cart" class="dsn">
    <div id="empty">购物车空空如也T.T</div>
    <div class="btn_box" id="goto_shop"><a href="index.html">去逛逛</a></div>
</div>
</template>
<script>
import { useRouter } from 'vue-router';
import { ref,inject } from 'vue';
import http from '../http/http'
export default {
  components: {
  },
  setup(){
    const store = inject('$store');
    const cartList=store.state.shopping.cartList
    
    const deleteItem=(item,index)=>{
        // console.log(item, index)
        store.commit('deleteItemFromCart', item);
        cartList.splice(index, 1);
        // 
        // for(let items in cartList){
        //     if(cartList[items].name==item.name){
        //         cartList.remove(cartList[items])
        //     }
        // }
    };
    return{
        cartList,deleteItem
    }
  }
}
</script>