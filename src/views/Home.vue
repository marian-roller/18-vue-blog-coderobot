<template>
  <div class="home">
    <div class="container mb-5">
      <p v-html="homepage.body"></p>
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
      };
    },
    created() {
      axios.get('http://php.coderobot.eu/backend/public/api')
        //axios.get('http://localhost:8081/api')
        .then(res => this.homepage = res.data)
        .catch(err => console.log(router.onError()));
    }
  }
</script>

<style scoped>

</style>