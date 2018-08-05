<style scoped>
.bottom-dev {
  width: 25%;
  height: 60px;
  float: left;
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: top;
}

.bottom-dev:first-child {
  background-image: url('/static/images/png.png');
}

.bottom-dev:nth-child(2) {
  background-image: url('/static/images/txt.png');
}

.bottom-dev:nth-child(3) {
  background-image: url('/static/images/mp4.png');
}

.bottom-dev:last-child {
  background-image: url('/static/images/gif.png');
}
</style>

<template>
  <div>
    <div class="bottom-dev"></div>
    <div class="bottom-dev"></div>
    <div class="bottom-dev"></div>
    <div class="bottom-dev"></div>
  </div>
</template>

<script>
export default {
  
}
</script>
