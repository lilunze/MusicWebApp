<template>
	<div>
		<v-nav></v-nav>
		<v-tag-list></v-tag-list>
		<router-view></router-view>
	</div>
</template>
<script>
	import vNav from './views/v-nav.vue';
	import vTagList from './views/v-tag-list.vue';
	export default {
		components:
		{
			vNav,
			vTagList
		}
	}
</script>