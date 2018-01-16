<template>
    <div id="onplay">
        <header>
            <span class="h-left" >&#65088;</span>
            <span class="h-right">&#10649;</span>
        </header>
        <div class="musicContent">
            <a href="javascript:" class="musicImg">
                <img  :src='soundList.pic' alt="">
            </a>
            <div class="titles">
                <h3 class="musicName">{{soundList.name}}</h3>
                <div class="singerName">{{soundList.author}}</div>
            </div>
        </div>

        <div class="sound-control" >
          <div class="m-progress">
            <div class="on"></div>
            <audio ref="audio" :src="soundList.source"></audio>
          </div>
          <p class="times">
              <span class="time-star" @click="timeStar">00:00</span>
              <span class="time-end">{{timeE}}</span>
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

    </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  data () {
      return {
          soundList: {},
          timeE: '00:00'
      }
  },
  created () {
      var _this = this
      // var id = location.search;
      // var local_id=localStorage.getItem('sound_id');
      // id= id.substring(4,id.length)||local_id;
      var id=this.$route.params.id;
      id = id.substr(1,id.length)
      console.log(id)
      localStorage.setItem('sound_id',id);
      axios.post('http://www.lilunze.me/api/echo/index.php',qs.stringify({'url':"http://www.app-echo.com/api/sound/info?id="+id+"&comment=1"}))
      .then(function(res){
          _this.soundList = res.data.info;
          _this.$children.$ref;
          console.log(_this.soundList)
      })
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
        return this.timeE =  m+":"+s
    }
  },
  mounted () {
      var orderHeight=window.innerHeight;
      document.getElementById("onplay").style.height=orderHeight+'px';
  }
}
</script>

<style scoped>
#onplay {
    width: 100%;
}
    header {
        width: 100%;
        height: 50px;
        overflow: hidden;
        color: #555;
    }
        .h-left {
            float: left;
            line-height: 50px;
            margin-left: 12px;
        }
        .h-right {
            float: right;
            line-height: 50px;
            margin-right: 12px;
        }
    .musicContent {
        width: 100%;
        padding: 0 12px;
        box-sizing: border-box;
    }
        .musicImg {
            text-decoration: none;
            display: inline-block;
            width: 100%;
            height: 351.2px;
            font-size: 0;
            overflow: hidden;
        }
        .musicImg img {
            width: 100%;
        }
        .titles {
            text-align: center;
        }
        .musicName, .singerName {
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .titles .musicName {
            margin: 10px 0;
            font-size: 16px; 
        }
        .titles .singerName {
            font-size: 14px;
        }
    .sound-control {
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
