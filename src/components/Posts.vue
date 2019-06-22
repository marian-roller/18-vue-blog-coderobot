<template>
    <div class="posts container">
        <h1>Lista wszystkich postów</h1>
        <div v-for="post in posts" class="mb-5">
            <p>{{ post.title }}</p>
            <router-link v-bind:to="'/posts/' + post.id" class="btn btn-sm btn-info">Szczegóły</router-link>
        </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'posts',
        components: {

        },
        data: function () {
            return {
                posts: []
            };
        },
        created() {
            axios.get('http://localhost/~ja/18_php_vue_blog_coderobot/backend/public/index.php/api/posts')
                .then(res => this.posts = res.data)
                .catch(err => console.log(router.onError()));
        }
    }
</script>