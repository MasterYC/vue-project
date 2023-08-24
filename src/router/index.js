import { createRouter,createWebHashHistory } from "vue-router";


export default createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/Login',
      name:'Login',
      component:()=>import('../components/Login.vue')
    },
    {
      path:'/',
      name:'home',
      component:()=>import('../components/Test.vue')
    }
  ]
})