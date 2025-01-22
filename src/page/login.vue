<template>
    <Header/> 
    <div id="wrap" class="wrap">
        <h3 class="title">登录好邻居</h3>
        <div class="login-box">
            <p class="inp-box"><input id="user-name" class="inp" placeholder="请输入用户名" v-model ="username"></p>
            <p class="inp-box"><input id="password" class="inp" type="password" placeholder="请输入密码" v-model="password"></p>
            <p class="checkbox-box"><input id="checkbox" type="checkbox" checked="checked" class="checkbox">记住用户名和密码</p>
            <p><input id="submit" class="submit" value="登录" @click="handleLogin "></p>
            <div class="login"><router-link class="fr" to="/register" style="padding-top: 10px;color:#FFA507;">立即注册</router-link></div>
        </div>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';
import http from '../http/http'
export default {
  components: {
    Header, 
  },
  setup() {
    const store = inject('$store');
    const username=ref('')
    const password=ref('')
    const loginStatus = ref(null);
    const router = useRouter();
    
      const  handleLogin = async()=>{
        try {
          const response = await http.post('login',{
            username: username.value, 
            password: password.value 
          });
          console.log(http)
          loginStatus.value = response;
          router.push('/personalcenter');
          store.commit('setUser', response)
          console.log('login success');
        } catch (error) {
          console.log('login error')
        }
      };
      return {
        username,password,
        handleLogin ,
        loginStatus
      }
    },
};
</script>
<style>
.inp-box{height: 1rem;}
</style>