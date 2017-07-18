<template>
  <div class="page-index">
    <top-header></top-header>
    <nav-list></nav-list>
    <transition name="slide-fade">
      <router-view></router-view> 
    </transition> 
  </div>
</template>

<script>
import '../less/index.less'
import TopHeader from './header.vue'
import NavList from './nav-list.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { TopHeader, NavList }
}
</script>
