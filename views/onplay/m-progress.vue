<template>
  <div class="progress">
      <div class="m-progress">
          <div class="on"></div>
      </div>
      <p class="times">
          <span class="time-star">00:00</span>
          <span class="time-end">03:40</span>
      </p>
  </div>
</template>

<script>
export default {

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
        .time-star {
            float: left;
        }
        .time-end {
            float: right;
        }
</style>
