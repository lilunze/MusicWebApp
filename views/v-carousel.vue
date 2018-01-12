<template>
	<main>
        <agile :arrows="false" :autoplay="true" :speed="1000" :fade="true" :autoplaySpeed="5000" :dots="false">
            <div class="slide" v-for="item in list">
                <a :href="item.href"><img :src="item.src"></a>
            </div>
        </agile>
    </main>
</template>
<script>
	import Vue from 'vue'
	import VueAgile from 'vue-agile'

	Vue.use(VueAgile)

    export default {
        data:function(){
            return {
                list:
                [
                    {
                        href:'/sound/:id=1507279',
                        src:'https://qn-qn-echo-image-cdn.app-echo.com/FiTasCFgLLsYpr1j8ahuHkXKNr6B.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100'
                    },
                    {
                        href:'/sound/:id=1508864',
                        src:'https://qn-qn-echo-image-cdn.app-echo.com/Fixe6DFO0JcLg5zIyKCGSj8noKqp.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100'
                    },
                    {
                        href:'/sound/:id=1508513',
                        src:'https://qn-qn-echo-image-cdn.app-echo.com/FiEW4fLo6g2wPDML4v5NwOHH43fJ.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100'
                    },
                    {
                        href:'/sound/:id=1489985',
                        src:'https://al-qn-echo-image-cdn.app-echo.com/Fj20s5N1mgTxkI0X10KTeHTsMWTF.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100'
                    },
                    {
                        href:'/sound/:id=15007747',
                        src:'https://qn-qn-echo-image-cdn.app-echo.com/FgLvBO2yBxKdJXQpF0MHH-B429iO.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
	.slide 
	{
	    position: relative;
        background: #fff;
	}
	.slide a
	{
        left: 50%;
        margin: 0;
        font-size: 0;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .slide a img
    {
    	width: 100%;
    }

</style>