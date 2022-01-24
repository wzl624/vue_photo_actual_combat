<template>
  <div class="uploadPhotoItem">
    <span class="myProgress">
      <span class="plan" :style="{width:percent+'%'}"></span>
      {{percent}}%
    </span>
    <img :src="imgUrl" />
    <span class="pictureName">
      {{photo.name}}
    </span>
  </div>
</template>

<script>
export default {
  props:["photo"],
  created() {
    const render = new FileReader();
    render.readAsDataURL(this.photo);
    render.onload = () => {
      this.imgUrl = render.result;
    }
  },
  data() {
    return {
      imgUrl:"",
      percent:0,
    }
  },
  methods: {
    updateProgress(val) {
      this.percent = val;
    }
  },
}
</script>

<style>

</style>