<template>
	<div id="nav">
		<a class="downclick"></a>
		<div class="list">
			<div class="tab" :class="{active: item.href == hash}" v-for="(item, i) in tablist"><a v-bind:href="item.href" @click="clicktrue(i)">{{item.text}}</a></div>
		</div>
	</div>
</template>

<script>
import '../less/nav-list.less'
export default{
  name: 'nav-list',
  data () {
    return {
      hash: window.location.href.slice(window.location.href.indexOf('#')),
      tablist: [{text: '推荐', href: '#/'},
      {text: '要闻', href: '#/hots'},
      {text: '视频', href: '#/play'},
      {text: '段子', href: '#/text'},
      {text: '汽车', href: '#/car'},
      {text: '社会', href: '#/peop'},
      {text: '娱乐', href: '#/game'},
      {text: '军事', href: '#/stro'},
      {text: '体育', href: '#/goto'},
      {text: 'NBA', href: '#/NBA'}],
      clicktrue (leng) {
        this.$data.hash = this.$data.tablist[leng].href
      }
    }
  }
}
</script>
