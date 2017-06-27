<template>
  <div class="page-index">
    <top-header></top-header>
  </div>
</template>

<script>
import '../less/index.less'
import TopHeader from './header.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { TopHeader }
}
</script>
