<template>
      <Header/> 
   <div id="regWrap" class="wrap">
    <h3 class="title">注册好邻居</h3>
    <div class="tr"><span class="text">用户名</span><input id="phone" value="" placeholder="可用于登录和找回密码"></div>
    <div class="tr"><span class="text">密码</span><input id="password" value="123456" placeholder="密码"></div>
    <div class="tr"><span class="text">确认密码</span><input id="password" value="123456" placeholder="密码"></div>
    <div class="tr"><span class="text">验证码</span><input id="verifyCode" value="8888" class="code" placeholder="验证码">
        <input class="codebtn" value="获取短信验证码">
    </div>
<div class="tr">
    <input class="checkbox" type="checkbox" checked><span>阅读并<a href="#">&lt&lt接受用户协议&gt&gt</a></span>
</div>
<div id="submit"><button class="submit">立即注册</button></div>
<div class="login"><router-link class="fr" to="/login">立即登录</router-link></div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  components: {
    Header, 
  },
  setup() {
      return {
      };
    },
};
</script>