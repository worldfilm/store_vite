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
        <ul id="all_mycoupons_list">
            <li class="unuse">
            	<div class="coupons_list_top">
            		<div class="couponslist_left">
            			<div class="coupons_value">￥<span>20</span></div>
            			<div class="coupons_describ">
            				<div class="coupons_img"></div>
            				<div class="user_condition">满200元可用</div>
            			</div>
            		</div>
            	</div>
            	<div class="couponslist_bottom">
            		<div class="coupons_time">使用期限<span> 2015.08.01~2015.06.30</span></div>
                    <div class="coupons_status">未使用</div>
            	</div>
            </li>
            <li class="hasused">
                <div class="coupons_list_top">
                    <div class="couponslist_left">
                        <div class="coupons_value">￥<span>20</span></div>
                        <div class="coupons_describ">
                            <div class="coupons_img"></div>
                            <div class="user_condition">满200元可用</div>
                        </div>
                    </div>
                </div>
                <div class="couponslist_bottom">
                    <div class="coupons_time">使用期限<span> 2015.08.01~2015.06.30</span></div>
                    <div class="coupons_status">已过期</div>
                </div>
            </li>
            <li class="overdue">
                <div class="coupons_list_top">
                    <div class="couponslist_left">
                        <div class="coupons_value">￥<span>20</span></div>
                        <div class="coupons_describ">
                            <div class="coupons_img"></div>
                            <div class="user_condition">满200元可用</div>
                        </div>
                    </div>
                </div>
                <div class="couponslist_bottom">
                    <div class="coupons_time">使用期限<span> 2015.08.01~2015.06.30</span></div>
                    <div class="coupons_status">已使用</div>
                </div>
            </li>
        </ul>
    </div>
</template>