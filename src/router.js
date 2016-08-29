import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 创建一个路由器实例
var router = new VueRouter()

// 定义路由规则
router.map({
  '/foo': {
    component: require('./components/Hello.vue')
  },
  '/bar': {
    component: require('./components/Lee.vue')
  }
})

export default router
