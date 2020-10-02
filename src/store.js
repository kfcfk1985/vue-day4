import Vue from "vue";
import Vuex from "vuex";
import us from "./service/user";

Vue.use(Vuex);

// ok
export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token') ? true : false
  },
  mutations: {
    setLoginState(state, b) {
      state.isLogin = b;
    }
  },
  actions: {  //这里的代码要尽量保持清爽，因此把接口请求的代码封装成一个文件
    login({ commit }, user) {
      // 登录请求
      return us.login(user).then(res => {
        const { code, token } = res.data;
        if (code) {
          // 登录成功
          commit("setLoginState", true);
          localStorage.setItem("token", token);
        }
        return code;
      });
    },
    logout({ commit }){
      // 清缓存
      localStorage.removeItem('token')
      // 重置状态
      commit("setLoginState", false);
    }
  }
});
