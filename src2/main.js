import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
Vue.use(VueRouter)

var router = new VueRouter()
// 定义路由规则
router.map({
  '/foo': {
    component: require('./components/Foo.vue')
  },
  '/bar': {
    component: require('./components/Bar.vue')
  }
})

// 这里的App是vue实例或者模块、组件，而#app是index.html中的元素，并非<template>中的<div id="app">
router.start(App, '#app')
