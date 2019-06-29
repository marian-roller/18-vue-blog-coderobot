<template>
  <div class="home">
    <div class="header-container position-relative">
      <img class="w-100" v-bind:src="imgComputedPath" alt="">
      <div class="header-text position-absolute text-center" v-bind:style="{color: homepage.color}">
        <h1>{{ homepage.header }}</h1>
        <h2>{{ homepage.subheader }}</h2>
      </div>
    </div>

    <div class="container">
      <p>{{ homepage.body }}</p>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'home',
    components: {

    },
    data: function () {
      return {
        homepage: [],
        imgPath: "http://php.coderobot.eu/backend/public/img"
      };
    },
    computed: {
      imgComputedPath: function () {
        return this.imgPath + "/" + this.homepage.file;
      }
    },
    created() {
      axios.get('http://php.coderobot.eu/backend/public/api')
        .then(res => this.homepage = res.data)
        .catch(err => console.log(router.onError()));
    }
  }
</script>

<style scoped>
  .header-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>