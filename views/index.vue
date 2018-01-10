<template>
	<div>
		<v-nav></v-nav>
		<v-tag-list></v-tag-list>
		<v-carousel></v-carousel>
	</div>
</template>
<script>
	import vNav from './v-nav.vue';
	import vTagList from './v-tag-list.vue';
	import vCarousel from './v-carousel.vue';
	export default {
		components:
		{
			vNav,
			vTagList,
			vCarousel
		}
	}
</script>
<style scoped>
	
</style>