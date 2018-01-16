<template>
	<div>
		<v-carousel></v-carousel>
		<v-sublist></v-sublist>
		<v-daily-recommend></v-daily-recommend>
		<v-daily-selection></v-daily-selection>
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
			vCarousel,
			vSublist,
			vDailyRecommend,
			vDailySelection
		}
	}
</script>
<style scoped>
	
</style>