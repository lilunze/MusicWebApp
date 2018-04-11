<template>
    <div class="play-box">
        <header>
            <span class="icon-back" ></span>
        </header>
        <div class="music-content">
            <img  :src='soundList.pic' class="music-cover">
            <div class="music-desc">
                <h3 class="music-name">{{soundList.name}}</h3>
                <div class="singer-name">{{soundList.author}}</div>
            </div>
        </div>

        <div class="sound-control" >
          <div class="m-progress">
            <div class="on"></div>
            <audio ref="audio" :src="soundList.source"></audio>
          </div>
          <p class="times">
              <span class="time-start">{{timeStart}}</span>
              <span class="time-end">{{timeEnd}}</span>
          </p>
          <div class="controls">
            <span class="icon-prev"></span>
            <span :class="isPlay?'icon-pause':'icon-play'" @click="onplay()"></span>
            <span class="icon-next"></span>
          </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
      return {
          soundList: {},
          timeStart:'00:00',
          timeEnd: '00:00',
          isPlay:false
      }
  },
  created () {
      var _this = this
      var id=this.$route.params.id;
      console.log(id)
      localStorage.setItem('sound_id',id);
      axios.post('http://lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/sound/info?id="+id+"&comment=1"}))
      .then(function(res){
          _this.soundList = res.data.info;
          // _this.$children.$ref;
          console.log(res)
          // this.$nextTick(function(){

          // })
      })
  },
  methods: {
    onplay:function()
    {
	    var method = this.$refs.audio.paused ? 'play':'pause';
	    this.$refs.audio[method]();
	    this.isPlay=!this.isPlay;
	    if(this.isPlay)
	    {
	    	// this.setTime();
	    }
	    else
	    {
	    	clearInterval(t)
	    }
    },
    setTime:function(){
    	var _this=this;
    	var t=setInterval(function(){
    		// console.log(_this.$refs)
    		_this.setProgress();
    	},1000)
    },
    setProgress:function () {
      var percent = (this.$refs.audio.currentTime/this.$refs.audio.duration)*100;
      console.log(percent)
    },
  },
	mounted () {
		var _this=this;
		this.$refs.audio.addEventListener('canplay',function()
		{
			var t=parseInt(_this.$refs.audio.duration);
			if(t>60)
			{
				var m=parseInt(t/60);
				m=m<10?'0'+m:m;
				var s=parseInt(t%60);
				s=s<10?'0'+s:s;
				_this.timeEnd=m+':'+s;
			}
			else
			{
				_this.timeEnd='00:'+t;
			}
		})
	}
}
</script>

<style scoped>
.play-box
{
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;
}
.icon-back
{
	display: inline-block;
	width:1.2rem;
	height: 1.2rem;
	background: url('/src/images/icon/icon-back.png');
	background-size: 100% 100%;
}
.music-content 
{
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}
.music-cover
{
	width: 18rem;
	height: 18rem;
}
.music-name,.singer-name 
{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.music-desc .music-name 
{
    margin: 10px 0;
    font-size: 16px; 
}
.music-desc .singer-name 
{
    font-size: 14px;
}
.sound-control 
{
    width: 100%;
    height: 100px;
    box-sizing: border-box;
}
.m-progress 
{
    position: relative;
    width: 18rem;
    height: 2px;
    background: #ddd;
    margin: 2rem auto 0;
}
.on 
{
    width: 20%;
    height: 2px;
    background: #000;
}
.times
{
	width: 18rem;
	margin: 0 auto;
	line-height: 3rem;
	color: #999;
}
.times::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    color: #999;
}
.time-start 
{
    float: left;
}
.time-end 
{
    float: right;
} 
.controls 
{
    width: 100%;
    text-align: center;
    font-size: 0;
    margin-top: 2rem;
}
.icon-prev,.icon-next
{
    display: inline-block;
    vertical-align: top;
    width: 2.8rem;
    height: 2.8rem;
    margin-top: 0.4rem;
}
.icon-prev
{
	background: url('/src/images/icon/icon-prev.png');
	background-size: 100% 100%;
}
.icon-next
{
	background: url('/src/images/icon/icon-next.png');
	background-size: 100% 100%;
}
.icon-play,.icon-pause
{
	display: inline-block;
	width: 3.6rem;
	height: 3.6rem;
	margin: 0 2.8rem;
}
.icon-pause
{
	background: url('/src/images/icon/icon-pause.png');
	background-size: 100% 100%;
}
.icon-play
{
	background: url('/src/images/icon/icon-play-a.png');
	background-size: 100% 100%;
}
</style>
