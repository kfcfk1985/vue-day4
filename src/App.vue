//ok
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button  @click="check">查询当前用户信息</button>
      <button v-if="$store.state.isLogin" @click="logout">注销</button>
    </div>
    <router-view/>
  </div>
</template>

<script>

import axios from 'axios'

// ok
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    check(){
        axios.get('/api/userinfo')
    }
  },
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
