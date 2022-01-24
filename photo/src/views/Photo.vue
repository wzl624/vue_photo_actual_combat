<template>
  <div>
    <!-- 展示相关 -->
    <div class="container">
      <div class="photoHeader">
        <div class="imgContainer">
          <img class="photoName" src="public/img/1.jpg" />
        </div>
        <div class="btnContainer">
          <span class="photoTitle">相册名称</span>
          <button class="mybtn" @click="showAddPhotoView = true">上传照片</button>
        </div>
      </div>
      <div class="photoContainer">
        <template v-for="photo in photos">
          <router-link :key="photo.id" :to="{name:'Details',params:{id:photo.id}}">
            <div class="photoItem">
            <img :src="photo.imgUrl" />
            <span>
              {{photo.name}}
            </span>
          </div>
          </router-link>
        </template>
      </div>
    </div>
    <!-- 上传相关 -->
    <AddPhotoView 
    :visable.sync="showAddPhotoView" 
    @upload-completed="uploadCompleted">
    </AddPhotoView>
  </div>
</template>

<script>
import AddPhotoView from '../components/AddPhotoView.vue'
export default {
  components:{
    AddPhotoView,
  },
  created() {
    this.updataPhotos();
  },
  methods: {
    uploadCompleted() {
      this.updataPhotos();
    },
    updataPhotos(){
      this.$store.dispatch("updatePhotos");
    },
  },
  computed: {
    photos() {
      return this.$store.state.photos; 
    }
  },
  data() {
    return {
      showAddPhotoView:false,
    }
  },
}
</script>

<style>


</style>