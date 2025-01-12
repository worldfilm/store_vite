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
    <div id="section1">
        <ul id="good_list">
           <!-- <li>
                <div class="shopping_img"><a><img src="'+data[i].imgUrl+'"></a></div>
                <div class="shopping_box"><h2>'+data[i].shopName+'</h2>

                    <div class="shopping_box_bottom">
                        <div class="unit_price">￥<span>'+data[i].price+'</span></div>
                        <div class="number">x<span>'+data[i].prdNum+'</span></div>
                    </div>
                </div>
            </li>-->
        </ul>
        <div class="container" id="good_coupons">
            <div class="container_left">优惠券</div>
            <div class="container_right">不使用优惠券</div>
            <div id="good_coupons_arrow"></div>
        </div>
        <div id="good_distribution" class="container">
            <div class="good_distrib_left container_left">配送方式</div>
            <ul class="container_right">
                <li id="store_invite" class="select">到店自取</li>
                <li id="good_delivery" class="">送货上门</li>
            </ul>
        </div>
        <div id="write_address" class="container dsn">
            <div class="container_left">请输入送货地址</div>
            <div id="shipping_arrow"><a href="#"></a></div>
        </div>
        <div id="user_inf" class="container dsn"><!--链接微信输入地址，返回时获取值，#write_address隐藏-->
            <div class="container_left">配送至</div>
            <div class="container_right">
                <div class="user_inf_con">
                    <div id="user_inf_name">欧阳明月</div>
                    <div id="user_inf_tel">170****8899</div>
                </div>
                <div class="user_inf_con">
                    广东省深圳市龙华新区民治街道特区1980文化创业园3期1栋A106
                </div>
            </div>
            <div id="user_inf_arrow"><a></a></div>
        </div>
    </div>
    <div id="section3">
        <div class="ordinary_box">
            <div class="ordinary_box_l">订单金额</div>
            <div class="ordinary_box_r">￥<span id="pay_account">108.00</span></div>
        </div>
        <div class="ordinary_box">
            <div class="ordinary_box_l">优惠券折扣</div>
            <div class="ordinary_box_r">￥<span id="order_discount">0.00</span></div>
        </div>
    </div>
</div>
<div id="floatbar_bottom">
    <div id="floatbar_bottom_l">还需支付：<span>￥</span><span id="need_pay">108.00</span></div>
    <div id="submit_order"><a>提交订单</a></div>
</div>
<div id="coupons_Pop" class="pop_wrapper dsn">

</div>
</template>
