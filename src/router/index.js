import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import login from '@/components/login'
import reg from '@/components/reg'
import add from '@/components/add'
import edit from '@/components/edit'
Vue.use(Router)
var router=new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component:list
    },
      {
          path: '/login',
          name: 'login',
          component:login
      },
      {
          path: '/reg',
          name: 'reg',
          component:reg
      },
      {
          path: '/edit',
          name: 'edit',
          component:edit
      },
      {
          path: '/add',
          name: 'add',
          component:add
      },

  ],

});
router.beforeEach((to,from,next)=>{
    if(localStorage.login=="yes"){
        next()
    }else{
        if(to.path=="/login"||to.path=="/reg"){
            next();
        }else{
            next('/login')
        }
    }
});
export default router;
