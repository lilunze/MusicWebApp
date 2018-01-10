<template>
	<main>
        <agile :arrows="false">
            <div class="slide">
                <a href="sound.html?id=1490529"><img src="https://ws-qn-echo-image-cdn.app-echo.com/Fi_-LEVfodBayt46mY-dzQAKPKPe.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100"></a>
            </div>
            <div class="slide">
                <a href="sound.html?id=1488325"><img src="https://ws-qn-echo-image-cdn.app-echo.com/Ft-qRU9HJvFlfArLGg30yk9wmGtF.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100"></a>
            </div>
            <div class="slide">
                <a href="sound.html?id=1479229"><img src="https://ws-qn-echo-image-cdn.app-echo.com/FvBJOVY2zDAy5ubkS_CFgaQvTeWZ.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100"></a>
            </div>
            <div class="slide">
                <a href="sound.html?id=1489985"><img src="https://al-qn-echo-image-cdn.app-echo.com/Fj20s5N1mgTxkI0X10KTeHTsMWTF.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100"></a>
            </div>
            <div class="slide">
                <a href="javascript:void(0)"><img src="https://ws-qn-echo-image-cdn.app-echo.com/Fi_-LEVfodBayt46mY-dzQAKPKPe.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100"></a>
            </div>
        </agile>
    </main>
</template>
<script>
	import Vue from 'vue'
	import VueAgile from 'vue-agile'

	Vue.use(VueAgile)
</script>
<style scoped>
	.slide 
	{
	    position: relative;
	}
	.slide a
	{
        left: 50%;
        margin: 0;
        /*position: absolute;*/
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .slide a img
    {
    	width: 100%;
    }

    .agile__dots 
    {
        text-align: center;
    }
    .agile__dot
    {
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
    }
    .agile__dot button 
    {
        background-color: transparent;
        border: 1px solid #fff;
    }
    .agile__dot button:hover 
    {
        background-color: #fff;
    }

    .agile--current button
 	{
        background-color: #fff;
    }

</style>