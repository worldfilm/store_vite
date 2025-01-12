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
        <ul id="list_nav" class="clearfix">
            <li id="sales_volume">
                <div class="list_navtxt">商家推荐</div>
                <div class="list_r">
                    <div class="sales_rise"></div>
                    <div class="sales_down"></div>
                </div>
            </li>
            <li id="list_price">
                <div class="list_navtxt">价格</div>
                <div class="list_r">
                    <div class="sales_rise"></div>
                    <div class="sales_down"></div>
                </div>
            </li>
            <li id="list_classify">
                <div class="list_navtxt">分类</div>
                <div class="list_r">
                    <div class="classify_drop"></div>
                </div>
            </li>
        </ul>
        <div id="section2">
            <div id="main_category">
                <ul id="product_list" class="clearfix">
                    <li>
                        <div class="product_box">
                            <router-link to=""><img src="../assets/images/product1.png"></router-link>
                            <h2><router-link to="">雪顶巧克力慕斯冰</router-link></h2>
                            <div class="clearfix">
                                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                                <div class="product_car fr"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product_box">
                            <a><img src="../assets/images/product2.png"></a>
                            <h2><a>雪顶巧克力慕斯冰</a></h2>
                            <div class="clearfix">
                                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                                <div class="product_car fr"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product_box">
                            <a><img src="../assets/images/product3.png"></a>
                            <h2><a href="#">雪顶巧克力慕斯冰</a></h2>
                            <div class="clearfix">
                                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                                <div class="product_car fr"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product_box">
                            <a><img src="../assets/images/product4.png"></a>
                            <h2><a href="#">雪顶巧克力慕斯冰</a></h2>
                            <div class="clearfix">
                                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                                <div class="product_car fr"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product_box">
                            <a><img src="../assets/images/product1.png"></a>
                            <h2><a>雪顶巧克力慕斯冰</a></h2>
                            <div class="clearfix">
                                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                                <div class="product_car fr"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="product_box">
                            <a><img src="../assets/images/product2.png"></a>
                            <h2><a>雪顶巧克力慕斯冰</a></h2>
                            <div class="clearfix">
                                <div class="product_price fl">￥<span class="product_mpney">9.00</span></div>
                                <div class="product_car fr"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="pull_more" class="dsn">上拉加载更多商品</div>
    </div>
    <div id="pop_car">
        <div class="car_trolley dsn"></div>
        <a></a>
    </div>
    <div class="pop_wrapper dsn" id="hasAdd">
        <div class="pop_con">
            <h2>已成功加入购物车!</h2>
        </div>
    </div>
    <div id="pop_classify" class="dsn">
        <ul>
            <li>
                <div class="text">超值套餐专区</div>
                <div class="icon_yes"></div>
            </li>
            <li class="select">
                <div class="text">销量top推荐</div>
                <div class="icon_yes"></div>
            </li>
            <li>
                <div class="text">生活情趣</div>
                <div class="icon_yes"></div>
            </li>
            <li>
                <div class="text">当季清仓</div>
                <div class="icon_yes"></div>
            </li>
        </ul>
    </div> 
</template>