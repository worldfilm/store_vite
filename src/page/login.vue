<template>
    <Header/> 
    <div id="wrap" class="wrap">
        <h3 class="title">登录好邻居</h3>
        <div class="login-box">
            <p class="msg">短信登录</p>
            <p class="inp-box"><input id="user-name" class="inp" placeholder="请输入用户名"></p>
            <p class="inp-box"><input id="password" class="inp" type="password" placeholder="请输入密码"></p>
            <p class="checkbox-box"><input id="checkbox" type="checkbox" class="checkbox">记住用户名和密码</p>
            <p><input id="submit" class="submit" value="登录"></p>
            <div class="login"><router-link class="fr" to="/register" style="padding-top: 10px;color:#FFA507;">立即注册</router-link></div>
            <progress value="30" max="100"></progress>  
            <form action="">
              <input type="range" value="50">
            </form>
        </div>
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