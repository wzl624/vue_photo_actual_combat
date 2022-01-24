<template>
  <div>
    <img :src="photo.imgUrl"/>
    <p>
      {{photo.name}}
    </p>
    <button @click="back">back</button>
  </div>
</template>

<script>
import {apiGetPhoto} from '../api/index'
export default {
  props:["id"],
  async created() {
    const res = this.$store.getters.getPhotoById(this.id);
    if (res) {
      this.photo = res;
    }else{
      const {data} = await apiGetPhoto(this.id);
      this.photo = data.data; 
    }
  },
  data() {
    return {
      photo:""
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
}
</script>

<style>

</style>