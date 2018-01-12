<template>
	<div>
		<v-nav></v-nav>
		<v-tag-list></v-tag-list>
		<v-carousel></v-carousel>
		<v-daily-recommend></v-daily-recommend>
		<v-daily-selection></v-daily-selection>
	</div>
</template>
<script>
	import vNav from './v-nav.vue';
	import vTagList from './v-tag-list.vue';
	import vCarousel from './v-carousel.vue';
	import vDailyRecommend from './v-daily-recommend.vue';
	import vDailySelection from './v-daily-selection.vue';
	export default {
		components:
		{
			vNav,
			vTagList,
			vCarousel,
			vDailyRecommend,
			vDailySelection
		}
	}
</script>
<style scoped>
	
</style>