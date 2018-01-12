<template>
  <div class="progress" >
      <div class="m-progress">
        <div class="on"></div>
        <audio ref="audio" :src="s"></audio>
      </div>
      <p class="times">
          <span class="time-star">{{timeS}}</span>
          <span class="time-end"></span>
          <span  @click="timeStar">xxxx</span>
      </p>
    <div class="controls">
        <span class="icon left loop">&#10559;</span>
        <span>
            <span class="icon upmusic">&#8619;</span>
            <span class="icon stopmusic" @click="onplay()">&#9835;</span>
            <span class="icon nextmusic">&#8620;</span>
        </span>
        <span class="icon right listmusic">&#2039;</span>
    </div>
  </div>
</template>

<script>
export default {
    props : ['source'],
    data () {
        return {
            timeS: '',
            s:this.source
        }
    },
    methods: {
       onplay:function () {
        var method = this.$refs.audio.paused ? 'play':'pause';
        this.$refs.audio[method]();
       },
       changeP:function () {
		var percent = (this.$refs.audio.currentTime/this.$refs.audio.duration)*100;
		console.log(percent)
       },
       timeStar: function () {
           var musicTime = this.$refs.audio.duration
           var m = parseInt( musicTime / 60)
            m = m < 10 ? '0' + m : m
           var s = parseInt(musicTime % 60)
           s = s < 10 ? '0' + s : s
           console.log( m+":"+s)
       }
    },
    watch:{
        s:function(){
            this.timeStar();
             console.log(this.$refs.audio)
        }
    },
    mounted:function(){
            // console.log(this.$refs.audio)
        
    }
}
</script>

<style scoped>
.progress {
    width: 100%;
    height: 100px;
    box-sizing: border-box;
}
    .m-progress {
        position: relative;
        width: 100%;
        margin-top: 30px;
        height: 2px;
        background: #ddd;
    }
        .on {
            width: 20%;
            height: 2px;
            background: teal;
        }
    .times::after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
        color: #666;
    }
        /* .time-star {
            float: left;
        }
        .time-end {
            float: right;
        } */
.controls {
    width: 100%;
}
    .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: coral;
        line-height: 30px;
        text-align: center;
    }
</style>
