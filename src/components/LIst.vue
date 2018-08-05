<style scoped>
.jackyang-title {
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  height: 45px;
  line-height: 45px;
  color: white;
  background-color: #4c4c4c;
}

.lists-content {
  margin-top: 25px;
}

.more-data {
  text-align: center;
  color: #4f4f4f;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
</style>

<template>
  <div>
    <div class="jackyang-title">
      <span>{{ msg }}</span>
    </div>
    <div class="lists-content">
      <v-lists></v-lists>
      <div class="more-data" v-on:click="findMore">
        <span>查看更多>></span>
      </div>
    </div>
  </div>
</template>

<script>
import vLists from './lists/listsContent'

export default {
  name: 'Lists',
  components: {
    'v-lists': vLists
  },
  data () {
    return {
      msg: 'hello',
      nowMsg: ''
    }
  },
  created () {
    this.msg = this.$route.params.keyworld;
  },
  methods: {
    findMore: function () {
      console.log('获取更多图文列表');
    }
  }

}
</script>

