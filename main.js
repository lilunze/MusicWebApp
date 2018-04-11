import './src/style/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
// 引入组件
import main from './views/main.vue';
import index from './views/components/index.vue';
import hot from './views/components/hot.vue';
import famous from './views/components/famous.vue';
import mv from './views/components/mv.vue';
import origin from './views/components/origin.vue';
import sound from './views/components/v-sound.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

// 路由配置
const Routers=[
	{
		path:'*',
		redirect:'/main/index'
	},
	{
		path:'/main',
		meta:{
			title:'moju music'
		},
		component:main,
		children:[
			{
				path:'',
				component:index
			},
			{
				path:'index',
				component:index
			}
		]
	},
	{
		path:'/main',
		meta:{
			title:'热门'
		},
		component:main,
		children:[
			{
				path:'hot',
				component:hot
			}
		]
	},
	{
		path:'/main',
		meta:{
			title:'名人'
		},
		component:main,
		children:[
			{
				path:'famous',
				component:famous
			}
		]
	},
	{
		path:'/main',
		meta:{
			title:'mv'
		},
		component:main,
		children:[
			{
				path:'mv',
				component:mv
			}
		]
	},
	{
		path:'/main',
		meta:{
			title:'原创'
		},
		component:main,
		children:[
			{
				path:'origin',
				component:origin
			}
		]
	},
	{
		path:'/sound/:id',
		meta:{
			title:'歌曲详情'
		},
		component:sound
	},
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