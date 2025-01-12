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
<ul id="order_nav">
		<li id="wait_pay" class="select">
			<p>待支付</p>
			<div class="yel_line"></div>
		</li>
		<li id="has_pay">
			<p>已完成</p>
			<div class="yel_line"></div>
		</li>
	</ul>
	<div id="main" style="margin-top: 1.8rem;">
		<ul id="no_pay_con" class="pay_content">
			<li>
				<div class="container order_mt">
					<div class="container_left">订单号<span class="order_num">15632545789</span></div>
					<div class="container_right">
						<div class="order_status">未支付</div>
					</div>
				</div>
				<ul class="nopay_orderlist">
					<li>
						<div class="shopping_img">
							<router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
					<li>
						<div class="shopping_img">
							<router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
					<li>
						<div class="shopping_img">
	                        <router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
				</ul>
				<div class="container">
					<div class="container_left">
						<div class="order_time">下单时间：<span>2015-9-22 15:00:20</span></div>
						<div class="container_left_bootom">
							<div>合计：<span class="goods_sum">￥<span>109</span></span></div>
						</div>
					</div>
					<div class="container_right">
						<div id="goto_pay"><router-link to="payindex">去支付</router-link></div>
					</div>
				</div>
			</li>
			<li>
				<div class="container order_mt">
					<div class="container_left">订单号<span class="order_num">15632545789</span></div>
					<div class="container_right">
						<div class="order_status">未支付</div>
					</div>
				</div>
				<ul class="nopay_orderlist">
					<li>
						<div class="shopping_img">
							<router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
					<li>
						<div class="shopping_img">
							<router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
					<li>
						<div class="shopping_img">
							<router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
				</ul>
				<div class="container">
					<div class="container_left">
						<div class="order_time">下单时间：<span>2015-9-22 15:00:20</span></div>
						<div class="container_left_bootom">
							<div>合计：<span class="goods_sum">￥<span>109</span></span></div>
						</div>
					</div>
					<div class="container_right">
						<div id="goto_pay"><router-link to="payindex">去支付</router-link></div>
					</div>
				</div>
			</li>
		</ul>
		<ul id="has_pay_con" class="pay_content dsn">
			<li>
				<div class="container order_mt">
					<div class="container_left">订单号<span class="order_num">15632545789</span></div>
					<div class="container_right">
						<div class="order_status">已支付</div>
					</div>
				</div>
				<ul class="haspay_orderlist">
					<li>
						<div class="shopping_img">
	                        <router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕超美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
					<li>
						<div class="shopping_img">
	                        <router-link to="productdetails"><img src="../assets/images/sure_img1.png"></router-link>
	                    </div>
	                    <div class="shopping_box">
	                        <h2>果仁巧克力酱霜糖蛋糕超美味果酱夹心</h2>
	                        <div class="shopping_box_bottom">
	                            <div class="unit_price">￥<span>32.00</span></div>
	                            <div class="number">x<span>2</span></div>
	                        </div>
	                    </div>
					</li>
				</ul>
				<div class="container">
					<div class="container_left">
						<div class="order_time">下单时间：<span>2015-9-22 15:00:20</span></div>
						<div class="container_left_bootom">
							<div>合计：<span class="goods_sum">￥<span>109</span></span></div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>	