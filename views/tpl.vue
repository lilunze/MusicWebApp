<template>
	<div>
		<v-nav></v-nav>
		<v-tag-list></v-tag-list>
		<slot></slot>
	</div>
</template>
<script>
	import vNav from './v-nav.vue';
	import vTagList from './v-tag-list.vue';
	import vCarousel from './v-carousel.vue';
	import vSublist from './v-sublist.vue';
	import vDailyRecommend from './v-daily-recommend.vue';
	import vDailySelection from './v-daily-selection.vue';
	export default {
		components:
		{
			vNav,
			vTagList,
			vCarousel,
			vSublist,
			vDailyRecommend,
			vDailySelection
		}
	}
</script>
<style scoped>
	
</style>