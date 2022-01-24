import axios from 'axios'
import router from '../router';
import store from '../store';
import Vue from 'vue';
const myAxios = axios.create({
});

myAxios.interceptors.request.use((config)=>{
  const token = store.state.token;
  if(token){
    config.headers.authorization = "Bearer " + token;
  }
  return config;
})

myAxios.interceptors.response.use((res)=>res,(err)=>{
  if(err.response.status === 401){
    Vue.prototype.$alert("登录已过期，请重新登陆","提示",{
      confirmButtonText:"确定",
      callback:()=>{
        router.push({name:"Login",});
      }
    })
  }
})
export default myAxios;