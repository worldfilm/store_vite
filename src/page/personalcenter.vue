<script>
import Header from '../components/Header.vue';
export default {
  components: {
    Header
  }
};
</script>
<template>
     <Header/> 
    <div id="main">
        <div class="banner clearfix">
            <div id="personal_img" class="fl"><img src="../assets/images/menber_img.png"></div>
            <div class="banner_txt fl">
                <div id="menber_name">小小友邻多</div>
                <div id="menber_tel">14712125129</div>
            </div>
        </div>
        <div class="container" id="to_my_oder">
            <div class="container_left">我的订单</div>
            <div class="container_right">查看所有订单</div>
            <div id="good_coupons_arrow"><router-link to="/myorderlist"></router-link></div>
        </div>
        <div class="container" id="to_my_coupons">
            <div class="container_left">我的优惠券</div>
            <div id="good_coupons_arrow"><router-link to="/mycouponlist"></router-link></div>
        </div>
    </div>
    <div id="floatbar_bottom">
        <div id="floatbar_bottom_l">注册成为会员，尊享更多优惠！</div>
        <div id="goto_regist"><router-link to="/register">立即注册</router-link></div>
    </div>
</template>