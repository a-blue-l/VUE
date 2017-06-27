<template>
	<div class="page-search">
		<div class="searchtop">
			<div class="inputbox">
				<input type="text" id="searchinput" placeholder="搜索你感兴趣的任何词">
			</div>
			<span class="searchbtn">搜索</span>
		</div>
		<div class="hot-search">
			<h4>大家都在搜</h4>
			<div class="hot-list">
				<a href="#" v-for="item in hotlist">{{item}}</a>
			</div>
		</div>
		<span class="download">
			<img src="../assets/yidian_illustration-34823610.png" alt="下载">
		</span>
	</div>
</template>

<script>
import '../less/search.less'

export default{
  name: 'search',
  data () {
    return {
      hotlist: [ '保险', '徐晓冬再战太极', '股票', '放弃清华选择复读', '星座', '马云自用手机曝光', '智能手机', '宋仲基宋慧乔同房', '第二次世界大战', '哥伦比亚游轮沉没', '微信', '徐晓冬再战太极', '股票', '放弃清华选择复读', '星座', '马云自用手机曝光', '智能手机', '宋仲基宋慧乔同房', '第二次世界大战', '哥伦比亚游轮沉没', '微信', '智能手机', '宋仲基宋慧乔同房', '第二次世界大战', '哥伦比亚游轮沉没', '微信' ]
    }
  }
}
</script>

