<template>
      <Header/> 
   <div id="regWrap" class="wrap">
    <h3 class="title">注册好邻居</h3>
    <div class="tr"><span class="text">用户名</span><input v-model="username" id="phone" value="" placeholder="可用于登录和找回密码"></div>
    <div class="tr"><span class="text">密码</span><input v-model="password" id="password" value="123456" placeholder="密码"></div>
    <div class="tr"><span class="text">确认密码</span><input v-model="confirmPassword" id="password" value="123456" placeholder="密码"></div>
    <div class="tr"><span class="text">验证码</span><input v-model="verifyCode" id="verifyCode" value="8888" class="code" placeholder="验证码">
        <input class="codebtn" value="获取邮箱验证码" @click="getVerifyCode">
    </div>
<div class="tr">
    <input class="checkbox" type="checkbox" checked><span>阅读并<a href="#">&lt&lt接受用户协议&gt&gt</a></span>
</div>
<div id="submit"><button class="submit" @click="handleRegister">立即注册</button></div>
<div class="login"><router-link class="fr" to="/login">立即登录</router-link></div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
  components: {
    Header, 
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const verifyCode = ref('');
    const router = useRouter();
    const getVerifyCode=async()=>{
      try {
          const response = await axios.get('http://192.168.1.2:3000/verifycode');
          verifyCode.value = response.data;
          console.log('verifyCode success')
        } catch (error) {
          console.log('verifyCode error')
        }
    };
    const handleRegister=async()=>{
      try {
          const response = await axios.post('http://192.168.1.2:3000/register',{
            username: username.value, 
            password: password.value 
          });
          console.log('register success')
          router.push('/personalcenter');
        } catch (error) {
          console.log('register error')
        }
    };
      return {
        username,
        password,
        confirmPassword,
        verifyCode,
        handleRegister,
        getVerifyCode,
      };
    },
};
</script>