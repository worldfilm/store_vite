<template>
    
<div class="pay_banner">
    <div class="pay_bannertxt"></div>
</div>
<div id="main">
    <div id="order_inf">
        <div id="order_inf_header">
            <div id="home"><a>好邻居便利店</a></div>
        </div>
        <div class="container">
            <div class="container_left">订单号</div>
            <div class="container_right" id="id_order">15632545789</div>
        </div>
        <div class="container">
            <div class="container_left">订单金额</div>
            <div class="container_right">￥<span id="order_price">109.00</span></div>
        </div>
        <div class="container">
            <div class="container_left">优惠券折扣</div>
            <div class="container_right">￥<span id="order_coupons">00.00</span></div>
        </div>
        <div class="container fontcolor">
            <div class="container_left">还需支付</div>
            <div class="container_right">￥<span id="order_needpay">00.00</span></div>
        </div>
        <div class="bottom_line"></div>
    </div>
    <div class="btn_box" id="order_pay_btn">
        <a>微信安全支付</a>
    </div>
</div>
</template>