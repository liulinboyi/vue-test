<template>
  <div id="app">
      <img @click="changePic" :src="imgSrc" width="90px" height="120px" title="单击来切换图片">
  </div>
</template>

<script>
export default {
  data () {
    return{
      showPic: true
    }
  },
  methods: {
    changePic () {
      this.showPic = !this.showPic
    }
  },
  computed: {
      imgSrc () {
          return this.showPic ? require('../assets/dog.jpg') : require('@/assets/dog1.jpg')
      }
  }
}
</script>