<template>
  <div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用指令 v-link 进行导航。 -->
    <a v-link="{ path: '/foo' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
  </p>
</div>
  <!-- 路由外链 -->
  <router-view></router-view>
</template>
<style>
  .v-link-active {color: red; }
</style>