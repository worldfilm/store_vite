
<template>
    <div>
      <Header/>  
    <div id="main">
    <div id="section1">
      <div id="slideBox" class="slideBox">
        <div class="bd">
          <ul>
            <swiper
              :spaceBetween="30"
              :centeredSlides="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :pagination="{
                clickable: true,
              }"
              :navigation="true"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide>
                <li>
                  <router-link to="#"><img src="../assets/images/img1.png" /></router-link>
                </li>
              </swiper-slide>
              <swiper-slide>
                <li>
                  <router-link to="#"><img src="../assets/images/img2.jpg" /></router-link>
                </li>
              </swiper-slide>
              <swiper-slide>
                <li>
                  <router-link to="#"><img src="../assets/images/img3.jpg" /></router-link>
                </li>
              </swiper-slide>
              <swiper-slide>
                <li>
                  <router-link to="#"><img src="../assets/images/img4.jpg" /></router-link>
                </li>
              </swiper-slide>
              <swiper-slide>
                <li>
                  <router-link to="#"><img src="../assets/images/img5.jpg" /></router-link>
                </li>
              </swiper-slide>
            </swiper>
          </ul>
        </div>
        <div class="hd">
          <ul></ul>
        </div>
      </div>
      <ul id="main_nav">
        <li id="product_all"><router-link to="/goodslist">全部商品</router-link></li>
        <li id="quick_order"><router-link to="#">快速下单</router-link></li>
        <li id="coupons"><router-link to="/mycouponlist">优惠券</router-link></li>
        <li id="my_order"><router-link to="/myorderlist">我的订单</router-link></li>
      </ul>
      <div id="main_privilege">
        <ul id="coupons_wrap" class="clearfix">
          <li>
            <div class="coupons_content">
              <div class="coupons_l">
                <div class="coupons_price">￥<span class="coupons_value">20</span></div>
                <div class="coupons_title">优惠券</div>
              </div>
              <div class="tap_pay">
                <router-link to="/getcoupons">点击领取</router-link>
              </div>
              <div class="circle_l"></div>
              <div class="circle_r"></div>
            </div>
          </li>
          <li>
            <div class="coupons_content">
              <div class="coupons_l">
                <div class="coupons_price">￥<span class="coupons_value">20</span></div>
                <div class="coupons_title">优惠券</div>
              </div>
              <div class="tap_pay">
                <router-link to="/getcoupons">点击领取</router-link>
              </div>
              <div class="circle_l"></div>
              <div class="circle_r"></div>
            </div>
          </li>
        </ul>
        <div id="recommend">
          <img src="../assets/images/recommend.png">
          <div class="recom_wrap">
            <div class="recom_inf">
              <div class="recom_tilte">
                <div class="recom_txt">现价</div>
              </div>
              <div class="recom_price">
                <p>￥32.00</p>
                <s>原价：42.00</s>
              </div>
            </div>
          </div>
          <router-link to="#"></router-link>
        </div>
      </div>
    </div>
    <div id="section2">
      <div id="main_category">
        <div id="category_title">
          <div id="category_titletxt">分类1</div>
          <div id="arrow_more"></div>
        </div>
        <ul id="product_list" class="clearfix">
          <li>
            <div class="product_box">
              <router-link to="/productdetails"><img src="../assets/images/product1.png"></router-link>
              <h2><router-link to="/productdetails">雪顶巧克力慕斯冰</router-link></h2>
              <div class="clearfix">
                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                <div class="product_car fr"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="product_box">
              <router-link to="/productdetails"><img src="../assets/images/product2.png"></router-link>
              <h2><router-link to="/productdetails">雪顶巧克力慕斯冰</router-link></h2>
              <div class="clearfix">
                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                <div class="product_car fr"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="product_box">
              <router-link to="/productdetails"><img src="../assets/images/product3.png"></router-link>
              <h2><router-link to="/productdetails">雪顶巧克力慕斯冰</router-link></h2>
              <div class="clearfix">
                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                <div class="product_car fr"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="product_box">
              <router-link to="/productdetails"><img src="../assets/images/product4.png"></router-link>
              <h2><router-link to="/productdetails">雪顶巧克力慕斯冰</router-link></h2>
              <div class="clearfix">
                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                <div class="product_car fr"></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="btn_more">
        <router-link to="/goodslist"> 查看更多商品</router-link>
      </div>
    </div>
  </div>
  <div id="pop_car">
    <div class="car_trolley dsn"></div>
    <router-link to="/shoppingcar"></router-link>
  </div>
  <div class="pop_wrapper dsn" id="hasAdd">
    <div class="pop_con">
      <h2>已成功加入购物车!</h2>
    </div>
    </div>
</div>
     
</template>

<script>
import Header from '../components/Header.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default {
  components: {
    Header, Swiper,
    SwiperSlide,
  },
  setup() {
      // const onSwiper = (swiper) => {
      //   console.log(swiper);
      // };
      // const onSlideChange = () => {
      //   console.log('slide change');
      // };
      return {
        // onSwiper,
        // onSlideChange,
        modules: [Autoplay],
      };
    },
};
</script>