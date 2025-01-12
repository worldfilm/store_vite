<template>
    <div id="header">
        <div id="home">
            <router-link to="/home">好邻居便利店</router-link>
        </div>
        <div id="my"><router-link to="personalcenter"></router-link></div>
    </div> 
</template>
<script>
export default {
  name: 'Header'
};
</script>