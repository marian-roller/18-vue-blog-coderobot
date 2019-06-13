<template>
  <div class="users container">

    Users
    <div v-for="user in users">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'users',
    data: function () {
      return {
        users: []
      };
    },
    created() {
      axios.get('http://localhost/~ja/18_php_vue_blog_coderobot/backend/public/index.php/users')
        .then(res => this.users = res.data)
        .catch(err => console.log(router.onError()));
    }

  }
</script>

<style scoped>

</style>