import './src/style/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const Routers=[
	{
		path:'*',
		redirect:'/index'
	},
	{
		path:'/index',
		meta:{
			title:'moju music'
		},
		component:function(resolve){
			return require(['./views/index.vue'],resolve);
		}
	},
	{
		path:'/sound/:id',
		meta:{
			title:'歌曲详情'
		},
		component:function(resolve){
			return require(['./views/v-sound.vue'],resolve);
		}
	},
	{
		path:'/hot',
		meta:{
			title:'热门'
		},
		component:function(resolve)
		{
			return require(['./views/hot.vue'],resolve);
		}
	},
	{
		path:'/famous',
		meta:{
			title:'名人'
		},
		component:function(resolve)
		{
			return require(['./views/famous.vue'],resolve);
		}
	},
	{
		path:'/mv',
		meta:{
			title:'mv'
		},
		component:function(resolve)
		{
			return require(['./views/mv.vue'],resolve);
		}
	},
	{
		path:'/origin',
		meta:{
			title:'原创'
		},
		component:function(resolve)
		{
			return require(['./views/origin.vue'],resolve);
		}
	}
];

// 路由配置
const RouterConfig={
	// 使用html5的history路由模式
	mode:'history',
	routes:Routers
}

const router=new VueRouter(RouterConfig);

router.beforeEach(function(to,from,next){
	window.document.title=to.meta.title;
	next();
})

router.afterEach(function(to,from,next){
	window.scrollTo(0,0);
})

const store=new Vuex.Store({
	state:
	{
		
	},
	mutations:
	{
		
	},
	getters:
	{
		
	}
})





new Vue({
	el:'#app',
	router:router,
	store:store,
	render:function(h)
	{
		return h(App)
	}
})